const Document = require('../models/Document');
const Student = require('../models/Student');
const multer = require('multer');
const path = require('path');

// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload variable
const upload = multer({ storage: storage }).single('document');

// Upload a new document
exports.uploadDocument = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error uploading file', err });
        }

        try {
            const { studentId, documentType } = req.body;
            const document = new Document({
                student: studentId,
                documentType,
                url: req.file.path
            });

            await document.save();

            // Add the document to the student's document array
            await Student.findByIdAndUpdate(studentId, {
                $push: { documents: document._id }
            });

            res.status(201).json({ message: 'Document uploaded successfully!', document });
        } catch (error) {
            res.status(500).json({ message: 'Error saving document', error });
        }
    });
};

// Get a specific document
exports.getDocument = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) return res.status(404).json({ message: 'Document not found' });

        res.status(200).json(document);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching document', error });
    }
};

// Delete a document
exports.deleteDocument = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) return res.status(404).json({ message: 'Document not found' });

        await document.remove();

        // Remove the document from the student's document array
        await Student.findByIdAndUpdate(document.student, {
            $pull: { documents: document._id }
        });

        res.status(200).json({ message: 'Document deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting document', error });
    }
};

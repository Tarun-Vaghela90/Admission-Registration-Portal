const express = require('express');
const router = express.Router();
const multer = require('multer');

// Set up multer for file uploads
const ProfileImage = multer({ dest: './uploads/Documents/ProfileImages' });
const UserCollageDocs = multer({ dest: './uploads/Documents/UserCollageDocs' });

router.post('/ProfileImg',ProfileImage.single('profileImage'), (req, res) => {
    // Handle the file upload and respond
    try {
        res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    } catch (error) {
        res.status(500).json({ message: 'Failed to upload file', error });
    }
});
router.post('/UserCollageDocs', UserCollageDocs.single('UserCollageDocs'), (req, res) => {
    // Handle the file upload and respond
    try {
        
        res.status(200).json({ message: 'File uploaded successfully', file: req.file , text:req.body});
    } catch (error) {
        res.status(500).json({ message: 'Failed to upload file', error });
    }
});

module.exports = router;

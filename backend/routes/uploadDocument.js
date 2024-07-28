

const express = require('express');
const router = express.Router();
const documentController = require('../controller/documentController');

// Upload a new document
router.post('/upload', documentController.uploadDocument);

// Get a specific document
router.get('/:id', documentController.getDocument);

// Delete a document
router.delete('/:id', documentController.deleteDocument);

module.exports = router;

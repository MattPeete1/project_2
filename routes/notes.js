const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/workouts/:id/notes', ensureLoggedIn, notesCtrl.create);

router.delete('/notes/:id', ensureLoggedIn, notesCtrl.delete);

module.exports = router;

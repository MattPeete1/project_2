const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/exercises/new', ensureLoggedIn, exercisesCtrl.new);

router.post('/exercises', ensureLoggedIn, exercisesCtrl.create);

router.post('/workouts/:id/exercises', ensureLoggedIn, exercisesCtrl.addToExercise);

module.exports = router;
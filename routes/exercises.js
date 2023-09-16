const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');

router.get('/exercises/new', exercisesCtrl.new);

router.post('/exercises', exercisesCtrl.create);

router.post('/workouts/:id/exercises', exercisesCtrl.addToExercise);

module.exports = router;
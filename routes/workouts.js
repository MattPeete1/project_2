const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workouts');

router.get('/', workoutCtrl.index);

router.get('/new', workoutCtrl.newWorkout);

router.get('/:id', workoutCtrl.show);

router.post('/', workoutCtrl.create);

module.exports = router;
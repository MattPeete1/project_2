const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workouts');

router.get('/', workoutCtrl.index);

router.get('/new', workoutCtrl.newWorkout);

router.get('/:id/edit', workoutCtrl.edit);

router.get('/:id', workoutCtrl.show);

router.post('/', workoutCtrl.create);

router.put('/:id', workoutCtrl.update);

module.exports = router;
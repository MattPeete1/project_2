const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', workoutCtrl.index);

router.get('/new', ensureLoggedIn, workoutCtrl.newWorkout);

router.get('/:id/edit', ensureLoggedIn,  workoutCtrl.edit);

router.get('/:id', ensureLoggedIn, workoutCtrl.show);

router.post('/', ensureLoggedIn, workoutCtrl.create);

router.delete('/:id', ensureLoggedIn, workoutCtrl.deleteWorkout);

router.put('/:id', ensureLoggedIn, workoutCtrl.update);

module.exports = router;
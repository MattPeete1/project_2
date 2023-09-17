const Exercise = require('../models/exercise');
const Workout = require('../models/workout');

async function newExercise(req, res) {
  const exercises = await Exercise.find({}).sort('name');
  res.render('exercises/new', { title: 'Add Exercise', exercises });
};

async function create(req, res) {
    try {
        await Exercise.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/exercises/new');
};

async function addToExercise(req, res) {
    const workout = await Workout.findById(req.params.id);
    workout.exercise.push(req.body.exerciseId);
    await workout.save();
    res.redirect(`/workouts/${workout._id}`);
};

module.exports = {
    new: newExercise,
    create,
    addToExercise
  };
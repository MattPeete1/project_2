const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', {
        title: 'All Workouts', workouts
    });
};

async function show(req, res) {
    const workout = await Workout.findById(req.params.id).populate('exercise');
    const exercises = await Exercise.find({_id: {$nin: workout.exercise}}).sort('name');
    res.render('workouts/show', {
        title: 'Day Details', workout , exercises
    });
};

function deleteWorkout(req, res, next) {
    Workout.findById(req.params.id)
      .then((workout) => {
        return workout.deleteOne();
      })
      .then(() => res.redirect('/workouts'))
      .catch(next);
};

function update(req, res, next) {
    Workout.findById(req.params.id)
      .then((workout) => {
        return workout.updateOne(req.body);
      })
      .then(() => res.redirect(`/workouts/${req.params.id}`))
      .catch(next);
};

function edit(req, res) {
    Workout.findById(req.params.id)
    .then(workout => {
        res.render('workouts/edit', {
            title: 'Edit Workout', workout
        });
    });
};

function newWorkout(req, res, next) {
    res.render('workout/new', {
        errorMsg: '', title: 'New Workout'
    });
};

async function create(req,res,next) {
    console.log(req.body);
    req.body.eaten = !!req.body.eaten;
    try {
      const workout = await Workout.create(req.body);
      res.redirect(`/workouts/${workout._id}`);
    } catch (err) {
      console.log(err);
      res.render('workout/new', { errorMsg: err.message });
    }
};

module.exports = {
    index,
    show,
    newWorkout,
    create,
    edit,
    update,
    deleteWorkout
};
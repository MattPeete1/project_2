const Workout = require('../models/workout');

async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', {
        title: 'Workouts', workouts
    });
};

async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/show', { title: 'Workout Detail', workout
});
  }

function newWorkout(req, res, next) {
    res.render('workout/new', {
        errorMsg: '', title: 'New Workout'
    });
};

async function create(req,res,next) {
    console.log(req.body);
    req.body.eaten = !!req.body.eaten;
    try {
      await Workout.create(req.body);
      res.redirect('/workouts/new');
    } catch (err) {
      console.log(err);
      res.render('workout/new', { errorMsg: err.message });
    }
};

module.exports = {
    index,
    show,
    newWorkout,
    create
};
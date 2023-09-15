const Workout = require('../models/workout');

module.exports = {
    create
};
async function create(req, res) {
    const workout = await Workout.findById(req.params.id);
    workout.notes.push(req.body);
    try {
        await  workout.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/workouts/${workout._id}`);
};
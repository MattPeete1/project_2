const Workout = require('../models/workout');

async function create(req, res) {
    const workout = await Workout.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    workout.notes.push(req.body);
    try {
        await workout.save();
      } catch (err) {
        console.log(err);
      }
    res.redirect(`/workouts/${workout._id}`);
};

async function deleteNote(req, res) {
  const workout = await Workout.findOne({ 'notes._id': req.params.id, 'notes.user': req.user._id });
  if (!workout) return res.redirect('/workouts');
  workout.notes.remove(req.params.id);
  await workout.save();
  res.redirect(`/workouts/${workout._id}`);
};

module.exports = {
    create,
    delete: deleteNote
};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
day: {
    type: Number,
    required: true,
    min: 0,
    max: 365,
    required: true
},
workout: {
    type: String,
    enum: ['Workout 1', 'Workout 2', 'Workout 3', 'Workout 4', 'Workout 5','Workout 6', 'Workout 7']
},
eaten: {
    type: Boolean,
    default: true
},
muscleGroup: {
    type: String,
    enum: ['Chest, Shoulders, Triceps', 'Core & Cardio', 'Back & Biceps', 'Core & Cardio', 'Legs', 'Rest']
},
sets: {
    type: Number,
    min: 0,
    max: 10
},
reps: {
    type: Number,
    min: 0,
    max: 50
},
 }, {
    timestamps: true,
 });

 module.exports = mongoose.model('Workout', workoutSchema);
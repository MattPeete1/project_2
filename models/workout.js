const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
content: {
    type: String,
    required: true
},
exerciseNo: {
    type: String,
    enum: ['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4', 'Exercise 5', 'Exercise 6', 'Exercise 7', 'Exercise 8', 'Exercise 9', 'Exercise 10']
},
intensity: {
    type: String,
    enum: ['Low', 'Medium', 'High']
},
user: {
  type: Schema.Types.ObjectId,
  ref: 'User',
  required: true
},
userName: String,
userAvatar: String
}, {
timestamps: true
});
  
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
exercise: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
notes: [notesSchema],
 }, {
    timestamps: true,
 });

 module.exports = mongoose.model('Workout', workoutSchema);

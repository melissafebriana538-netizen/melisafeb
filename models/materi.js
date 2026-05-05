const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  text: String,
  options: [String],
  correct: Number
});

const QuizResultSchema = new mongoose.Schema({
  date: Date,
  score: Number,
  answers: [Number]
});

const MateriSchema = new mongoose.Schema({
  title: String,
  type: { type: String, enum: ['youtube', 'document'] },
  source: String,        // URL YouTube atau path file dokumen
  thumbnail: String,
  summary: String,
  quiz: [QuizSchema],
  quizResults: [QuizResultSchema],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Materi', MateriSchema);
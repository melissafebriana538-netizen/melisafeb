const mongoose = require('mongoose');

const RoomDocumentSchema = new mongoose.Schema({
  roomCode: { type: String, required: true, index: true },
  materiId: { type: mongoose.Schema.Types.ObjectId, ref: 'Materi', required: true },
  sharedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sharedByName: { type: String, default: '' },
  title: { type: String, default: '' },
  source: { type: String, default: '' },
  type: { type: String, enum: ['youtube', 'document'], default: 'document' },
  sharedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RoomDocument', RoomDocumentSchema);


/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const RecordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  weight: {
    type: Number,
    min: 0
  },
  isArchived: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Record = mongoose.model('Record', RecordSchema);

export { Record };

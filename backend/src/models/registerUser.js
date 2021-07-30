const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * When you create EMT, an EMT is also a User
 */

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isEMT : {
      type: Boolean,
      required: true,
      default: false,
  }
});

module.exports = mongoose.model('User', UserSchema);

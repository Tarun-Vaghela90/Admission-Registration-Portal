const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const WebmasterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'webmaster'
  },
}, { timestamps: true });

// Pre-save hook to hash the password before saving
WebmasterSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
WebmasterSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Webmaster = mongoose.model('Webmaster', WebmasterSchema);
module.exports = Webmaster;

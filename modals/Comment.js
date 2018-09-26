const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    gravatarUrl: String,
  },
  {
    timestamps: true,
  }
);

commentSchema.pre('save', function (next) {
  const hashedEmail = crypto.createHash('md5').update(this.email.toLowerCase()).digest('hex');
  this.gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}`;
  next();
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

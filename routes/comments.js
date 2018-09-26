const Comment = require('../modals/Comment');

const commentsHandler = {
  get: async (req, res) => {
    try {
      const comments = await Comment.find({});
      return res.status(200).json(comments);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  post: async (req, res) => {
    const { email, message } = req.body;
    const comment = new Comment({
      email,
      message
    });
    try {
      const result = await comment.save();
      return res.status(201).json({ success: result });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};


module.exports = commentsHandler;

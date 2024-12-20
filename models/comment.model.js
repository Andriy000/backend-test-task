import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
});

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment; 

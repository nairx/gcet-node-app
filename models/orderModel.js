import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  email: { type: String },
  items: { type: Object },
  orderValue: { type: Number },
  orderDate: { type: Date },
});
// const product = mongoose.model("Product", productSchema);

export default mongoose.model("Order", orderSchema);

import mongoose from "mongoose";

const validateMongoId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error(`Invalid mongo id or not found`);
};

export default validateMongoId;

import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    value: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true, min: 1, max: 12 },
    day: { type: Number, required: true, min: 1, max: 31 },
    yearMonth: { type: String, required: true },
    yearMonthDay: { type: String, required: true },
    type: { type: String, required: true, enum: ["+", "-"] },
  },
  { versionKey: false }
);

export default mongoose.model("Lancamento", schema);

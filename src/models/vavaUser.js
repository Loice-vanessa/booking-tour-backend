import mongoose from "mongoose";

const vavaUserSchema = new mongoose.Schema(
  {
    names: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true,
      unique: true

    },
    voted: {
      type: Boolean,
      default: false,
    },
    vote: {
      type: Boolean,
      default: false,
    },
    recheck:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const vavaUser = mongoose.model("vavaUser", vavaUserSchema);

export default vavaUser;
import mongoose from "mongoose";
const tourSchema = new mongoose.Schema(
  {
    title: String,
    location: [String],
    duration: {
      startAt: Date,
      EndAt: Date,
    },
    description: String,
    price: String,
    seats: Number,
    phone: String,
    picture: String,
    rate: Number,

    dateScheduled: Date,
    dueDate: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
tourSchema.pre(/^find/, function (next) {
  this.populate({ 
    path:"createdBy",
    select:"email phone names picture"
  });
  next();
});

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;

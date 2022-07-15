import mongoose from "mongoose";

// schema of booking

const bookingSchema = new mongoose.Schema({
    bookedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    },
    tourId:{
        type:mongoose.Schema.ObjectId,
        ref:"Tour"
    },
    paidAmount:String,
    status:{
        type:String,
        enum:["pending","accept","cancel"],
        default:"pending"
    },
},{timestamps:true}
);
bookingSchema.pre(/^find/,function(next){
    this.populate({
        path:"bookedBy",
        select:"email phone names picture"
    });
    this.populate({
        path:"tourId",
        select:"title location duration price picture"
    });
    next();
}
);
const bookingTour=mongoose.model('booking',bookingSchema);

export default bookingTour;
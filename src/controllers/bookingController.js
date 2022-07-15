import BookingServices from "../services/bookingService";
import Response from "../utils/response";

class BookingController{

    // Create Booking Controller
    static async createBooking(req,res){
        const Booking = await BookingServices.createBooking(req);
        if(!Booking){
            return Response.errorMessage(res, "Failed Created" , 400)
        }
        return Response.successMessage(
            res,
            "Booking Successful Created",
            Booking,
            200
        );
    }


    //get all booking controller

    static async getAll(req,res){
        const Booking = await BookingServices.getAll(req);
        if(!Booking){
            return Response.errorMessage(res, "Not found" , 400)
        }
        return Response.successMessage(
            res,
            "Booking Successful to retrieve",
            Booking,
            200
        );
    }
    
    //update booking controller
   
    
    static async upadateBooking(req,res){
        const Booking = await BookingServices.upadateBooking(req);
        if(!Booking){
            return Response.errorMessage(res, "Failed Created" , 400)
        }
        return Response.successMessage(
            res,
            "Booking Successful Created",
            Booking,
            200
        );
    }

    // get one by id 

    static async getOneById(req,res){
        const Booking = await BookingServices.getOneById(req);
        if(!Booking){
            return Response.errorMessage(res, "Not found" , 400)
        }
        return Response.successMessage(
            res,
            "Booking Successful to retrieve",
            Booking,
            200
        );
    }
}
export default BookingController
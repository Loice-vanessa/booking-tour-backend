import UserInfos from "../models/user";

class DataChecker {
  //check if user email exist
  static  isEmailExist=async(req, res, next)=> {
    const user = await UserInfos.findOne({ email: req.body.email });
    try{
      if(!user){
        return next();
    }
    return res.status(401).json({message:"email already exist"});
    }catch(error){
      console.log(error);
    }
  }
}

export default DataChecker;

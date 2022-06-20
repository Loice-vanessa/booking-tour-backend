import UserServices from "../services/userService";

class UserController{

    static testController(req,res){
        const test=UserServices.testServiceFunction(req);
        return res.status(200).json({
            message:"Ok! Successfully ",
            data:test
        })

    }

}
export default UserController;
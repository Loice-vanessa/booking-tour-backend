import UserServices from "../services/userService";

class UserController{
    // register User
    static async registerUser(req,res){
        const newUser = await UserServices.registerUser(req)
        if (!newUser){
            return res.status(400).json({message:"failed to register",});
        }
        return res.status(201).json({message:"success",data: newUser});
    }
    //get user
    static async getAll(req,res){
        const newUser = await UserServices.getAll(req)
        if (!newUser){
            return res.status(400).json({message:"failed to getall",});
        }
        return res.status(201).json({message:"success",data: newUser});
    }
    //delete user
    static async deleteUser(req,res){
        const newUser = await UserServices.deleteUser(req)
        if (!newUser){
            return res.status(400).json({message:"failed to deleteUser",});
        }
        return res.status(201).json({message:"success",data: newUser});
    }
    //updateUser
    static async updateUser(req,res){
        const newUser = await UserServices.updateUser(req)
        if (!newUser){
            return res.status(400).json({message:"failed to updateUser",});
        }
        return res.status(201).json({message:"success",data: newUser});
    }



    static testController(req,res){
        const test=UserServices.testServiceFunction(req);
        return res.status(200).json({
            message:"Ok! Successfully",
            data:test
        })

    }

}
export default UserController;
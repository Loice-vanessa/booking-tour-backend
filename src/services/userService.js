import userModel from "../models/user";
class UserServices {
  // static registerUser
  static async registerUser(req) {
    const user = userModel.create(req.body);

    return user;
  }
  // static getall
  static async getAll(req) {
    const user = userModel.find();

    return user;
  }
  //static deleteUser
  static async deleteUser(req) {
    const user = userModel.deleteOne({_id: req.params.id});

    return user;
  }
  //static updateUser
  static async updateUser(req) {
    await userModel.findOneAndUpdate({_id: req.params.id},req.body);
    const user = userModel.findOne({_id: req.params.id});
    return user;
  }
  //


  static testServiceFunction(req) {
    req.body.names = req.body.names.toUpperCase();
    const { num1, num2 } = req.body;

    const sum = num1 + num2;
    req.body.sum = sum;
    return req.body;
  }
}
export default UserServices;

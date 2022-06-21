import userModel from "../models/user";
class UserServices {
  // static registerUser
  static async registerUser(req) {
    const user = userModel.create(req.body);

    return user;
  }

  static testServiceFunction(req) {
    req.body.names = req.body.names.toUpperCase();
    const { num1, num2 } = req.body;

    const sum = num1 + num2;
    req.body.sum = sum;
    return req.body;
  }
}
export default UserServices;

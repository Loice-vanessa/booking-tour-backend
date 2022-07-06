import { Router } from "express";
import UserController from "../controllers/userControllers";

const route =Router();

route.post("/user/test",UserController.testController);
route.post("/user",UserController.registerUser);
route.get("/user",UserController.getAll);
route.delete("/user/:id",UserController.deleteUser);
route.patch("/user/:id/:names",UserController.updateUser);


export default route;
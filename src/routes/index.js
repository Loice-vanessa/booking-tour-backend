import { Router } from "express";
import UserController from "../controllers/userControllers";

const route =Router();

route.post("/user/test",UserController.testController);
route.post("/user/create",UserController.registerUser);


export default route;
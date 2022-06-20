import { Router } from "express";
import UserController from "../controllers/userControllers";

const route =Router();

route.post("/user/test",UserController.testController);


export default route;
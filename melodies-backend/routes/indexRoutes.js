import express from "express";
import authRoute from "./authRoutes.js";

const RootRoute = express.Router();

RootRoute.use("/auth", authRoute);

export default RootRoute;

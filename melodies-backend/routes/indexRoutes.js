import express from "express";
import authRoute from "./authRoutes.js";
import songRoute from "./songRoutes.js";

const RootRoute = express.Router();

RootRoute.use("/auth", authRoute);
RootRoute.use("/songs", songRoute);

export default RootRoute;

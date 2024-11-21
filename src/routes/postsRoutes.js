import express from "express";
import { listarTodosPosts, listarPostPorId } from "../controller/postsController.js";    

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listarTodosPosts);
    app.get("/posts/:id", listarPostPorId);
}

export default routes;
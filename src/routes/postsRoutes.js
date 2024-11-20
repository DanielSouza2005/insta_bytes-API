import express from "express";
import { listarTodosPosts } from "../controller/postsController.js";    

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listarTodosPosts);
}

export default routes;

// app.get('/posts/:id', (req, res) => {    
//     const index = buscaPostPorID(req.params.id);
//     res.status(200).json(posts[index]);
// });

// function buscaPostPorID(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// }
import express from "express";
import multer from "multer";
import cors from "cors";
import { listarTodosPosts, listarPostPorId, postarNovoPost, 
         uploadImagem, atualizarPost, apagarPost } from "../controller/postsController.js"; 
         
const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}         

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({dest: "./uploads", storage});

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/posts", listarTodosPosts);
    app.get("/posts/:id", listarPostPorId);

    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarPost);

    app.delete("/upload/:id", apagarPost);
}

export default routes;
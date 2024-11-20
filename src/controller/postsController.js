import getTodosPosts from "../models/postsModel.js";

export async function listarTodosPosts(req, res){
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}
import getPosts  from "../models/postsModel.js";

export async function listarTodosPosts(req, res){
    const posts = await getPosts.getTodosPosts();
    res.status(200).json(posts);
}

export async function listarPostPorId(req, res){
    const posts = await getPosts.getPostPorID(req.params.id);
    res.status(200).json(posts);
}
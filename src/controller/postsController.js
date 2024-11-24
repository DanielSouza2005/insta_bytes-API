import Posts  from "../models/postsModel.js";
import gerarDescricaoComGemini from "../services/geminiService.js";
import fs from "fs";

export async function listarTodosPosts(req, res){
    try {
        const posts = await Posts.getTodosPosts();
        res.status(200).json(posts);
    } catch (erro){
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na Requisição"});
    }    
}

export async function listarPostPorId(req, res){
    try {
        const posts = await Posts.getPostPorID(req.params.id);
        res.status(200).json(posts);
    } catch (erro){
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na Requisição"});
    }    
}

export async function postarNovoPost(req, res){
    const novoPost = req.body;
    try {
        const postCriado = await Posts.criarNovoPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na Requisição"});
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };    

    try {
        const postCriado = await Posts.criarNovoPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;

        fs.renameSync(req.file.path, imagemAtualizada);

        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na Requisição"});
    }
}

export async function atualizarPost(req, res){
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;  
    const promptDescricao = "Gere apenas a Descrição em português do Brasil para a seguinte imagem, sem parecer que está conversando com outra pessoa.";
    const promptAlt = "Gere apenas a Alt Text em português do Brasil para a seguinte imagem, sem parecer que está conversando com outra pessoa.";

    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`); 
        const descricao = await gerarDescricaoComGemini(imageBuffer, promptDescricao);
        const alt = await gerarDescricaoComGemini(imageBuffer, promptAlt);
        
        const post = {
            imgUrl: urlImagem,
            descricao: descricao, //req.body.descricao
            alt: alt //req.body.alt
        }

        const postCriado = await Posts.atualizarNovoPost(id, post);

        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na Requisição"});
    }    
}

export async function apagarPost(req, res){
    try {        
        const urlImagem = `uploads/${req.params.id}.png`;  

        try {
            fs.unlinkSync(urlImagem);
        } catch (erro) { 
            console.error(erro.message);
            res.status(500).json({"Erro": "Falha na Requisição"});
            return;
        }

        const post = await Posts.apagarPost(req.params.id);

        res.status(200).json(post);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na Requisição"});
    }
}
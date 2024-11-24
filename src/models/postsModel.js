import 'dotenv/config';
import conectaBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";
const conexao = await conectaBanco(process.env.STRING_CONEXAO);

async function getTodosPosts(){
    const db = conexao.db("instabyte");
    const colecao = db.collection("posts");

    return colecao.find().toArray();
};

async function getPostPorID(id) {
    const db = conexao.db("instabyte");
    const colecao = db.collection("posts");     
    const document = await colecao.findOne({ _id: ObjectId.createFromHexString(id) }); 

    return document;
}

async function criarNovoPost(post){
    const db = conexao.db("instabyte");
    const colecao = db.collection("posts");

    return colecao.insertOne(post);
}

async function atualizarNovoPost(id, post){
    const db = conexao.db("instabyte");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);

    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: post});        
}

async function apagarPost(id){
    const db = conexao.db("instabyte");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);

    return colecao.deleteOne({_id: new ObjectId(objID)});
}

export default { getTodosPosts, getPostPorID, criarNovoPost, atualizarNovoPost, apagarPost };
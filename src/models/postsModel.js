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

export default { getTodosPosts, getPostPorID };
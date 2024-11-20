import conectaBanco from "../config/dbConfig.js";
const conexao = await conectaBanco(process.env.STRING_CONEXAO);

export default async function getTodosPosts(){
    const db = conexao.db("instabyte");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}
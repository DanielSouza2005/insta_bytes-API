import { MongoClient } from 'mongodb';

export default async function conectaBanco(stringConexao){
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao Banco...');

        await mongoClient.connect();
        console.log('Conectado ao Mongo!');

        return mongoClient;
    } catch (erro){ 
        console.error('Falha na Conexão :(');
        process.exit();
    }    
}
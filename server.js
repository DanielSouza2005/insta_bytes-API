import express from 'express';

const app = express();
app.listen(3000, () => {
    console.log('Servidor Escutando :)');
});

app.get('/api', (req, res) => {    
    res.status(200).send('Chora Lucas - GET!');
});

app.post('/api', (req, res) => {
    res.status(200).send('Chora Lucas - POST!');
});

app.put('/api', (req, res) => {
    res.status(200).send('Chora Lucas - PUT!');
});

app.delete('/api', (req, res) => {
    res.status(200).send('Chora Lucas - DELETE!');
});

app.patch('/api', (req, res) => {
    res.status(200).send('Chora Lucas - PATCH!');
});
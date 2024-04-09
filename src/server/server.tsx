import express from 'express';
import path from 'path';


const app = express()

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
})
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const Moysklad = require('moysklad');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // Раздаем статические файлы

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const ms = Moysklad({ token: 'a0dddba791f0e7a0b585582f8f080631386ceaac' });

app.get('/stocks', async (req, res) => {
    try {
        const response = await ms.GET('report/stock/all');
        res.json(response.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));

console.log('122223')
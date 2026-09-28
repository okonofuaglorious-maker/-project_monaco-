import express from "express";

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to project monaco!');
});

app.get('/birthday', (req, res) => {
    const currentDate = new Date();

    res.send(`Current date and time: ${currentDate}`)
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const app = express();


const aiRoutes = require('./routes/ai-routes');

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send("Server running...");
});

app.use('/', aiRoutes);

app.listen(3000, () => {
    console.log("Server running...");
});
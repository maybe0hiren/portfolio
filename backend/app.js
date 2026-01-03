const express = require('express');
const app = express();
const cors = require('cors');


const aiRoutes = require('./routes/ai-routes');


app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send("Server running...");
});

app.use('/', aiRoutes);

app.listen(5000, () => {
    console.log("Server running...");
});
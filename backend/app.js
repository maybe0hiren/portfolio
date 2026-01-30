const express = require('express');
const app = express();
const cors = require('cors');

const certificatesRoutes = require('./routes/certificate-routes')
const aiRoutes = require('./routes/ai-routes');

const path = require("path");

app.use(cors());
app.use(express.json());

app.use(
  "/CourseImages",
  express.static(path.join(__dirname, "data/CourseImages"))
);

app.use("/certificates", certificatesRoutes);

app.get('/', (req, res, next) => {
    res.send("Server running...");
});

app.use('/', aiRoutes);

app.listen(5000, () => {
    console.log("Server running...");
});
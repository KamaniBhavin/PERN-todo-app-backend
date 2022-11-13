import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
    res.json({message: "Hello from express!"});
})

app.listen(port, () => {
    console.log(`Server is on ${port}`);
})

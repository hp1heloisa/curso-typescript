import express, { json } from "express";
import musicRouter from "./routers/music-router";

const app = express();

app.use(json());
app.use(musicRouter);

app.listen(5005, () => {
  console.log(`Server is up and running on port 5000`);
})

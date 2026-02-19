import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";


const app = express();
const port = 3000;

app.use(morgan("short"));

app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next();
})


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

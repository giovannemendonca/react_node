import express from "express";
import db from "./db/dbConnection.js";
import routes from "./routes/index.js";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import morganBody from "morgan-body";
import { fileURLToPath } from "url";
import moment from "moment"



db.on("erro", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão realizada com sucesso");
});

const port = 5050;
const app = express();



const __dirname = path.dirname(fileURLToPath(import.meta.url));

const acessLogs = fs.createWriteStream(
  path.join(__dirname, "./logs", `express${moment().format('YYYY-MM-DD')}.log`),
  { flags: "a" }
);

app.use(morgan("combined", { stream: acessLogs }));


routes(app);



app.listen(port, () => {
  console.log(`Servidor rodando http://localhost:${port}`);
});

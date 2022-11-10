import express from "express";
import db from "./db/dbConnection.js";
import routes from "./routes/index.js"



db.on("erro", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão realizada com sucesso");
});

const port = 5050;

const app = express();
routes(app)




app.listen(port, () => {
  console.log(`Servidor rodando http://localhost:${port}`);
});

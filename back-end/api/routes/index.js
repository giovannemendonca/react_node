import express from "express";
import livros from "./livrosRoutes.js";
import cors from "cors"

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Olá");
  });

  app.use(
    express.json(),
    cors(),
    livros
  )

};

export default routes;
import { Router } from "express";
import LivroController from "../controllers/livrosControllers.js";

const router = Router();

router.get("/livros", LivroController.getLivros);
router.get("/livros/:id", LivroController.getLivroID);
router.post("/livros", LivroController.postLivros);
router.put("/livros/:id", LivroController.atualizarLivro);
router.delete("/livros/:id", LivroController.excluirLivro);

export default router;

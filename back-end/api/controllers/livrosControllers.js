import livros from "../models/Livro.js";

class LivroController {
  //GET

  static getLivros = (req, res) => {
    livros.find((error, livros) => {
      res.status(200).json(livros);
    });
  };

  static getLivroID = (req, res) => {
    const { id } = req.params;
    console.log(id);

    livros.findById(id, (err, livro) => {
      if (err) {
        res.status(400).json({ message: `${err.message} - Id não encontrado` });
      }
      res.status(200).json(livro);
    });
  };

  //post
  static postLivros = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .json({ messege: `${err.message} - Falha ao cadastrar livro.` });
      }
      res.status(201).json(livro);
    });
  };

  //PUT

  static atualizarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  //DELETE

  static excluirLivro = (req, res) => {
    const { id } = req.params;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res
          .status(200)
          .json({ message: `Livro com o Id ${id} deletado com sucesso` });
      }
      res.status(500).json({ message: err.message });
    });
  };
}

export default LivroController;

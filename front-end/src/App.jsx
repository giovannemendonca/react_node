import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

import "./app.css"

function App() {

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getLivrosAxios()
  }, [])


  const getLivrosAxios = async () => {

    try {
      const api = axios.create({
        baseURL: "http://localhost:5050",
      });

      await api.get("/livros")
        .then(response => setLivros(response.data))
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div className="container">
      <h1>Lista de llivros</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Numero de Paginas</th>
          </tr>
        </thead>

        <tbody>
          {livros.map(livro => (
            <tr key={livro._id}>
              <td>{livro._id}</td>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.editora}</td>
              <td>{livro.numeroPaginas}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>

  )
}

export default App

import { useEffect, useState } from "react";
import {Tarefa} from "../Tarefa";
import "../../styles.css"
import { Categoria } from "../Categoria";


function TarefaListar() {

    const[tarefas, setTarefas] = useState<Tarefa[]>([]);
    const[categorias, setCategorias] = useState<Categoria[]>([]);
    
  fetch("http://localhost:5000/api/tarefas/listar")
    .then((resposta) => resposta.json())
    .then((tarefa) => {
      setTarefas(tarefa);
    })
    .catch((error) => console.error("Erro ao listar as tarefas", error));


  return (
    <div>
      <h1>Lista de Tarefas:</h1>
      <table className="tabela">
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Descrição</th>
          <th>Criada Em</th>
          <th>ID da Categoria</th>
          <th>Status</th>
        </tr>
      </thead>

     

      <tbody>

  

        {tarefas.map((tarefa) => (
            
            <tr key = {tarefa.tarefaId}>
                <td>{tarefa.tarefaId}</td>
                <td>{tarefa.titulo}</td>
                <td>{tarefa.descricao}</td>
                <td>{tarefa.criadoEm}</td>
                <td>{tarefa.categoriaId}</td>
                <td>{tarefa.status}</td>
            </tr>

            
        ))}

 
        
      </tbody>

      </table>

    </div>
  );
}

export default TarefaListar;
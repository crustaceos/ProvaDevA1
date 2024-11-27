import { useEffect, useState } from "react";
import {Tarefa} from "../Tarefa";
import "../../styles.css"


function CadastrarTarefas() {
    const[titulo, setTitulo] = useState<string>('');
    const[descricao, setDescricao] = useState<string>('');
    const[categoriaId, setCategoriaId] = useState<string>('');

    
    function handleSubmit(e: any){
        e.preventDefault();

        const novaTarefa = {
            titulo,
            descricao,
            categoriaId,
            status:"Não Inciada"
        };

        fetch("http://localhost:5000/api/tarefas/cadastrar" ,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaTarefa)
          
            })

            .then(resposta => {
                if(!resposta.ok){
                  throw new Error('Erro na requisição');
                }
                return resposta.json();
              })
              
              .then(data => {
                setTitulo('');
                setDescricao('');
                setCategoriaId('');
              })
              
              .catch(error => {
                console.error('Erro', error);
              })
     

}

  return (
    <div>
      <h1>Lista de Tarefas:</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Digite o Titulo de sua nova Tarefa:
                <input type="text" value={titulo} onChange={e => (e.target.value)}required/>
            </label>
            <label>
                Digite a Descrição de sua Tarefa:
                <input type="text" value={descricao} onChange={e => (e.target.value)}required/>
            </label>
            <label>
                Digite o ID da Categoria:
                <input type="text" value={categoriaId} onChange={e => (e.target.value)}required/>
            </label>
            <button type="submit">Cadastrar Nova Tarefa</button>
        </form>

    </div>
  );
}

export default CadastrarTarefas;
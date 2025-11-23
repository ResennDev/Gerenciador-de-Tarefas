import React from "react";
import { useTarefas } from "../context/TarefasContext";
import Tarefa from "./Tarefa";

export default function ListaDeTarefas({ filtro }) {
  const { tarefas } = useTarefas();

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === "concluidas") return t.concluida;
    if (filtro === "pendentes") return !t.concluida;
    return true;
  });

  if (tarefasFiltradas.length === 0) {
    return <p className="mensagem-vazia">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="lista-tarefas">
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

import React from "react";
import { useTarefas } from "../context/TarefasContext";

export default function Tarefa({ tarefa }) {
  const { dispatch } = useTarefas();

  function alternarConcluida() {
    dispatch({ type: "TOGGLE", id: tarefa.id });
  }

  return (
    <li className="tarefa">
      <label>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={alternarConcluida}
        />
        <span className={tarefa.concluida ? "tarefa-nome concluida" : "tarefa-nome"}>
          {tarefa.nome}
        </span>
      </label>
    </li>
  );
}

import React, { useState } from "react";
import { useTarefas } from "../context/TarefasContext";

export default function AdicionaTarefa() {
  const { dispatch } = useTarefas();
  const [texto, setTexto] = useState("");

  function adicionar() {
    if (texto.trim() === "") return;
    dispatch({ type: "ADICIONAR", nome: texto });
    setTexto("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      adicionar();
    }
  }

  return (
    <div className="adiciona-tarefa">
      <input
        className="input-tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite uma nova tarefa"
      />
      <button className="btn" onClick={adicionar}>
        Adicionar
      </button>
    </div>
  );
}

import React, { useState } from "react";
import { TarefasProvider } from "./context/TarefasContext";
import AdicionaTarefa from "./components/AdicionaTarefa";
import ListaDeTarefas from "./components/ListaDeTarefas";
import "./styles.css";

export default function App() {
  const [filtro, setFiltro] = useState("todas");

  return (
    <TarefasProvider>
      <div className="app">
        <h1 className="app-title">Gerenciador de Tarefas</h1>

        <AdicionaTarefa />

        <div className="filtros">
          <button
            className={filtro === "todas" ? "btn ativo" : "btn"}
            onClick={() => setFiltro("todas")}
          >
            Todas
          </button>
          <button
            className={filtro === "concluidas" ? "btn ativo" : "btn"}
            onClick={() => setFiltro("concluidas")}
          >
            Concluídas
          </button>
          <button
            className={filtro === "pendentes" ? "btn ativo" : "btn"}
            onClick={() => setFiltro("pendentes")}
          >
            Pendentes
          </button>
        </div>

        <ListaDeTarefas filtro={filtro} />
      </div>
    </TarefasProvider>
  );
}

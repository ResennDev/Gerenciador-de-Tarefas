import React, { createContext, useContext, useReducer } from "react";

const TarefasContext = createContext();

const estadoInicial = [];

function tarefasReducer(state, action) {
  switch (action.type) {
    case "ADICIONAR":
      return [
        ...state,
        {
          id: Date.now(),
          nome: action.nome,
          concluida: false,
        },
      ];
    case "TOGGLE":
      return state.map((tarefa) =>
        tarefa.id === action.id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      );
    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [tarefas, dispatch] = useReducer(tarefasReducer, estadoInicial);

  return (
    <TarefasContext.Provider value={{ tarefas, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  const contexto = useContext(TarefasContext);
  if (!contexto) {
    throw new Error("useTarefas deve ser usado dentro de TarefasProvider");
  }
  return contexto;
}

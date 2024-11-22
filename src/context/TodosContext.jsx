import {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';

import { v4 as uuidv4 } from 'uuid';

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  return (
    <TodosContext.Provider
    value={{
      todos,
      handleChange,
      delTodo,
      addTodoItem,
      setUpdate,
    }}
    >
      {children}
    </TodosContext.Provider>
  );
};
export const useTodosContext = () => useContext(TodosContext);
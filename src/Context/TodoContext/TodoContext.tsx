import React, { createContext, useMemo, useState } from 'react';
import { TodoItem } from '../../Pages/ToDoPage/Todo';
import { mockData } from '../../Pages/ToDoPage/ToDoPageProps';
import {
  TodoContextType,
  TodoInitial,
  setDefaultTodo,
} from './TodoContextProps';

export const TodoContext = createContext<TodoContextType>(TodoInitial);

export const TodoProvider = ({ children }: any) => {
  const [list, setList] = useState<TodoItem[]>(mockData);
  const [selectedDir, setSelectedDir] = useState<string>('');
  const listOfDirs: Array<string> = useMemo(
    () => Array.from(new Set(list.map((item) => item.dir))),
    [list]
  );
  const [dirs, setDirs] = useState<Array<string>>(listOfDirs);
  const addTodo = (dir: string) => {
    setList((p) => [...p, setDefaultTodo(dir)]);
  };
  const ModifayTodo = () => {};
  const deleteTodo = () => {};
  return (
    <TodoContext.Provider
      value={{
        list,
        setList,
        selectedDir,
        setSelectedDir,
        addTodo,
        ModifayTodo,
        deleteTodo,
        setDirs,
        dirs,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

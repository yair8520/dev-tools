import React, { createContext, useEffect, useMemo, useState } from 'react';
import { User } from '../Types/User';
import { TodoItem } from '../Pages/ToDoPage/Todo';
import { mockData } from '../Pages/ToDoPage/ToDoPageProps';
import { v4 as uuid } from 'uuid';

type TodoContextType = {
  list: TodoItem[];
  setList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setSelectedDir: React.Dispatch<React.SetStateAction<string>>;
  selectedDir: string;
  addTodo: Function;
  ModifayTodo: Function;
  deleteTodo: Function;
  listOfDirs: Array<string>;
};
export const TodoContext = createContext<TodoContextType>({
  list: [],
  listOfDirs: [],
  setList: () => {},
  addTodo: () => {},
  ModifayTodo: () => {},
  deleteTodo: () => {},
  setSelectedDir: () => {},
  selectedDir: '',
});

export const TodoProvider = ({ children }: any) => {
  const [list, setList] = useState<TodoItem[]>(mockData);
  const [selectedDir, setSelectedDir] = useState<string>('');
  const addTodo = (dir: string) => {
    setList((p) => [...p, setDefaultTodo(dir)]);
  };
  const ModifayTodo = () => {};
  const deleteTodo = () => {};
  const listOfDirs: Array<string> = useMemo(
    () => Array.from(new Set(list.map((item) => item.dir))),
    [list]
  );
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
        listOfDirs,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
function setDefaultTodo(dir: string): TodoItem {
  return {
    id: uuid(),
    title: 'Finish report',
    desc: 'Finish report',
    dir,
    date: '2023-05-24',
    completed: false,
    favorite: false,
  };
}

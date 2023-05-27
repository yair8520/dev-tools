import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { TodoItem } from '../../Pages/ToDoPage/Todo';
import { mockData } from '../../Pages/ToDoPage/ToDoPageProps';
import {
  TodoContextType,
  TodoInitial,
  existItem,
  getdefualtArgs,
} from './TodoContextProps';
export const TodoContext = createContext<TodoContextType>(TodoInitial);

export const TodoProvider = ({ children }: any) => {
  const [list, setList] = useState<TodoItem[]>(mockData);
  const [selectedDir, setSelectedDir] = useState<string>('All');
  const listOfDirs: Array<string> = useMemo(
    () => Array.from(new Set(list.map((item) => item.dir))),
    [list]
  );
  const [dirs, setDirs] = useState<Array<string>>(listOfDirs);
  const [filterBy, setFilterBy] = useState<any>();
  const addTodo = (newTodoItem: TodoItem) => {
    newTodoItem = { ...getdefualtArgs(), ...newTodoItem };
    if (existItem(list, newTodoItem.id)) {
      setList((prevList) => {
        const updatedList = prevList.map((item) =>
          item.id === newTodoItem.id ? newTodoItem : item
        );
        return updatedList;
      });
    } else {
      setList((prevList) => [...prevList, newTodoItem]);
    }
  };
  const onDelete = useCallback((id: string) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  }, []);
  const onFavorite = useCallback((id: string) => {
    setList((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      });
    });
  }, []);
  const onComplete = useCallback((id: string) => {
    setList((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  }, []);

  return (
    <TodoContext.Provider
      value={{
        list,
        onDelete,
        onComplete,
        onFavorite,
        setList,
        selectedDir,
        setSelectedDir,
        addTodo,
        setDirs,
        dirs,
        filterBy,
        setFilterBy,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

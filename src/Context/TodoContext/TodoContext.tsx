import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ITodoList, TodoItem } from '../../Pages/ToDoPage/Todo';
import {
  TodoContextType,
  TodoInitial,
  getdefualtArgs,
} from './TodoContextProps';
import {
  addTask,
  addToComplete,
  addToFav,
  deleteTask,
  sendList,
  getAllTasks,
} from '../../Helpers/FireBase/Tasks';
import { UserContext } from '../UserContext';
export const TodoContext = createContext<TodoContextType>(TodoInitial);

export const TodoProvider = ({ children }: any) => {
  const [selectedDir, setSelectedDir] = useState<string>('All');
  const { user } = useContext(UserContext);
  const [list, setList] = useState<ITodoList>({});
  useEffect(() => {
    if (user?.email) {
      const fetchData = async () => {
        const tasks: any = await getAllTasks(user?.email);
        setList(tasks);
      };
      fetchData();
    }
  }, [user?.email]);
  const [dirs, setDirs] = useState<Array<string>>([]);
  useEffect(() => {
    setDirs(() => {
      if (list === null || list === undefined) {
        return [];
      }
      return Array.from(new Set(Object.values(list).map((item) => item.dir)));
    });
  }, [list]);

  const [filterBy, setFilterBy] = useState<any>();
  const deleteDir = (deleted: string) => {
    setList((prevList) => {
      const updatedList = { ...prevList };
      for (const l in updatedList) {
        if (updatedList[l].dir === deleted) delete updatedList[l];
      }
      sendList(updatedList);
      return updatedList;
    });
    setSelectedDir('All');
  };
  const editDir = (newDir: string, prevDir: string) => {
    setList((prevList) => {
      const updatedList = { ...prevList };
      for (const l in updatedList) {
        if (updatedList[l].dir === prevDir) updatedList[l].dir = newDir;
      }
      sendList(updatedList);
      return updatedList;
    });
    setSelectedDir(newDir);
  };

  const addTodo = (newTodoItem: TodoItem) => {
    newTodoItem = { ...getdefualtArgs(), ...newTodoItem };
    addTask(newTodoItem.id, newTodoItem);
    if (list[newTodoItem.id]) {
      setList((prevList) => {
        const updatedList = { ...prevList, [newTodoItem.id]: newTodoItem };
        return updatedList;
      });
    } else {
      setList((prevList) => ({ ...prevList, [newTodoItem.id]: newTodoItem }));
    }
  };

  const onDelete = useCallback((id: string) => {
    deleteTask(id);
    setList((prevList) => {
      const updatedList = { ...prevList };
      delete updatedList[id];
      return updatedList;
    });
  }, []);

  const onFavorite = useCallback((id: string) => {
    setList((prevList) => {
      const updatedList = { ...prevList };
      if (updatedList[id]) {
        const newFavorite = !updatedList[id].favorite;
        updatedList[id] = {
          ...updatedList[id],
          favorite: newFavorite,
        };
        addToFav(id, newFavorite);
      }
      return updatedList;
    });
  }, []);

  const onComplete = useCallback((id: string) => {
    setList((prevList) => {
      const updatedList = { ...prevList };
      if (updatedList[id]) {
        updatedList[id] = {
          ...updatedList[id],
          completed: !updatedList[id].completed,
        };
      }
      addToComplete(id, !updatedList[id].completed);
      return updatedList;
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
        deleteDir,
        editDir,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

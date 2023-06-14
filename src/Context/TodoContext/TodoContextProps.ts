import { v4 as uuid } from 'uuid';
import { ITodoList, TodoItem } from '../../Pages/ToDoPage/Todo';

export type TodoContextType = {
  list: ITodoList;
  setList: React.Dispatch<React.SetStateAction<ITodoList>>;
  setSelectedDir: React.Dispatch<React.SetStateAction<string>>;
  selectedDir: string;
  addTodo: Function;
  onDelete: Function;
  onComplete: Function;
  onFavorite: Function;
  setDirs: Function;
  dirs: Array<string>;
  filterBy: Function | string;
  setFilterBy: any;
  deleteDir: Function
  editDir: Function
};
export const TodoInitial = {
  list: {},
  dirs: [],
  setList: () => { },
  setDirs: () => { },
  onDelete: () => { },
  onComplete: () => { },
  onFavorite: () => { },
  addTodo: () => { },
  setSelectedDir: () => { },
  deleteDir: () => { },
  editDir: () => { },
  selectedDir: '',
  filterBy: '',
  setFilterBy: null,
};
export function setDefaultTodo(dir: string): TodoItem {
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
export function getdefualtArgs() {
  return {
    id: uuid(),
    completed: false,
    favorite: false,
  };
}

export function existItem(list: ITodoList, id: string): boolean {
  return id in list;
}

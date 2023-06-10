import { ITodoList, TodoItem } from './Todo';

export interface ToDoPageProps {
  [key: string]: any;
}

export const mockData: TodoItem[] = [
  {
    id: '1',
    dir: 'Work',
    desc: '',
    title: 'Add Work Tasks',
    date: '2023-05-24',
    completed: false,
    favorite: false,
  },
  {
    id: '2',
    dir: 'Home',
    desc: '',
    title: 'Add Home Tasks',
    date: '2023-05-25',
    completed: false,
    favorite: false,
  },

];

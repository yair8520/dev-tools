import { ITodoList, TodoItem } from './Todo';

export interface ToDoPageProps {
  [key: string]: any;
}

export const mockData: ITodoList = {
  '1': {
    id: '1',
    dir: 'Work',
    desc: '',
    title: 'Add Work Tasks',
    date: '2023-05-24',
    completed: false,
    favorite: false,
  },
  '2': {
    id: '2',
    dir: 'Home',
    desc: '',
    title: 'Add Home Tasks',
    date: '2023-05-25',
    completed: false,
    favorite: false,
  },
};

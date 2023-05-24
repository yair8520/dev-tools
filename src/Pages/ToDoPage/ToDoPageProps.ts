import { ITodoList } from './Todo';

export interface ToDoPageProps {
  [key: string]: any;
}

export const mockData: ITodoList = {
  list: [
    {
      id: '1',
      dir: 'Work',
      desc: 'Finish report',
      date: '2023-05-24',
      completed: false,
      favorite: true,
    },
    {
      id: '2',
      dir: 'Home',
      desc: 'Buy groceries',
      date: '2023-05-25',
      completed: false,
      favorite: false,
    },
    {
      id: '3',
      dir: 'Work',
      desc: 'Schedule meeting',
      date: '2023-05-26',
      completed: true,
      favorite: true,
    },
  ],
};

import dayjs from 'dayjs';
import { TodoItem } from '../Pages/ToDoPage/Todo';

export const getFilterFunction = (dir: string, list: TodoItem[]) => {
  let index: number = defualtFolders.findIndex((l) => l.title === dir);
  if (index === -1) return list.filter((l) => l.dir === dir);
  return list.filter(defualtFolders[index].filterBy);
};

const defualtFolders = [
  {
    title: 'All',
    filterBy: (a: any) => true,
  },
  {
    title: 'today`s tasks',
    filterBy: (a: any) => a.date === dayjs().format('YYYY-MM-DD'),
  },
  {
    title: 'Favorites',
    filterBy: (a: any) => a.favorite === true,
  },
  {
    title: 'Complited',
    filterBy: (a: any) => a.completed === true,
  },
];

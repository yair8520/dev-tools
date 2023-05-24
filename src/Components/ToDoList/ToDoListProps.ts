import { TodoItem } from '../../Pages/ToDoPage/Todo';

export interface ToDoListProps {
  [key: string]: any;
  list: TodoItem[];
}

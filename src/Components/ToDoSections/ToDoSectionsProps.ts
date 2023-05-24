import { TodoItem } from "../../Pages/ToDoPage/Todo";

export interface ToDoSectionsProps {
  [key: string]: any;
  list: TodoItem[];
  setSelectedDir: Function;
  selectedDir: string
}

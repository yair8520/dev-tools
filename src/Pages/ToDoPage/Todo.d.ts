export interface ITodoList {
  list: TodoItem[];
}
export interface TodoItem {
  id: string;
  dir: string;
  desc: string;
  title: string;
  date: string;
  completed: boolean;
  favorite: boolean;
}

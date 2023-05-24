export interface ITodoList {
  list: TodoItem[];
}
export interface TodoItem {
  id: string;
  dir: string;
  desc: string;
  date: string;
  completed: boolean;
  favorite: boolean;
}

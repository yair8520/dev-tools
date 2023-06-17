export interface ITodoList {
  [id: string]: TodoItem;
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

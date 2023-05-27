import { TodoItem } from "../../Pages/ToDoPage/Todo";
import { v4 as uuid } from 'uuid';

export type TodoContextType = {
    list: TodoItem[];
    setList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
    setSelectedDir: React.Dispatch<React.SetStateAction<string>>;
    selectedDir: string;
    addTodo: Function;
    ModifayTodo: Function;
    deleteTodo: Function;
    setDirs: Function;
    dirs: Array<string>;

};
export const TodoInitial = {
    list: [],
    dirs: [],
    setList: () => { },
    setDirs: () => { },
    addTodo: () => { },
    ModifayTodo: () => { },
    deleteTodo: () => { },
    setSelectedDir: () => { },
    selectedDir: '',
}
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

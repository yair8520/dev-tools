import { v4 as uuid } from 'uuid';
import { TodoItem } from '../../Pages/ToDoPage/Todo';

export type TodoContextType = {
    list: TodoItem[];
    filterList: TodoItem[];
    setList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
    setSelectedDir: React.Dispatch<React.SetStateAction<string>>;
    selectedDir: string;
    addTodo: Function;
    setFilterList: Function;
    onDelete: Function;
    onComplete: Function;
    onFavorite: Function;
    setDirs: Function;
    dirs: Array<string>;

};
export const TodoInitial = {
    list: [],
    filterList: [],
    dirs: [],
    setList: () => { },
    setDirs: () => { },
    onDelete: () => { },
    onComplete: () => { },
    onFavorite: () => { },
    setFilterList: () => { },
    addTodo: () => { },
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
export function getdefualtArgs() {
    return {
        id: uuid(),
        completed: false,
        favorite: false,
    };
}
export function existItem(list: TodoItem[], id: string): boolean {
    return list.find((l) => l.id === id) !== undefined;
}
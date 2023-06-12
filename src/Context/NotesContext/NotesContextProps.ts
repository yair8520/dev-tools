import { ISection } from "../../Components/Notes/NotesList/helper";
import { User } from "../../Types/User";

export type NotesContextProps = {
    quary: string;
    setQuary: React.Dispatch<React.SetStateAction<string>>;
    list: ISection;
    setList: React.Dispatch<React.SetStateAction<ISection>>;
    filteredList: ISection;
    setFilteredList: React.Dispatch<React.SetStateAction<ISection>>;
    user: User | null
}
export const initial = {
    quary: '',
    setQuary: () => { },
    list: {},
    setList: () => { },
    filteredList: {},
    setFilteredList: () => { },
    user: null
};
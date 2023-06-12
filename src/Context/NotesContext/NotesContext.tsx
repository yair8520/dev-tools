import React, { createContext, useState, useContext, useEffect } from 'react';
import { NotesContextProps, initial } from './NotesContextProps';
import { ISection } from '../../Components/Notes/NotesList/helper';
import { UserContext } from '../UserContext';
import { getUserSections } from '../../Helpers/FireBase/Notes';

export const NotesContext = createContext<NotesContextProps>(initial);

export const NotesProvider = ({ children }: any) => {
  const { user } = useContext(UserContext);
  const [quary, setQuary] = useState<string>('');
  const [list, setList] = useState<ISection>({});
  const [filteredList, setFilteredList] = useState<ISection>({});
  useEffect(() => {
    if (user?.email) {
      getUserSections(user.email)
        .then((res: any) => {
          setList(res);
          setFilteredList(res);
        })
        .catch((s) => console.log({ s }));
    }
  }, [user]);
  const contextValue: NotesContextProps = {
    quary,
    setQuary,
    list,
    setList,
    filteredList,
    setFilteredList,
    user,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
};

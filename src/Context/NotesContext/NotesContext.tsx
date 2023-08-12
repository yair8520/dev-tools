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

  const getAll = () => {
    getUserSections(user?.email!)
      .then((res: any) => {
        setList(res);
        setFilteredList(res);
      })
      .catch((s) => console.log({ s }));
  };
  useEffect(() => {
    if (user?.email) {
      getAll();
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
    getAll,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
};

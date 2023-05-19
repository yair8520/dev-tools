import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from './Notes.module.css';
import { Text } from '../Text';
import { SearchBar } from '../SearchBar';
import { NotesList } from './NotesList';
import { ISection } from './NotesList/helper';
import {
  filterListByQuary,
  filterListByTimeAndSection,
} from './helper';
import { UserContext } from '../../Context/UserContext';
import { getUserSections } from '../../Helpers/Firebase';

export const Notes = () => {
  const { user }: any = useContext(UserContext);
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

  const sectionArray = useMemo(
    () => Object.entries(filteredList).map((item) => item[1].subject),
    [filteredList]
  );
  const filterByTimeAndSection = (dir: 'descending' | 'ascending', sectionName: string) => {
    if (sectionName === "All")
      return setFilteredList(list)
    setFilteredList(filterListByTimeAndSection(filteredList, dir, sectionName));
  };

  const filterByQuary = (str: string) => {
    setQuary(str);
    if (!str) {
      return setFilteredList(list)
    }
    setFilteredList(filterListByQuary(filteredList, str));
  };
  return (
    <div className={styles.container}>
      <div>
        <Text style={{ alignSelf: 'center', textAlign: 'center' }} padding={'25px'} variant="h6">
          Notes
          <div className={styles.separator} />
        </Text>

      </div>
      <Text style={{ alignSelf: 'center', textAlign: 'center', paddingBottom: 25 }} variant="subtitle2">
        {!user?.email ? "Log In with your Google Account to save your progress" : `Logged in as ${user?.email}`}
      </Text>
      <div className={styles.content}>
        <SearchBar
          value={quary}
          onChange={filterByQuary}
          options={sectionArray}
          filterByTimeAndSection={filterByTimeAndSection}
        />
        <NotesList user={user?.email} list={filteredList} setList={setFilteredList} />
      </div>
    </div>
  );
};

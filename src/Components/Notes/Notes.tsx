import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from './Notes.module.css';
import { Text } from '../Text';
import { SearchBar } from '../SearchBar';
import { NotesList } from './NotesList';
import { ISection } from './NotesList/helper';
import {
  filterListByQuary,
  filterListBySections,
  filterListByTime,
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
    () => Object.entries(list).map((item) => item[1].subject),
    [list]
  );
  const filterSections = (str: string) => {
    if (str === "All")
      return setFilteredList(list)
    setFilteredList(filterListBySections(list, str));
  };
  const filterByTime = (dir: 'descending' | 'ascending') => {
    setFilteredList(filterListByTime(list, dir));
  };
  const filterByQuary = (str: string) => {
    setQuary(str);
    setFilteredList(filterListByQuary(list, str));
  };
  return (
    <div className={styles.container}>
      <div>
        <Text style={{ alignSelf: 'center' }} padding={'25px'} variant="h6">
          Notes
          <div className={styles.separator} />
        </Text>
      </div>
      <div className={styles.content}>
        <SearchBar
          value={quary}
          onChange={filterByQuary}
          options={sectionArray}
          filterSections={filterSections}
          filterByTime={filterByTime}
        />
        <NotesList user={user?.email} list={filteredList} setList={setFilteredList} />
      </div>
    </div>
  );
};

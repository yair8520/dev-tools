import React, { useContext, useMemo, useRef } from 'react';
import styles from './Notes.module.css';
import { Text } from '../Text';
import { SearchBar } from '../SearchBar';
import { NotesList } from './NotesList';
import { filterListByQuary, filterListByTimeAndSection } from './helper';
import { NotesContext } from '../../Context/NotesContext/NotesContext';
import { PullToRefreshWrapper } from '../RefreshControl';

const Notes = () => {
  const {
    filteredList,
    list,
    quary,
    setFilteredList,
    setList,
    setQuary,
    user,
    getAll
  } = useContext(NotesContext);

  const sectionArray = useMemo(
    () => Object.entries(list).map((item) => item[1].subject),
    [list]
  );
  const filterByTimeAndSection = (
    dir: 'descending' | 'ascending',
    sectionName: string
  ) => {
    if (sectionName === 'All')
      return setFilteredList(
        filterListByTimeAndSection(list, dir, sectionName)
      );
    setFilteredList(filterListByTimeAndSection(list, dir, sectionName));
  };

  const filterByQuary = (str: string) => {
    setQuary(str);
    if (!str) {
      return setFilteredList(list);
    }
    setFilteredList(filterListByQuary(filteredList, str));
  };

  const handleRefresh = () => {
    // Perform the refresh action, e.g., fetch new data
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Refreshed!');
        resolve();
      }, 2000);
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <Text
          style={{ alignSelf: 'center', textAlign: 'center' }}
          padding={'25px'}
          variant="h6"
        >
          Notes
          <div className={styles.separator} />
        </Text>
      </div>
      <Text
        style={{ alignSelf: 'center', textAlign: 'center', paddingBottom: 25 }}
        variant="subtitle2"
      >
        {!user?.email
          ? 'Log In with your Google Account to save your progress'
          : `Logged in as ${user?.email}`}
      </Text>
      <div className={styles.content}>
        <SearchBar
          value={quary}
          onChange={filterByQuary}
          options={sectionArray}
          filterByTimeAndSection={filterByTimeAndSection}
        />
        <PullToRefreshWrapper onRefresh={getAll}>
          <NotesList
            user={user?.email}
            list={filteredList}
            setList={setFilteredList}
            setOriginalList={setList}
          />
        </PullToRefreshWrapper>
      </div>
    </div>
  );
};
export default Notes;

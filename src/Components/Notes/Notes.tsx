import React, { useMemo, useState } from 'react';
import styles from './Notes.module.css';
import { Text } from '../Text';
import { SearchBar } from '../SearchBar';
import { NotesList } from './NotesList';
import { ISection, notesItems } from './NotesList/helper';
import { filterListBySections } from './helper';

export const Notes = () => {
  const [quary, setQuary] = useState<string>('');
  const [list, setList] = useState<ISection>(notesItems);
  const [filteredList, setFilteredList] = useState<ISection>(notesItems);
  const sectionArray = useMemo(
    () => Object.entries(list).map((item) => item[1].subject),
    [list]
  );
  const filterSections = (str: string) => {
    setFilteredList(filterListBySections(list, str));
  };
  const filterList = (str: string) => {
    setQuary(str);
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
          onChange={filterList}
          options={sectionArray}
          filterSections={filterSections}
        />
        <NotesList list={filteredList} setList={setFilteredList} />
      </div>
    </div>
  );
};

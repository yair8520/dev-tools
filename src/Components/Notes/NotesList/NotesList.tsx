import React, { useCallback, useContext, useEffect, useRef } from 'react';
import styles from './NotesList.module.css';
import { NotesListProps } from './NotesListProps';
import { NotesItem } from './NotesItem';
import { Seperator } from '../../Seperator';
import { ModalContext } from '../../ModalContext/ModalContext';
import { NoteModal } from '../../NoteModal';
import { ISection } from './helper';
import { AddItem } from '../../AddItem';
import { v4 as uuid } from 'uuid';
import { getTime, getTimeStamp } from '../../../Helpers/Time';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { scrollTo } from '../../../Helpers/Scroll';
import { Description } from '../../Description';
import {
  addNote,
  addSection,
  editNote,
  removeNote,
  removeSection,
  renameSection,
  updateBlur,
} from '../../../Helpers/FireBase/Notes';

export const NotesList = ({
  list,
  setList,
  user,
  setOriginalList,
}: NotesListProps) => {
  const { handleModal } = useContext(ModalContext);
  const listAsArray = Object.entries(list);
  const newSectionCount = useRef(listAsArray.length);
  useEffect(() => {
    newSectionCount.current = listAsArray.length + 1;
  }, [list, listAsArray.length]);
  const updateNoteText = useCallback(
    (sectionIndex: string, noteIndex: string, newText: string) => {
      setList((prev: ISection) => {
        const updatedSection = {
          ...prev[sectionIndex],
          notes: {
            ...prev[sectionIndex].notes,
            [noteIndex]: {
              ...prev[sectionIndex].notes[noteIndex],
              text: newText,
            },
          },
        };
        return {
          ...prev,
          [sectionIndex]: updatedSection,
        };
      });
    },
    [setList]
  );
  const updateNoteBlur = useCallback(
    (sectionIndex: string, noteIndex: string) => {
      setList((prev: ISection) => {
        const updatedSection = {
          ...prev[sectionIndex],
          notes: {
            ...prev[sectionIndex].notes,
            [noteIndex]: {
              ...prev[sectionIndex].notes[noteIndex],
              blurred: !prev[sectionIndex].notes[noteIndex].blurred,
            },
          },
        };
        if (user) {
          updateBlur(
            user,
            sectionIndex,
            noteIndex,
            !prev[sectionIndex].notes[noteIndex].blurred
          );
        }
        return {
          ...prev,
          [sectionIndex]: updatedSection,
        };
      });
    },
    [setList]
  );

  const onClickNote = useCallback(
    ({ noteId, sectionId }: any) => {
      handleModal(
        <NoteModal
          onChange={(newText: string) => {
            updateNoteText(sectionId, noteId, newText);
            editNote(user, sectionId, noteId, newText);
          }}
          value={list[sectionId].notes[noteId].text}
        />
      );
    },
    [handleModal, list, updateNoteText, user]
  );
  const deleteSection = (sectionId: string) => {
    if (user) {
      removeSection(user, sectionId);
    }
    setList((prev: ISection) => {
      const updatedList = { ...prev };
      delete updatedList[sectionId];
      setOriginalList(updatedList);
      return updatedList;
    });
  };
  const deleteItem = (sectionId: string, noteIndex: string) => {
    if (user) {
      removeNote(user, sectionId, noteIndex);
    }
    setList((prev: ISection) => {
      const updatedList = { ...prev };
      delete updatedList[sectionId].notes[noteIndex];
      setOriginalList(updatedList);
      return updatedList;
    });
  };
  const changeSectionTitle = (sectionId: string, newTitle: string) => {
    if (user) {
      renameSection(user, newTitle, sectionId);
    }
    setList((prev: ISection) => {
      const updatedSection = {
        ...prev[sectionId],
        subject: newTitle,
      };
      return {
        ...prev,
        [sectionId]: updatedSection,
      };
    });
  };

  const onAddItem = (sectionId: string) => {
    const noteId = uuid();
    if (user) {
      addNote(user, sectionId, {
        [noteId]: {
          pinned: false,
          blurred: false,
          text: '',
          date: getTime(),
          timeStamp: getTimeStamp(),
        },
      });
    }
    setList((prev: ISection) => {
      const updatedList = { ...prev };
      updatedList[sectionId].notes[noteId] = {
        blurred: false,
        pinned: false,
        text: '',
        date: getTime(),
        timeStamp: getTimeStamp(),
      };
      setOriginalList(updatedList);
      return updatedList;
    });
  };
  const onAddSection = () => {
    const id = uuid();
    if (user) {
      addSection(user, `Section ${newSectionCount.current}`, id);
    }
    setList((prev: ISection) => {
      const updatedList = {
        ...prev,
        [id]: {
          subject: `Section ${newSectionCount.current}`,
          notes: {},
        },
      };
      setOriginalList(updatedList);
      return updatedList;
    });
    setTimeout(() => {
      scrollTo({ id });
    }, 100);
    newSectionCount.current++;
  };
  return (
    <div className={styles.listContainer}>
      {listAsArray.map((section, i) => {
        return (
          <div id={section[0]} key={section[0]} style={{ width: '100%' }}>
            <Seperator
              deleteSection={() => deleteSection(section[0])}
              changeSectionTitle={(str: string) =>
                changeSectionTitle(section[0], str)
              }
              title={section[1].subject}
            />
            <div className={styles.list}>
              {Object.entries(section[1].notes).map((note) => (
                <div
                  key={note[0]}
                  onClick={() =>
                    onClickNote({ noteId: note[0], sectionId: section[0] })
                  }
                  className={styles.container}
                >
                  <NotesItem
                    deleteItem={() => deleteItem(section[0], note[0])}
                    updateNoteBlur={() => updateNoteBlur(section[0], note[0])}
                    item={note[1]}
                  />
                </div>
              ))}
              <div className={styles.addItemContainer}>
                <AddItem onAddItem={() => onAddItem(section[0])} />
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.fab}>
        <Fab color="primary" aria-label="add" onClick={onAddSection}>
          <Description placement={'top'} title={'Add section'}>
            <AddIcon />
          </Description>
        </Fab>
      </div>
    </div>
  );
};

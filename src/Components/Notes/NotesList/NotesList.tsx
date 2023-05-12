import React, { useCallback, useContext } from 'react';
import styles from './NotesList.module.css';
import { NotesListProps } from './NotesListProps';
import { NotesItem } from './NotesItem';
import { Seperator } from '../../Seperator';
import { ModalContext } from '../../ModalContext/ModalContext';
import { NoteModal } from '../../NoteModal';
import { ISection } from './helper';
import { AddItem } from '../../AddItem';
import { v4 as uuid } from 'uuid';
import { getTime } from '../../../Helpers/Time';

export const NotesList = ({ list, setList }: NotesListProps) => {
  const { handleModal } = useContext(ModalContext);
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

  const onClickNote = useCallback(
    ({ noteId, sectionId }: any) => {
      handleModal(
        <NoteModal
          onChange={(newText: string) =>
            updateNoteText(sectionId, noteId, newText)
          }
          value={list[sectionId].notes[noteId].text}
        />
      );
    },
    [handleModal, list, updateNoteText]
  );
  const deleteSection = (sectionId: string) => {
    setList((prev: ISection) => {
      const updatedList = { ...prev };
      delete updatedList[sectionId];
      return updatedList;
    });
  };
  const deleteItem = (sectionId: string, noteIndex: string) => {
    setList((prev: ISection) => {
      const updatedList = { ...prev };
      delete updatedList[sectionId].notes[noteIndex];
      return updatedList;
    });
  };
  const changeSectionTitle = useCallback(
    (sectionId: string, newTitle: string) => {
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
    },
    [setList]
  );
  const onAddItem = (sectionId: string) => {
    setList((prev: ISection) => {
      const updatedList = { ...prev };
      updatedList[sectionId].notes[uuid()] = { pinned: false, text: '', timeStamp: getTime() };
      return updatedList;
    });
  };

  return (
    <>
      {Object.entries(list).map((section, i) => {
        return (
          <div key={section[0]} style={{ width: '100%' }}>
            <Seperator
              deleteSection={() => deleteSection(section[0])}
              changeSectionTitle={(str: string) =>
                changeSectionTitle(section[0], str)
              }
              title={section[1].subject}
            />
            <div className={styles.list}>
              {Object.entries(section[1].notes).map((note) =>
                <div
                  key={note[0]}
                  onClick={() =>
                    onClickNote({ noteId: note[0], sectionId: section[0] })
                  }
                  className={styles.container}
                >
                  <NotesItem deleteItem={() => deleteItem(section[0], note[0])} item={note[1]} />
                </div>
              )}
              <div className={styles.container}>
                <AddItem onAddItem={() => onAddItem(section[0])} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

import { ISection, Inote } from './NotesList/helper';
import moment from 'moment';

export const filterListByQuary = (list: ISection, query: string): ISection => {
  const filteredList: ISection = {};

  for (const sectionId in list) {
    const section = list[sectionId];
    const filteredNotes: Inote = {};

    for (const noteId in section.notes) {
      const note = section.notes[noteId];
      const { text } = note;

      if (text.toLowerCase().includes(query.toLowerCase())) {
        filteredNotes[noteId] = note;
      }
    }

    if (Object.keys(filteredNotes).length > 0) {
      filteredList[sectionId] = {
        subject: section.subject,
        notes: filteredNotes,
      };
    }
  }

  if (Object.keys(filteredList).length > 0) {
    return filteredList;
  } else {
    return list;
  }
};

export const filterListByTime = (list: ISection, str: string): ISection => {
  const filteredList: ISection = {};

  for (const sectionId in list) {
    const section = list[sectionId];
    const filteredNotes: Inote = {};
    const notesArray = Object.entries(section.notes);
    const sortedNotesArray = notesArray.sort((a, b) => {
      const timestampA = moment(a[1].timeStamp);
      const timestampB = moment(b[1].timeStamp);

      if (str === 'Ascending') {
        return timestampA.isBefore(timestampB) ? -1 : 1;
      } else {
        return timestampB.isBefore(timestampA) ? -1 : 1;
      }
    });
    sortedNotesArray.forEach(([noteId, note]) => {
      filteredNotes[noteId] = note;
    });
    if (Object.keys(filteredNotes).length > 0) {
      filteredList[sectionId] = {
        subject: section.subject,
        notes: filteredNotes,
      };
    }
  }

  return filteredList;
};

export const filterListBySections = (list: ISection, str: string) => {
  for (const key in list) {
    if (list[key].subject === str) {
      return { [key]: list[key] };
    }
  }
  return list;
};

export const filterListByTimeAndSection = (
  list: ISection,
  dir: 'descending' | 'ascending',
  sectionName: string
): ISection => {
  const filteredList = filterListByTime(list, dir);
  console.log(filteredList);
  const finalList = filterListBySections(filteredList, sectionName);

  return finalList;
};

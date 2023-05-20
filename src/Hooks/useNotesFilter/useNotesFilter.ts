// /* eslint-disable curly */
// import { useMemo } from 'react';
// import { ISection, Inote } from '../../Components/Notes/NotesList/helper';

// export const useNotesFilter = (sections: ISection, sortOrder: 'ascending' | 'descending', sortBy: 'subject', searchQuery?: string) => {
//   let notesFiltered = useMemo(() => {
//     let returnData = Object.entries(sections).filter(
//       (item) => item[1].subject === sortBy
//     );
//     if (searchQuery) {
//       returnData = returnData.filter(
//         (item) => item[1].notes.includes(searchQuery) && item[1].type === type
//       );
//     }
//     if (sortOrder === 'ascending')
//       return returnData.sort(
//         (a, b) =>
//           a[1]..localeCompare(b[1].date) ||
//           a[1].time.localeCompare(b[1].time)
//       );
//     else {
//       return returnData.sort(
//         (a, b) =>
//           b[1].date.localeCompare(a[1].date) ||
//           b[1].time.localeCompare(a[1].time)
//       );
//     }
//   }, [notes, searchQuery, type, filterDir]);
//   return notesFiltered;
// };
export {};

import { ISection } from './NotesList/helper';

export const filterListBySections = (list: ISection, str: string) => {
  for (const key in list) {
    if (list[key].subject === str) {
      return { [key]: list[key] };
    }
  }
  return list;
};

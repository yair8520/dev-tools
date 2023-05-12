import { Inote } from '../helper';

export interface NotesItemProps {
  [key: string]: any;
  item: {
    text: string;
    timeStamp: string;
    pinned: boolean;
  };
}

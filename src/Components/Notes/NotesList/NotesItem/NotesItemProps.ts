export interface NotesItemProps {
  [key: string]: any;
  item: {
    text: string;
    date: string;
    timeStamp: number;
    pinned: boolean;
    blurred: boolean;
  };
}

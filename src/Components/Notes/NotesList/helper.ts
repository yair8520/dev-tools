export interface ISection {
  [key: string]: {
    subject: string;
    notes: Inote;
  };
}

export interface Inote {
  [key: string]: {
    text: string;
    timeStamp: number;
    date: string;
    pinned: boolean;
  };
}

export interface ISection {
  [key: string]: {
    subject: string;
    notes: Inote;
  };
}

export interface Inote {
  [key: string]: {
    text: string;
    blurred: boolean;
    timeStamp: number;
    date: string;
    pinned: boolean;
  };
}

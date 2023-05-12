export interface ISection {
  [key: string]: {
    subject: string;
    notes: Inote;
  };
}

export interface Inote {
  [key: string]: {
    text: string;
    timeStamp: string;
    pinned: boolean;
  };
}

export const notesItems: ISection = {
  '1': {
    subject: 'Another Subject',
    notes: {
      '1': {
        text: 'Another note',
        timeStamp: '2023-05-12 10:30 AM',
        pinned: true,
      },
      '2': {
        text: 'Yet another note',
        timeStamp: '2023-05-12 11:45 AM',
        pinned: false,
      },
    },
  },
  '2': {
    subject: 'Meeting Notes',
    notes: {
      '1': {
        text: 'Discuss project timeline',
        timeStamp: '2023-05-12 2:00 PM',
        pinned: true,
      },
      '2': {
        text: 'Assign tasks to team members',
        timeStamp: '2023-05-12 2:15 PM',
        pinned: false,
      },
      '3': {
        text: 'Review client feedback',
        timeStamp: '2023-05-12 2:30 PM',
        pinned: false,
      },
      '4': {
        text: 'Review client feedback',
        timeStamp: '2023-05-12 2:30 PM',
        pinned: false,
      },
      '5': {
        text: 'Review client feedback',
        timeStamp: '2023-05-12 2:30 PM',
        pinned: false,
      },
      '6': {
        text: 'Review client feedback',
        timeStamp: '2023-05-12 2:30 PM',
        pinned: false,
      },
      '7': {
        text: 'Review client feedback',
        timeStamp: '2023-05-12 2:30 PM',
        pinned: false,
      },
    },
  },
};

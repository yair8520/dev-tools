import {
  alignContentValues,
  alignItemsValues,
  flexDirections,
  flexWraps,
  IFlexOptions,
  IJsonSpace,
  justifyContentValues,
} from './Types';

export const jsonSpace: IJsonSpace[] = [
  {
    label: '4 Space Tab',
    value: 4,
  },
  {
    label: '3 Space Tab',
    value: 3,
  },
  {
    label: '2 Space Tab',
    value: 2,
  },
  {
    label: '1 Space Tab',
    value: 1,
  },
];
export const flexOptions: IFlexOptions[] = [
  {
    options: flexDirections,
    type: 'flexDirection',
  },
  {
    options: flexWraps,
    type: 'flexWrap',
  },
  {
    options: justifyContentValues,
    type: 'justifyContent',
  },
  {
    options: alignItemsValues,
    type: 'alignItems',
  },
  {
    options: alignContentValues,
    type: 'alignContent',
  },
];

export const jsonExample = {
  store: {
    book: [
      {
        category: 'reference',
        author: 'Nigel Rees',
        title: 'Sayings of the Century',
        price: 8.95,
      },
      {
        category: 'fiction',
        author: 'Evelyn Waugh',
        title: 'Sword of Honour',
        price: 12.99,
      },
      {
        category: 'fiction',
        author: 'J. R. R. Tolkien',
        title: 'The Lord of the Rings',
        isbn: '0-395-19395-8',
        price: 22.99,
      },
    ],
    bicycle: { color: 'red', price: 19.95 },
  },
};

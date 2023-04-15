import {
  flexDirections,
  flexWraps,
  justifyContentValues,
  alignItemsValues,
  alignContentValues,
  alignSelfs,
  flexBasis,
} from '../../Constant/Types';

export interface FlexPageProps {
  [key: string]: any;
}

export interface IContainerStyle {
  flexDirection?: Partial<typeof flexDirections>[number];
  flexWrap?: Partial<typeof flexWraps>[number];
  justifyContent?: Partial<typeof justifyContentValues>[number];
  alignItems?: Partial<typeof alignItemsValues>[number];
  alignContent?: Partial<typeof alignContentValues>[number];
}
export const InitialStyle: IContainerStyle = {
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
};
export interface ItemsStyle {
  alignSelf?: Partial<typeof alignSelfs>[number];
  flexBasis?: Partial<typeof flexBasis>[number];
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
}

export const itemsInitialStyle: ItemsStyle = {
  alignSelf: 'auto',
  flexBasis: 'auto',
  flexGrow: 0,
  flexShrink: 0,
  order: 0,
};
export const flexItemsInitial: flexItems[] = [
  {
    selected: false,
    style: {
      alignSelf: 'auto',
      flexBasis: 'auto',
      flexGrow: 1,
      flexShrink: 1,
      order: 1,
    },
    value: '1',
  },
  {
    selected: false,
    style: {
      alignSelf: 'auto',
      flexBasis: 'auto',
      flexGrow: 2,
      flexShrink: 2,
      order: 2,
    },
    value: '2',
  },
  {
    selected: false,
    style: {
      alignSelf: 'auto',
      flexBasis: 'auto',
      flexGrow: 3,
      flexShrink: 3,
      order: 3,
    },
    value: '3',
  },
  {
    selected: false,
    style: {
      alignSelf: 'auto',
      flexBasis: 'auto',
      flexGrow: 4,
      flexShrink: 4,
      order: 4,
    },
    value: '4',
  },
  {
    selected: false,
    style: {
      alignSelf: 'auto',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 0,
      order: 0,
    },
    value: '5',
  },
  {
    selected: false,
    style: {
      alignSelf: 'auto',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 0,
      order: 0,
    },
    value: '6',
  },
];
export interface flexItems {
  value: string;
  selected: boolean;
  style: ItemsStyle;
}

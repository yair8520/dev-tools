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
export const flexItemsInitial: ItemsStyle[] = [
  {
    ...itemsInitialStyle,
  },
  {
    ...itemsInitialStyle,
  },

  {
    ...itemsInitialStyle,
  },

  {
    ...itemsInitialStyle,
  },
];

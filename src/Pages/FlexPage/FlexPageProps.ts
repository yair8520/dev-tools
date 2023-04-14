import {
  flexDirections,
  flexWraps,
  justifyContentValues,
  alignItemsValues,
  alignContentValues,
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

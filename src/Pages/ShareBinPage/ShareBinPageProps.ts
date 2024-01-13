import { TShareBinData } from '../../Components/ShareEditor/ShareEditorProps';

export interface ShareBinPageProps {
  [key: string]: any;
}
export interface TSharedLinks extends Record<string, TShareBinData> {}

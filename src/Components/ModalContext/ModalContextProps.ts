export interface ModalContextState {
  modal: boolean;
  modalContent: React.ReactNode | null;
  handleModal: (c?: React.ReactNode | null, cb?: (() => void) | null) => void;
  callBack?: any;
}

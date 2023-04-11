import React from 'react';

export const useModal = () => {
  const [modal, setModal] = React.useState(false);
  const [callBack, setCallBack] = React.useState(() => {});
  const [modalContent, setModalContent] =
    React.useState<React.ReactNode | null>(null);

  const handleModal = (
    c?: React.ReactNode | null,
    cb?: (() => void) | null
  ) => {
    setModal(!modal);
    if (c) {
      setModalContent(c);
    }
    if (cb) {
      setCallBack(() => cb);
    }
  };

  return { modal, handleModal, modalContent, callBack };
};

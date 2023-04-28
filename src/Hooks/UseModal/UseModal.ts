import React from 'react';

export const useModal = () => {
  const [modal, setModal] = React.useState(false);
  const [callBack, setCallBack] = React.useState(() => {});
  const [modalContent, setModalContent] =
    React.useState<React.ReactNode | null>(null);

  const handleModal = (
    component?: React.ReactNode | null,
    callbackFunc?: (() => void) | null
  ) => {
    setModal(!modal);
    if (component) {
      setModalContent(component);
    }
    if (callbackFunc) {
      setCallBack(() => callbackFunc);
    }
  };

  return { modal, handleModal, modalContent, callBack };
};

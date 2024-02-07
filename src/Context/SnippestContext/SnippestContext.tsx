import React, { useContext, useEffect, useState } from 'react';
import { Snippets } from './SnippestContextProps';
import {
  codeSnippiest,
  getNewSnippets,
} from '../../Components/CodeSnippestPage/CodeSnippestPageProps';
import { ConfirmModal } from '../../Components/ConfirmModal';
import { EditTitleModal } from '../../Components/EditTitleModal';
import { ModalContext } from '../../Components/ModalContext/ModalContext';

export const SnippestContext = ({ children }: any) => {
  const [items, setItems] = useState(codeSnippiest);
  const [selectedId, setSelectedId] = useState('1');
  const { handleModal } = useContext(ModalContext);
  const addCodeItem = () => {
    setItems((p: any) => {
      return { ...p, ...getNewSnippets() };
    });
  };

  
  const onEditTitle = (id: string, title: string) => {
    handleModal(
      <EditTitleModal
        oldTitle={items[id].title}
        onNext={(title: string) => editTitle(id, title)}
      />
    );
  };
  const onRemoveItem = (id: string) => {
    handleModal(
      <ConfirmModal
        title={`This Action Will delete this code... `}
        onNext={() => removeItem(id)}
      />
    );
  };
  const editTitle = (id: string, newTitle: string) => {
    setItems((prevItems: any) => {
      return {
        ...prevItems,
        [id]: {
          ...prevItems[id],
          title: newTitle,
        },
      };
    });
  };
  const removeItem = (id: string) => {
    setItems((prevItems: any) => {
      const { [id]: removedItem, ...restItems } = prevItems;
      return restItems;
    });
  };
  const handleCodeChange = (id: string, newCode: string) => {
    setItems((prevItems: { [x: string]: any }) => ({
      ...prevItems,
      [id]: {
        ...prevItems[id],
        code: newCode,
      },
    }));
  };
  return (
    <Snippets.Provider
      value={{
        items,
        setItems,
        selectedId,
        setSelectedId,
        addCodeItem,
        onEditTitle,
        onRemoveItem,
        editTitle,
        removeItem,
        handleCodeChange,
      }}
    >
      {children}
    </Snippets.Provider>
  );
};

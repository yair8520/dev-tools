import React, { useContext } from 'react';
import styles from './Collection.module.css';
import { CollectionProps } from './CollectionProps';
import { CollectionItem } from './CollectionItem';
import { Text } from '../Text';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { CIconButton } from '../CIconButton';
import { ModalContext } from '../ModalContext/ModalContext';
import { ConfirmModal } from '../ConfirmModal';
import { TabsContext } from '../../Context/ApiContext/ApiContext';
import { ModifyModal } from '../ModifyModal';
export const Collection = ({ list }: CollectionProps) => {
  const { handleModal } = useContext(ModalContext);
  const { removeCollection, createCollection, collections } =
    useContext(TabsContext);
  const deleteCollection = (name: string) => {
    handleModal(
      <ConfirmModal
        title={`This Action Will delete All Tabs in "${name}" Collection`}
        onNext={() => removeCollection(name)}
      />
    );
  };
  const editCollectionTitle = () => {};
  const addCollection = () => {
    handleModal(
      <ModifyModal
        collections={collections}
        title={'Enter Collection name'}
        onNext={(name: string) => createCollection(name)}
      />
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <Text>Collections</Text>
        <CIconButton onClick={() => addCollection()}>
          <AddBoxIcon />
        </CIconButton>
      </div>
      <div className={styles.row}>
        {list.map((c) => (
          <CollectionItem
            editCollectionTitle={editCollectionTitle}
            deleteCollection={deleteCollection}
            key={c.collection}
            item={c}
          />
        ))}
      </div>
    </div>
  );
};

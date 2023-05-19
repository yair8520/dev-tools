import { useContext, useState } from 'react';
import styles from './Formatter.module.css';
import { FormatterBody } from './FormatterBody';
import { ResContainer } from './ResContainer';
import { ResInitState, ResState } from './FormatterProps';
import { Text } from '../../Components';
import { CIconButton } from '../../Components/CIconButton';
import HistoryIcon from '@mui/icons-material/History';
import { ModalContext } from '../../Components/ModalContext/ModalContext';
import { HistoryModal } from '../../Components/HistoryModal';

const Formatter = () => {
  const { handleModal } = useContext(ModalContext);
  const [raw, setRaw] = useState<string>('');

  const [res, setRes] = useState<ResState>(ResInitState);
  const [error, setError] = useState<string>('');
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <Text className={styles.title} variant="h5">
          Json Formatter
          <div className={styles.separator} />
        </Text>
        <div className={styles.history}>
          <Text>History</Text>
          <CIconButton
            placement="right"
            title={'View Recent'}
            onClick={() => handleModal(<HistoryModal onClick={setRaw} />)}
          >
            <HistoryIcon />
          </CIconButton>
        </div>
      </div>
      <FormatterBody
        raw={raw}
        setRaw={setRaw}
        setRes={setRes}
        error={error}
        setError={setError}
      />
      {!error && <ResContainer data={res} />}
    </div>
  );
};
export default Formatter
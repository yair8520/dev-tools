import { useState } from 'react';
import { ErrorContainer } from './ErrorContainer';
import styles from './Formatter.module.css';
import { FormatterBody } from './FormatterBody';
import { ResContainer } from './ResContainer';
import { ResInitState, ResState } from './FormatterProps';
import { Text } from '../../Components';

export const Formatter = () => {
  const [res, setRes] = useState<ResState>(ResInitState);
  const [error, setError] = useState<string>('');
  return (
    <div className={styles.container}>
      <Text style={{ alignSelf: 'center' }} padding={'25px'} variant="h5">
        Json Formatter
        <div className={styles.separator} />
      </Text>
      <FormatterBody setRes={setRes} setError={setError} />
      <ErrorContainer error={error} />
      {!error && (
        <>
          <ResContainer data={res} />
          {/* <InterfaceContainer data={res} /> */}
        </>
      )}
    </div>
  );
};

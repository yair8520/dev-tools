import { useState } from 'react';
import { ErrorContainer } from './ErrorContainer';
import styles from './Formatter.module.css';
import { FormatterBody } from './FormatterBody';
import { ResContainer } from './ResContainer';
import { ResInitState, ResState } from './FormatterProps';
import { InterfaceContainer } from '../../Components/InterfaceContainer';

export const Formatter = () => {
  const [res, setRes] = useState<ResState>(ResInitState);
  const [error, setError] = useState<string>('');
  return (
    <div className={styles.container}>
      <h1>Json Formatter</h1>
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

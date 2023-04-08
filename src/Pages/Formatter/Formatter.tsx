/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react';
import { ExpandableSection } from '../../Components/ExpandableSection';
import { ErrorContainer } from './ErrorContainer';
import styles from './Formatter.module.css';
import { FormatterBody } from './FormatterBody';
import { ResContainer } from './ResContainer';

export const Formatter = () => {
  const [res, setRes] = useState<string>('');
  const [error, setError] = useState<string>('');

  return (
    <div className={styles.container}>
      <h1>Json Formatter</h1>
      <FormatterBody setRes={setRes} setError={setError} />
      <ErrorContainer error={error} />
      {!error && <ResContainer data={res} />}
    </div>
  );
};

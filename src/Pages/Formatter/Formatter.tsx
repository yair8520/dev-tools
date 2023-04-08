import { useState } from 'react';
import { ErrorContainer } from './ErrorContainer';
import styles from './Formatter.module.css';
import { FormatterBody } from './FormatterBody';
import { ResContainer } from './ResContainer';

export const Formatter = () => {
  const [res, setRes] = useState<string>('');
  const [error, setError] = useState<string>('asd');
  console.log({ res });
  return (
    <div className={styles.container}>
      <h1>FormatterPage component</h1>
      <FormatterBody setRes={setRes} setError={setError} />
      <ErrorContainer error={error} />
      <ResContainer data={res} />
    </div>
  );
};

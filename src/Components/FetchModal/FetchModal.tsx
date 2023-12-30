import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import styles from './FetchModal.module.css';
import { FetchModalProps } from './FetchModalProps';
import { FileCopy } from '@material-ui/icons';
import { handlePaste } from '../../Helpers/Clipboard';
import { useFetch } from '../../Hooks';
export const FetchModal = ({ onChange, handleModal }: FetchModalProps) => {
  const [value, setValue] = useState<string>(
    'https://jsonplaceholder.typicode.com/todos'
  );
  const { error, isLoading, fetchData, setError } = useFetch();

  const loadData = () => {
    setError('');
    fetchData({ url: value }).then((data: any) => {
      onChange(JSON.stringify(data, null, 5));
      handleModal();
    });
  };
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <TextField
        label="Url"
        error={!!error}
        helperText={error}
        variant="outlined"
        value={value}
        onChange={handleChange}
        className={styles.input}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => handlePaste(setValue)}>
                <FileCopy />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div className={styles.buttonContainer}>
        <Button
          disabled={!value}
          onClick={loadData}
          className={styles.button}
          variant="contained"
        >
          {isLoading ? (
            <CircularProgress
              style={{ color: 'white' }}
              color="success"
              size={24}
            />
          ) : (
            'Load'
          )}
        </Button>
      </div>
    </div>
  );
};

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
import { useFetch } from '../../Hooks/useFetch/';
import { handlePaste } from '../../Helpers/Clipboard';
export const FetchModal = ({ onChange }: FetchModalProps) => {
  const [value, setValue] = useState<string>(
    'https://jsonplaceholder.typicode.com/todos'
  );
  const { error, isLoading, fetchData } = useFetch();

  console.log(error);
  const loadData = () => {
    fetchData({ url: value })
      .then((data: any) => {
        onChange(JSON.stringify(data, null, 5));
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  return (
    <div className={styles.container}>
      <TextField
        label="Url"
        error={!!error}
        helperText={error}
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
            'Load JSON data	'
          )}
        </Button>
      </div>
    </div>
  );
};

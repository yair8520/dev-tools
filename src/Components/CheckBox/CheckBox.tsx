import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import React from 'react';
import { CheckBoxProps } from './CheckBoxProps';

export const CheckBox = ({ options, setOptions, style }: CheckBoxProps) => {
  return (
    <FormGroup style={{ flexDirection: 'row' }} className={style}>
      {options.map((c) => (
        <FormControlLabel
          key={c.id}
          control={
            <Checkbox checked={c.state} onClick={() => setOptions(c.id)} />
          }
          label={c.label}
        />
      ))}
    </FormGroup>
  );
};

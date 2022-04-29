import { makeStyles } from '@material-ui/core';
import React from 'react';
import { SFTextField, SFTextFieldProps } from '../../SFTextField/SFTextField';

export type minWidthInputSize = number | 'auto' | 'full-width';

interface SFAutocompleteInputProps extends SFTextFieldProps {
  minWidth: string;
}

const useTextFieldStyles = makeStyles({
  root: {
    '& .MuiInputBase-root': {
      height: 'inherit',
      minHeight: '56px',
      gap: '6px',
      padding: '28px 9px 9px !important',
      '& .MuiAutocomplete-input': {
        padding: '0',
        minWidth: (props: SFAutocompleteInputProps): string => props.minWidth
      },
      '& .MuiFormControl-root .MuiChip-outlined': {
        margin: '3px auto 2px'
      }
    }
  }
});

export const SFAutocompleteInput = (
  props: SFAutocompleteInputProps
): React.ReactElement<SFAutocompleteInputProps> => {
  const { minWidth, ...other } = props;
  const classes = useTextFieldStyles(props);
  return <SFTextField className={classes.root} {...other} />;
};

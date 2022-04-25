import React from 'react';
import { styled } from '@mui/material/styles';
import { SFTextField, SFTextFieldProps } from '../../SFTextField/SFTextField';

export interface SFChipFieldTextFieldProps extends SFTextFieldProps {
  minWidth: string;
}

const SFChipFieldTextFieldBase = (
  props: SFChipFieldTextFieldProps
): React.ReactElement<SFChipFieldTextFieldProps> => {
  const { minWidth, ...other } = props;
  return <SFTextField {...other} />;
};

export const SFChipFieldTextField = styled(SFChipFieldTextFieldBase)(
  ({ minWidth }) => ({
    '& .MuiInputBase-root': {
      height: 'inherit',
      minHeight: '56px',
      gap: '6px',
      padding: '28px 9px 9px !important',
      '& .MuiAutocomplete-input': {
        padding: '0',
        minWidth: minWidth
      },
      '& .MuiFormControl-root .MuiChip-outlined': {
        margin: '3px auto 2px'
      }
    }
  })
);

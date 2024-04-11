import React from 'react';
import { SFTextField, SFTextFieldProps } from '../../SFTextField/SFTextField';
import { styled } from '@mui/material';

export type minWidthInputSize = number | 'auto' | 'full-width';

interface SFAutocompleteInputProps extends SFTextFieldProps {
  minWidth: string;
}

const SFAutocompleteInputBase = ({
  minWidth,
  ...props
}: SFAutocompleteInputProps): React.ReactElement<SFAutocompleteInputProps> => (
  <SFTextField {...props} />
);

export const SFAutocompleteInput = styled(SFAutocompleteInputBase)(
  ({ minWidth }) => ({
    '.MuiInputBase-root': {
      height: 'inherit',
      minHeight: '56px',
      gap: '6px',

      'input.MuiAutocomplete-input': {
        padding: 0,
        minWidth,

        '&:first-child': {
          padding: 0
        }
      },
      '.MuiFormControl-root .MuiChip-outlined': {
        margin: '3px auto 2px'
      }
    }
  })
);

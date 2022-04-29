import * as React from 'react';
import {
  styled,
  SelectProps,
  SelectChangeEvent as SFSelectChangeEvent
} from '@mui/material';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

export const StyledSelect = styled(SFTextField)({
  '& svg': {
    position: 'absolute',
    right: 18,
    pointerEvents: 'none',
    top: 'auto'
  }
});

const StyledMenuItem = styled(SFMenuItem)({
  whiteSpace: 'unset',
  wordBreak: 'break-word',
  minHeight: '36px',
  height: 'auto'
});

export { SFSelectChangeEvent };

export interface SFMenuOption {
  label: string;
  value: string;
}

export interface SFSelectProps extends SelectProps {
  options: SFMenuOption[];
  value?: string;
  helperText?: React.ReactNode;
}

export const SFSelect = ({
  options,
  helperText,
  label,
  value,
  ...props
}: SFSelectProps): React.ReactElement<SFSelectProps> => {
  return (
    <StyledSelect
      select
      fullWidth
      label={label}
      helperText={helperText}
      error={props.error}
      value={value}
      disabled={props.disabled}
      required={props.required}
      SelectProps={{
        ...props,
        autoWidth: false,
        IconComponent: (props): React.ReactElement => (
          <SFIcon icon='Down-2' size='16' {...props} />
        ),
        MenuProps: {
          variant: 'menu',
          autoFocus: false,
          disableAutoFocusItem: true,
          style: { width: '1px' }
        }
      }}
    >
      {options.map((option: SFMenuOption, index: number) => (
        <StyledMenuItem key={`option-${index}`} value={option.value}>
          {option.label}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

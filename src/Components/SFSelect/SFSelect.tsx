import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { OutlinedInputProps, SelectProps } from '@material-ui/core';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

export const StyledSelect = withStyles(() => ({
  root: {
    '& .MuiSelect-nativeInput': {
      boxSizing: 'border-box'
    },
    '& .MuiSelect-icon': {
      position: 'absolute',
      right: 18,
      pointerEvents: 'none',
      top: 'auto'
    }
  }
}))(SFTextField);

const StyledMenuItem = withStyles(() => ({
  root: {
    whiteSpace: 'unset',
    wordBreak: 'break-word',
    minHeight: '36px',
    height: 'auto'
  }
}))(SFMenuItem);

export interface SFMenuOption {
  label: string;
  value: string;
  item?: React.ReactNode;
}

export interface SFSelectProps extends SelectProps {
  options: SFMenuOption[];
  value?: string;
  helperText?: React.ReactNode;
  InputProps?: Partial<OutlinedInputProps>;
}

export const SFSelect = ({
  options,
  helperText,
  label,
  InputProps,
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
      InputProps={InputProps}
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
          {option.item ?? option.label}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

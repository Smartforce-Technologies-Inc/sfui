import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SelectProps } from '@material-ui/core';
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
  label: string;
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
        renderValue: (value: string): string | undefined => {
          const returnedValue = options.find(
            (option: SFMenuOption) => option.value === value
          );
          return returnedValue?.label;
        },
        MenuProps: {
          variant: 'menu',
          autoFocus: false,
          disableAutoFocusItem: true,
          style: { width: '1px' },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: -3,
            horizontal: 0
          },
          getContentAnchorEl: null
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

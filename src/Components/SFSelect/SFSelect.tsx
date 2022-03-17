import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SelectProps } from '@material-ui/core';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

const StyledSelect = withStyles(() => ({
  root: {
    '& svg': {
      position: 'absolute',
      right: 18,
      pointerEvents: 'none',
      top: 'auto'
    }
  }
}))(SFTextField);

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
          disableAutoFocusItem: true
        }
      }}
    >
      {options.map((option: SFMenuOption, index: number) => (
        <SFMenuItem key={`option-${index}`} value={option.value}>
          {option.label}
        </SFMenuItem>
      ))}
    </StyledSelect>
  );
};

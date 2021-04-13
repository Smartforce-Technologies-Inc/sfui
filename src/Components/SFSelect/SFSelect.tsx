import * as React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { FormControl, SelectProps } from '@material-ui/core';
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

const useMenuStyles = makeStyles({
  paper: {}
});

export interface SFSelectOption {
  label: string;
  value: string;
}

export interface SFSelectProps extends SelectProps {
  options: SFSelectOption[];
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
  const customMenuStyles: Record<'paper', string> = useMenuStyles();

  return (
    <FormControl fullWidth>
      <StyledSelect
        select
        label={label}
        helperText={helperText}
        error={props.error}
        value={value}
        disabled={props.disabled}
        SelectProps={{
          ...props,
          IconComponent: (props): React.ReactElement => (
            <SFIcon icon='Down-2' size='16' {...props} />
          ),
          MenuProps: {
            variant: 'menu',
            autoFocus: false,
            disableAutoFocusItem: true,
            classes: customMenuStyles
          }
        }}
      >
        {options.map((option: SFSelectOption, index: number) => (
          <SFMenuItem key={`option-${index}`} value={option.value}>
            {option.label}
          </SFMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

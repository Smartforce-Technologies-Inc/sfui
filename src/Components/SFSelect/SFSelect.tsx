import * as React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

const StyledMenuItem = withStyles(() => ({
  root: {
    height: 52
  }
}))(SFMenuItem);

const useMenuStyles = makeStyles({
  list: {
    paddingTop: 0,
    paddingBottom: 0
  }
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
  const customMenuStyles: Record<'list', string> = useMenuStyles();

  return (
    <StyledSelect
      select
      fullWidth
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
        <StyledMenuItem key={`option-${index}`} value={option.value}>
          {option.label}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

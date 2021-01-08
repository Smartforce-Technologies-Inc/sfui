import * as React from 'react';
import { withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FormControl, MenuItem, SelectProps } from '@material-ui/core';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../helpers';

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

const StyledMenuItem = withStyles((theme: Theme) => ({
  root: {
    '&:hover': {
      background:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey[200], 0.3)
          : hexToRgba(SFGrey[500], 0.3)
    },
    '&:active': {
      background:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey[200], 0.5)
          : hexToRgba(SFGrey[500], 0.2)
    },
    '&.Mui-selected': {
      background:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey[200], 0.5)
          : hexToRgba(SFGrey[500], 0.2),
      '&:hover': {
        background:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey[200], 0.3)
            : hexToRgba(SFGrey[500], 0.3)
      }
    }
  }
}))(MenuItem);

const useMenuStyles = makeStyles({
  paper: {
    borderRadius: '0px 0px 2px 2px'
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
    </FormControl>
  );
};

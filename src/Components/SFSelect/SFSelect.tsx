import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import { FormControl, MenuItem } from '@material-ui/core';
import { SFTextField, SFTextFieldProps } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../helpers';

const StyledSelect = withStyles(() => ({
  root: {
    width: '100%',
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
    '&.Mui-selected, &:active': {
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

export interface SFOption {
  label: string;
  value: string;
}

export interface SFSelectProps extends SFTextFieldProps {
  options: SFOption[];
  value?: string;
}

export const SFSelect = ({
  options,
  ...props
}: SFSelectProps): React.ReactElement<SFSelectProps> => {
  return (
    <FormControl style={{ width: '100%' }}>
      <StyledSelect
        select
        SelectProps={{
          IconComponent: (props): React.ReactElement => (
            <SFIcon icon='Down-2' size='16' {...props} />
          )
        }}
        {...props}
      >
        {options.map((option: SFOption, index: number) => (
          <StyledMenuItem key={`option-${index}`} value={option.value}>
            {option.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

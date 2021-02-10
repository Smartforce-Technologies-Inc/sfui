import * as React from 'react';
import { withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  FormControl,
  MenuItem,
  ListItemText,
  SelectProps
} from '@material-ui/core';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFCheckbox } from '../SFCheckbox/SFCheckbox';
import { hexToRgba } from '../../helpers';
import { SFGrey } from '../../SFColors/SFColors';

export interface SFMultiSelectOption {
  label: string;
  value: string;
}

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

export interface SFMultiSelectProps extends SelectProps {
  options: SFMultiSelectOption[];
  defaultValue?: string[];
  value?: string[];
  helperText?: React.ReactNode;
}

export const SFMultiSelect = ({
  options,
  helperText,
  label,
  defaultValue = [],
  value,
  onChange,
  ...props
}: SFMultiSelectProps): React.ReactElement<SFMultiSelectProps> => {
  const valueInit: string[] = value || defaultValue;
  const [selected, setSelected] = React.useState<string[]>(valueInit);
  const customMenuStyles: Record<'paper', string> = useMenuStyles();

  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ): void => {
    setSelected(event.target.value as string[]);
    if (onChange) {
      onChange(event, child);
    }
  };

  const renderSelected = (selectedValues: string[]): string => {
    return selectedValues ? selectedValues.join(',') : '';
  };

  const isChecked = (
    option: SFMultiSelectOption,
    selectedValues: string[]
  ): boolean => {
    return selectedValues && selectedValues.indexOf(option.value) > -1;
  };

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
          multiple: true,
          defaultValue: defaultValue,
          value: selected,
          MenuProps: {
            variant: 'menu',
            autoFocus: false,
            disableAutoFocusItem: true,
            classes: customMenuStyles
          },
          onChange: handleChange,
          renderValue: renderSelected,
          IconComponent: (props): React.ReactElement => (
            <SFIcon icon='Down-2' size='32' {...props} />
          )
        }}
      >
        {options.map((option) => (
          <StyledMenuItem key={option.value} value={option.value}>
            <SFCheckbox checked={isChecked(option, selected)} iconSize={32} />
            {option.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

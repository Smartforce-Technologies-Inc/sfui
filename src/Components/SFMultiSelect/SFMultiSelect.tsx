import * as React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { SelectProps } from '@material-ui/core';
import { SFTextField } from '../SFTextField/SFTextField';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFCheckbox } from '../SFCheckbox/SFCheckbox';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

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

const StyledMenuItem = withStyles(() => ({
  root: {
    height: 52
  }
}))(SFMenuItem);

const useMenuStyles = makeStyles({
  paper: {
    marginTop: '8px'
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
  const menuClasses: Record<'paper', string> = useMenuStyles();

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
    <StyledSelect
      select
      fullWidth
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
          classes: menuClasses
        },
        onChange: handleChange,
        renderValue: renderSelected,
        IconComponent: (props): React.ReactElement => (
          <SFIcon icon='Down-2' size='16' {...props} />
        )
      }}
    >
      {options.map((option) => (
        <StyledMenuItem key={option.value} value={option.value}>
          <SFCheckbox checked={isChecked(option, selected)} />
          {option.label}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

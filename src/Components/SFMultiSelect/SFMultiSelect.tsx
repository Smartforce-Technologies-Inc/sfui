import * as React from 'react';
import { styled, SelectProps, SelectChangeEvent } from '@mui/material';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFCheckbox } from '../SFCheckbox/SFCheckbox';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';
import { SFMenuOption, StyledSelect } from '../SFSelect/SFSelect';

const StyledMenuItem = styled(SFMenuItem)({
  whiteSpace: 'unset',
  wordBreak: 'break-word',
  minHeight: '52px',
  height: 'auto',
  alignItems: 'flex-start',

  '& .MuiFormControl-root': {
    minWidth: 'auto'
  },
  '& > span': {
    paddingTop: '9px',
    fontSize: '16px',
    lineHeight: '24px'
  }
});

export interface SFMultiSelectProps extends SelectProps {
  className?: string;
  menuClassName?: string;
  options: SFMenuOption[];
  defaultValue?: string[];
  value?: string[];
  helperText?: React.ReactNode;
}

export const SFMultiSelect = ({
  className = '',
  menuClassName = '',
  options,
  helperText,
  label,
  defaultValue,
  value,
  onChange,
  ...props
}: SFMultiSelectProps): React.ReactElement<SFMultiSelectProps> => {
  const [selected, setSelected] = React.useState<string[]>([]);

  React.useEffect(() => {
    const selectedValue = value || defaultValue;
    setSelected(selectedValue || []);
  }, [value, defaultValue]);

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ): void => {
    if (!value) {
      setSelected(event.target.value as string[]);
    }

    if (onChange) {
      onChange(event, child);
    }
  };

  const renderSelected = (selectedValues: string[]): string => {
    return selectedValues ? selectedValues.join(', ') : '';
  };

  const isChecked = (
    option: SFMenuOption,
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
      required={props.required}
      SelectProps={{
        ...props,
        defaultValue,
        multiple: true,
        value: selected,
        MenuProps: {
          variant: 'menu',
          autoFocus: false,
          disableAutoFocusItem: true,
          classes: { root: menuClassName }
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
          <span>{option.label}</span>
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

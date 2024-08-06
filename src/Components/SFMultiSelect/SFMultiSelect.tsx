import * as React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { SelectProps } from '@material-ui/core';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFCheckbox } from '../SFCheckbox/SFCheckbox';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';
import { SFMenuOption, StyledSelect } from '../SFSelect/SFSelect';

const StyledMenuItem = withStyles(() => ({
  root: {
    whiteSpace: 'unset',
    wordBreak: 'break-word',
    minHeight: '52px',
    height: 'auto',
    alignItems: 'flex-start',

    '& .MuiFormControl-root': {
      minWidth: 'auto'
    }
  }
}))(SFMenuItem);

const useMenuStyles = makeStyles({
  paper: {
    width: '1px'
  },
  list: {
    '& li > span': {
      paddingTop: '9px',
      fontSize: '16px',
      lineHeight: '24px'
    }
  }
});

export interface SFMultiSelectProps extends SelectProps {
  options: SFMenuOption[];
  defaultValue?: string[];
  value?: string[];
  helperText?: React.ReactNode;
  label: string;
}

export const SFMultiSelect = ({
  options,
  helperText,
  label,
  defaultValue,
  value,
  onChange,
  ...props
}: SFMultiSelectProps): React.ReactElement<SFMultiSelectProps> => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const menuClasses: Record<'paper' | 'list', string> = useMenuStyles();

  React.useEffect(() => {
    const selectedValue = value || defaultValue;
    setSelected(selectedValue || []);
  }, [value, defaultValue]);

  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
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
          classes: menuClasses,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: -3,
            horizontal: 0
          },
          getContentAnchorEl: null
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

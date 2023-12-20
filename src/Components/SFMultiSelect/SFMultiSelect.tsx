import * as React from 'react';
import {
  SelectProps,
  SelectChangeEvent,
  styled,
  PaperProps
} from '@mui/material';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFCheckbox } from '../SFCheckbox/SFCheckbox';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';
import { SFMenuOption, StyledSelect } from '../SFSelect/SFSelect';
import { isArray } from 'lodash';

const StyledMenuItem = styled(SFMenuItem)(() => ({
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
}));

const PaperStyles: PaperProps = {
  style: {
    width: '1px'
  }
};

const LabelStyle: React.CSSProperties = {
  paddingTop: '9px',
  fontSize: '16px',
  lineHeight: '24px'
};

export interface SFMultiSelectProps extends Omit<SelectProps, 'onChange'> {
  options: SFMenuOption[];
  defaultValue?: string[];
  value?: string[];
  helperText?: React.ReactNode;
  onChange: (value: string[]) => void;
}

export const SFMultiSelect = ({
  options,
  helperText,
  label,
  defaultValue,
  value = [],
  onChange,
  ...props
}: SFMultiSelectProps): React.ReactElement<SFMultiSelectProps> => {
  const handleChange = (newValue: string | string[]): void => {
    if (isArray(newValue)) {
      onChange(newValue);
    } else {
      onChange([newValue]);
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
      label={label}
      helperText={helperText}
      error={props.error}
      disabled={props.disabled}
      required={props.required}
      SelectProps={{
        ...props,
        defaultValue,
        multiple: true,
        value: value,
        MenuProps: {
          variant: 'menu',
          autoFocus: false,
          disableAutoFocusItem: true,
          PaperProps: PaperStyles,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: -3,
            horizontal: 0
          }
        },
        onChange: (e: SelectChangeEvent<string | string[]>, _c): void =>
          handleChange(e.target.value),
        renderValue: renderSelected,
        IconComponent: (props): React.ReactElement => (
          <SFIcon icon='Down-2' size='16' {...props} />
        )
      }}
    >
      {options.map((option) => (
        <StyledMenuItem key={option.value} value={option.value}>
          <SFCheckbox checked={isChecked(option, value)} />
          <span style={LabelStyle}>{option.label}</span>
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

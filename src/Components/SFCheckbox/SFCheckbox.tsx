import * as React from 'react';
import { withStyles, Theme, useTheme } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import { SFGrey } from '../../SFColors/SFColors';
import { SFFormControlLabelBoolean } from '../SFFormControlLabelBoolean/SFFormControlLabelBoolean';
import { SFIcon } from '../SFIcon/SFIcon';

const StyledCheckbox = withStyles((theme: Theme) => ({
  root: {
    padding: '12px',
    color: `${theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]}`,
    alignItems: 'flex-start'
  },
  colorPrimary: {
    '&:hover': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 204, 204, 0.3)'
          : 'rgba(128, 128, 128, 0.3)'
      }`
    },
    '&:active': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 204, 204, 0.5)'
          : 'rgba(128, 128, 128, 0.2)'
      }`
    },
    '&.Mui-checked:hover': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 235, 255, 0.4)'
          : 'rgba(128, 198, 255, 0.2)'
      }`
    },
    '&.Mui-checked:active': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 235, 255, 0.6)'
          : 'rgba(128, 198, 255, 0.1)'
      }`
    },
    '&.Mui-disabled': {
      color: `${theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]}`
    }
  }
}))(Checkbox);

const getIconUncheckedColor = (
  theme: Theme,
  disabled: boolean | undefined
): string => {
  if (disabled) {
    return theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700];
  }
  return theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400];
};

const getIconCheckedColor = (
  theme: Theme,
  disabled: boolean | undefined
): string => {
  if (disabled) {
    return theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700];
  }
  return theme.palette.primary.main;
};

export interface SFCheckboxProps extends CheckboxProps {
  label?: React.ReactNode | undefined;
}

export const SFCheckbox = ({
  disableRipple = true,
  label,
  ...props
}: SFCheckboxProps): React.ReactElement<SFCheckboxProps> => {
  const theme: Theme = useTheme();
  const iconCheckedColor: string = getIconCheckedColor(theme, props.disabled);
  const iconUncheckedColor: string = getIconUncheckedColor(
    theme,
    props.disabled
  );

  return (
    <FormControl>
      <SFFormControlLabelBoolean
        control={
          <StyledCheckbox
            {...props}
            color='primary'
            disableRipple={disableRipple}
            icon={
              <SFIcon
                icon='Checkbox-Unselected'
                size={18}
                color={iconUncheckedColor}
              />
            }
            checkedIcon={
              <SFIcon
                icon='Checkbox-Selected'
                size={18}
                color={iconCheckedColor}
              />
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
};

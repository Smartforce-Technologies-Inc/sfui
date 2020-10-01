import * as React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';

import BlueButton from './CustomButtons/BlueButton';
import RedButton from './CustomButtons/RedButton';
import GreyButton from './CustomButtons/GreyButton';

export interface SFButtonProps extends ButtonProps {
  sfColor?: 'blue' | 'red' | 'grey';
}

export const SFButton = ({
  variant = 'contained',
  color = 'primary',
  disableRipple = true,
  disableElevation = true,
  sfColor,
  ...props
}: SFButtonProps): React.ReactElement<SFButtonProps> => {
  let button: JSX.Element;

  switch (sfColor) {
    case 'blue':
      button = (
        <BlueButton
          variant={variant}
          disableElevation={disableElevation}
          disableRipple={disableRipple}
          {...props}
        />
      );
      break;
    case 'red':
      button = (
        <RedButton
          variant={variant}
          disableElevation={disableElevation}
          disableRipple={disableRipple}
          {...props}
        />
      );
      break;
    case 'grey':
      button = (
        <GreyButton
          variant={variant}
          disableElevation={disableElevation}
          disableRipple={disableRipple}
          {...props}
        />
      );
      break;
    default:
      button = (
        <Button
          variant={variant}
          color={color}
          disableElevation={disableElevation}
          disableRipple={disableRipple}
          {...props}
        />
      );
  }

  return button;
};

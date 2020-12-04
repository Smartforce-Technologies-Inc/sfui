import * as React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';

import BlueButton from './CustomButtons/BlueButton';
import RedButton from './CustomButtons/RedButton';
import GreyButton from './CustomButtons/GreyButton';

type SFSize = 'small' | 'medium' | 'large';
interface ButtonInnerProps {
  padding?: string;
  size?: string;
  lineHeight?: string;
}
const getButtonInnerProps = (size?: SFSize): ButtonInnerProps => {
  const result: ButtonInnerProps = {};
  switch (size) {
    case 'small':
      result.padding = '4px 10px';
      result.size = '13px';
      result.lineHeight = '22px';
      break;
    case 'large':
      result.padding = '8px 22px';
      result.size = '15px';
      result.lineHeight = '26px';
      break;
    default:
      result.padding = '6px 16px';
      result.size = '14px';
      result.lineHeight = '24px';
      break;
  }
  return result;
};

export interface SFButtonProps extends ButtonProps {
  sfColor?: 'blue' | 'red' | 'grey';
}

export const SFButton = ({
  variant = 'contained',
  color = 'primary',
  disableRipple = true,
  disableElevation = true,
  size = 'small',
  fullWidth = false,
  sfColor,
  ...props
}: SFButtonProps): React.ReactElement<SFButtonProps> => {
  let button: JSX.Element;
  const ButtonInnerProps: ButtonInnerProps = getButtonInnerProps(size);

  switch (sfColor) {
    case 'blue':
      button = (
        <BlueButton
          {...props}
          variant={variant}
          disableElevation={disableElevation}
          disableRipple={disableRipple}
          style={{
            padding: ButtonInnerProps.padding,
            fontSize: ButtonInnerProps.size,
            lineHeight: ButtonInnerProps.lineHeight
          }}
        />
      );
      break;
    case 'red':
      button = (
        <RedButton
          {...props}
          variant={variant}
          disableElevation={disableElevation}
          disableRipple={disableRipple}
          style={{
            padding: ButtonInnerProps.padding,
            fontSize: ButtonInnerProps.size,
            lineHeight: ButtonInnerProps.lineHeight
          }}
        />
      );
      break;
    case 'grey':
      button = (
        <GreyButton
          {...props}
          variant={variant}
          disableElevation={disableElevation}
          disableRipple={disableRipple}
          style={{
            padding: ButtonInnerProps.padding,
            fontSize: ButtonInnerProps.size,
            lineHeight: ButtonInnerProps.lineHeight
          }}
        />
      );
      break;
    default:
      button = (
        <Button
          {...props}
          variant={variant}
          color={color}
          disableElevation={disableElevation}
          disableRipple={disableRipple}
          style={{
            padding: ButtonInnerProps.padding,
            fontSize: ButtonInnerProps.size,
            lineHeight: ButtonInnerProps.lineHeight
          }}
        />
      );
  }

  return button;
};

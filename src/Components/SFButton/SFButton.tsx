import * as React from 'react';
import { ButtonProps } from '@material-ui/core/Button';

import BlueButton from './CustomButtons/BlueButton';
import RedButton from './CustomButtons/RedButton';
import GreyButton from './CustomButtons/GreyButton';

interface ButtonInnerProps {
  padding?: string;
  size?: string;
  lineHeight?: string;
  height?: string;
}

const getButtonInnerProps = (size?: string): ButtonInnerProps => {
  const result: ButtonInnerProps = {};
  switch (size) {
    case 'small':
      result.padding = '4px 10px';
      result.size = '13px';
      result.lineHeight = '22px';
      result.height = '30px';
      break;
    case 'large':
      result.padding = '8px 22px';
      result.size = '15px';
      result.lineHeight = '26px';
      result.height = '42px';
      break;
    default:
      result.padding = '6px 16px';
      result.size = '14px';
      result.lineHeight = '24px';
      result.height = '36px';
      break;
  }
  return result;
};

export interface SFButtonProps extends ButtonProps {
  sfColor?: 'blue' | 'red' | 'grey';
}

export const SFButton = ({
  variant = 'contained',
  color,
  disableRipple,
  disableElevation,
  size = 'medium',
  sfColor,
  ...props
}: SFButtonProps): React.ReactElement<SFButtonProps> => {
  let button: JSX.Element;
  const ButtonInnerProps: ButtonInnerProps = getButtonInnerProps(size);
  const ButtonInnerStyle = {
    padding: ButtonInnerProps.padding,
    fontSize: ButtonInnerProps.size,
    lineHeight: ButtonInnerProps.lineHeight,
    height: ButtonInnerProps.height
  };

  switch (sfColor) {
    case 'red':
      button = (
        <RedButton
          {...props}
          variant={variant}
          disableElevation
          disableRipple
          style={ButtonInnerStyle}
        />
      );
      break;
    case 'grey':
      button = (
        <GreyButton
          {...props}
          variant={variant}
          disableElevation
          disableRipple
          style={ButtonInnerStyle}
        />
      );
      break;
    default:
      button = (
        <BlueButton
          {...props}
          variant={variant}
          disableElevation
          disableRipple
          style={ButtonInnerStyle}
        />
      );
      break;
  }

  return button;
};

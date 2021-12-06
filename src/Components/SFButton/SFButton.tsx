import * as React from 'react';
import { ButtonProps } from '@material-ui/core/Button';

import BlueButton from './CustomButtons/BlueButton';
import RedButton from './CustomButtons/RedButton';
import GreyButton from './CustomButtons/GreyButton';
import { CircularProgress } from '@material-ui/core';

interface ButtonInnerProps {
  padding?: string;
  size?: string;
  lineHeight?: string;
  height?: string;
}

const spinnerSizes = {
  small: 22,
  medium: 24,
  large: 26
};

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
  isLoading?: boolean;
}

export const SFButton = ({
  variant = 'contained',
  color,
  size = 'medium',
  sfColor = 'blue',
  isLoading = false,
  onClick,
  children,
  ...props
}: SFButtonProps): React.ReactElement<SFButtonProps> => {
  const ButtonInnerProps: ButtonInnerProps = getButtonInnerProps(size);
  const ButtonInnerStyle = {
    padding: ButtonInnerProps.padding,
    fontSize: ButtonInnerProps.size,
    lineHeight: ButtonInnerProps.lineHeight,
    height: ButtonInnerProps.height
  };

  const Buttons = {
    grey: GreyButton,
    blue: BlueButton,
    red: RedButton
  };

  const ButtonComponent = Buttons[sfColor];

  return (
    <ButtonComponent
      {...props}
      variant={variant}
      disableElevation
      disableRipple
      style={ButtonInnerStyle}
      onClick={!isLoading ? onClick : undefined}
    >
      {isLoading && (
        <CircularProgress size={spinnerSizes[size]} variant='indeterminate' />
      )}
      {children}
    </ButtonComponent>
  );
};

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: '0 30px'
  },
  label: {
    textTransform: 'capitalize'
  }
})(Button);

export interface SFButtonProps extends ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SFButton = ({
  variant = 'contained',
  color = 'primary',
  disableRipple = true,
  onClick,
  ...props
}: SFButtonProps): React.ReactElement<SFButtonProps> => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      color={color}
      disableRipple={disableRipple}
      {...props}
    />
  );
};

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch, { SwitchProps } from '@material-ui/core/Switch';

const StyledSwitch = withStyles({
  root: {
    borderRadius: 3
  }
})(Switch);

export interface SFSwitchProps extends SwitchProps {
  onChange?: (event: object) => void;
}

export const SFSwitch = ({
  color = 'primary',
  disableRipple = true,
  onChange,
  ...props
}: SFSwitchProps): React.ReactElement<SFSwitchProps> => {
  return (
    <StyledSwitch
      onChange={onChange}
      color={color}
      disableRipple={disableRipple}
      {...props}
    />
  );
};

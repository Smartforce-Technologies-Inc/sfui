import React from 'react';
import { SFAlert, SFAlertProps } from '../SFAlert/SFAlert';
import { TransitionProps } from '@mui/material/transitions';
import { Collapse } from '@mui/material';

export interface SFAlertCollapseProps extends SFAlertProps {
  isOpen: boolean;
  mountOnEnter?: boolean;
  timeout?: TransitionProps['timeout'] | 'auto';
  unmountOnExit?: boolean;
}

export const SFAlertCollapse = ({
  isOpen,
  mountOnEnter = true,
  timeout = 'auto',
  unmountOnExit = true,
  ...props
}: SFAlertCollapseProps): React.ReactElement<SFAlertCollapseProps> => {
  return (
    <Collapse
      in={isOpen}
      mountOnEnter={mountOnEnter}
      timeout={timeout}
      unmountOnExit={unmountOnExit}
    >
      <SFAlert {...props} />
    </Collapse>
  );
};

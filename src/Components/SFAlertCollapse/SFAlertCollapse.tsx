import React from 'react';
import { SFAlert, SFAlertProps } from '../..';
import { Collapse } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

export interface SFAlertCollapseProps extends SFAlertProps {
  isOpen: boolean;
  timeout?: TransitionProps['timeout'] | 'auto';
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

export const SFAlertCollapse = ({
  isOpen,
  timeout = 'auto',
  mountOnEnter = true,
  unmountOnExit = true,
  ...props
}: SFAlertCollapseProps): React.ReactElement<SFAlertCollapseProps> => {
  return (
    <Collapse
      in={isOpen}
      timeout={timeout}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
    >
      <SFAlert {...props} />
    </Collapse>
  );
};

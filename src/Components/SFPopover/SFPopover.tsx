import * as React from 'react';
import { Popover, PopoverProps } from '@material-ui/core';

export interface SFPopoverProps extends PopoverProps {}

export const SFPopover = (
  props: SFPopoverProps
): React.ReactElement<SFPopoverProps> => <Popover {...props} />;

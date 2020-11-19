import * as React from 'react';
import { useTheme, Theme, withStyles } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import { SFIcon } from '../SFIcon/SFIcon';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';

const StyledIconButton = withStyles({
  root: {
    // TODO
    borderRadius: 50
  }
})(IconButton);

export interface SFIconButtonProps extends IconButtonProps {
  sfColor?: string | undefined;
  sfSize?: string | number | undefined;
  sfIcon: string;
}

export const SFIconButton = ({
  sfColor,
  sfSize = 24,
  sfIcon = 'Bell',
  ...props
}: SFIconButtonProps): React.ReactElement<SFIconButtonProps> => {
  const theme: Theme = useTheme();
  const isThemeLight: boolean = theme.palette.type === 'light';
  const iconDefaultColor: string = isThemeLight ? SFGrey[600] : SFGrey[400];

  return (
    <StyledIconButton disableRipple {...props}>
      <SFIcon icon={sfIcon} size={sfSize} color={sfColor || iconDefaultColor} />
    </StyledIconButton>
  );
};

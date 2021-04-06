import * as React from 'react';
import { useTheme, Theme, withStyles } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import { SFIcon } from '../SFIcon/SFIcon';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';

type SFSize = 'tiny' | 'small' | 'medium' | 'large';

interface IconButtonInnerProps {
  padding?: string;
  size?: string;
}

const StyledIconButton = withStyles((theme: Theme) => ({
  root: {
    margin: 'auto',

    '&:hover': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 204, 204, 0.3)'
          : 'rgba(128, 128, 128, 0.3)'
      }`
    },
    '&:active': {
      backgroundColor: `${
        theme.palette.type === 'light'
          ? 'rgba(204, 204, 204, 0.5)'
          : 'rgba(128, 128, 128, 0.2)'
      }`
    }
  }
}))(IconButton);

const getIconButtonInnerProps = (size?: SFSize): IconButtonInnerProps => {
  const result: IconButtonInnerProps = {};
  switch (size) {
    case 'tiny':
      result.padding = '5px';
      result.size = '10';
      break;
    case 'small':
      result.padding = '9px';
      result.size = '16';
      break;
    case 'large':
      result.padding = '14px';
      result.size = '26';
      break;
    default:
      result.padding = '11px';
      result.size = '20';
      break;
  }
  return result;
};

export interface SFIconButtonProps extends IconButtonProps {
  sfColor?: string | undefined;
  sfSize: SFSize;
  sfIcon: string;
}

export const SFIconButton = ({
  sfColor,
  sfSize = 'medium',
  sfIcon = 'Bell',
  ...props
}: SFIconButtonProps): React.ReactElement<SFIconButtonProps> => {
  const theme: Theme = useTheme();
  const isThemeLight: boolean = theme.palette.type === 'light';
  const iconDefaultColor: string = isThemeLight ? SFGrey[600] : SFGrey[400];
  const disabledColor: string = isThemeLight ? SFGrey[200] : SFGrey[700];
  const colorPicked: string = sfColor || iconDefaultColor;
  const iconButtonInnerProps: IconButtonInnerProps = getIconButtonInnerProps(
    sfSize
  );

  return (
    <StyledIconButton
      {...props}
      disableRipple
      style={{ padding: iconButtonInnerProps.padding }}
    >
      <SFIcon
        icon={sfIcon}
        size={iconButtonInnerProps.size}
        color={props.disabled ? disabledColor : colorPicked}
      />
    </StyledIconButton>
  );
};

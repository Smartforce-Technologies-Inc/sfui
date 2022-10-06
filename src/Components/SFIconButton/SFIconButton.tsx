import * as React from 'react';
import { useTheme, Theme, withStyles } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import { SFIcon, SFIconRotation } from '../SFIcon/SFIcon';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';

type SFSize = 'tiny' | 'small' | 'medium' | 'large';

function getSize(sfSize: SFSize): number[] {
  switch (sfSize) {
    case 'tiny':
      return [20, 10];
    case 'small':
      return [34, 16];
    case 'large':
      return [54, 26];
    default:
      return [42, 20];
  }
}

const StyledIconButton = withStyles((theme: Theme) => ({
  root: {
    '&:hover': {
      '@media (hover: hover)': {
        backgroundColor: `${
          theme.palette.type === 'light'
            ? 'rgba(204, 204, 204, 0.3)'
            : 'rgba(128, 128, 128, 0.3)'
        }`
      }
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

interface SFIconButtonBaseProps extends IconButtonProps {
  sfIcon: string;
  sfColor?: string | undefined;
  rotate?: SFIconRotation;
}

interface SFIconButtonSizeProps extends SFIconButtonBaseProps {
  sfSize: SFSize;
}

interface SFIconButtonCustomSizeProps extends SFIconButtonBaseProps {
  sfSize: undefined;
  buttonSize: number;
  iconSize: number;
}

export type SFIconButtonProps =
  | SFIconButtonSizeProps
  | SFIconButtonCustomSizeProps;

export const SFIconButton = ({
  sfIcon,
  sfColor,
  rotate = 'none',
  ...props
}: SFIconButtonProps): React.ReactElement<SFIconButtonProps> => {
  const theme: Theme = useTheme();
  const isThemeLight: boolean = theme.palette.type === 'light';
  const iconDefaultColor: string = isThemeLight ? SFGrey[600] : SFGrey[400];
  const disabledColor: string = isThemeLight ? SFGrey[200] : SFGrey[700];
  const colorPicked: string = sfColor || iconDefaultColor;

  let buttonSize, iconSize;

  if (props.sfSize) {
    [buttonSize, iconSize] = getSize(props.sfSize);
  } else {
    buttonSize = props.buttonSize;
    iconSize = props.iconSize;
  }

  return (
    <StyledIconButton
      {...props}
      disableRipple
      style={{
        padding: 0,
        height: buttonSize,
        width: buttonSize
      }}
    >
      <SFIcon
        icon={sfIcon}
        size={iconSize}
        color={props.disabled ? disabledColor : colorPicked}
        rotate={rotate}
      />
    </StyledIconButton>
  );
};

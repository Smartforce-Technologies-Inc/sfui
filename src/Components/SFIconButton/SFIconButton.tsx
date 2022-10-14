import * as React from 'react';
import { useTheme, Theme, withStyles } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import { SFIcon, SFIconRotation } from '../SFIcon/SFIcon';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';

type SFSize = 'tiny' | 'small' | 'medium' | 'large';

type SFSizeDict = {
  [key: string]: {
    button: number;
    icon: number;
  };
};

const SIZES: SFSizeDict = {
  tiny: {
    button: 20,
    icon: 10
  },
  small: {
    button: 34,
    icon: 16
  },
  medium: {
    button: 42,
    icon: 20
  },
  large: {
    button: 54,
    icon: 26
  }
};

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
  sfSize?: SFSize;
}

interface SFIconButtonSizeProps extends SFIconButtonBaseProps {
  sfSize: SFSize;
}

interface SFIconButtonCustomSizeProps extends SFIconButtonBaseProps {
  buttonSize: SFSize | number;
  iconSize: SFSize | number;
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
  let buttonProps;

  if (props.sfSize) {
    buttonSize = SIZES[props.sfSize].button;
    iconSize = SIZES[props.sfSize].icon;
    buttonProps = props;
  } else {
    buttonSize =
      typeof props.buttonSize === 'number'
        ? props.buttonSize
        : SIZES[props.buttonSize].button;

    iconSize =
      typeof props.iconSize === 'number'
        ? props.iconSize
        : SIZES[props.iconSize].icon;

    const { buttonSize: bs, iconSize: is, ...rest } = props;
    buttonProps = rest;
  }

  return (
    <StyledIconButton
      {...buttonProps}
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

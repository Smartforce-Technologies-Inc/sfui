import * as React from 'react';
import { IconButton, IconButtonProps, styled } from '@mui/material';
import { SFGrey } from '../../SFColors/SFColors';
import { SFIcon, SFIconRotation } from '../SFIcon/SFIcon';

export type SFIconSize = 'tiny' | 'small' | 'medium' | 'large';

type SFSizeDict = {
  [k in SFIconSize]: {
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

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '@media (hover: hover)': {
    '&:hover, &:focus': {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? 'rgba(204, 204, 204, 0.3)'
          : 'rgba(128, 128, 128, 0.3)'
      }`
    }
  },
  '&:active': {
    backgroundColor: `${
      theme.palette.mode === 'light'
        ? 'rgba(204, 204, 204, 0.5)'
        : 'rgba(128, 128, 128, 0.2)'
    }`
  }
}));

interface SFIconButtonBaseProps
  extends Omit<IconButtonProps, 'color' | 'disableRipple'> {
  sfColor?: string;
  sfColorDarkMode?: string;
  sfIcon: string;
  rotate?: SFIconRotation;
  sfSize?: SFIconSize;
}

interface SFIconButtonSizeProps extends SFIconButtonBaseProps {
  sfSize: SFIconSize;
}

interface SFIconButtonCustomSizeProps extends SFIconButtonBaseProps {
  buttonSize: SFIconSize | number;
  iconSize: SFIconSize | number;
}

export type SFIconButtonProps =
  | SFIconButtonSizeProps
  | SFIconButtonCustomSizeProps;

export const SFIconButton = ({
  sfColor,
  sfColorDarkMode,
  sfIcon,
  rotate = 'none',
  ...props
}: SFIconButtonProps): React.ReactElement<SFIconButtonProps> => {
  const color = props.disabled ? SFGrey[200] : sfColor;
  const colorDarkMode = props.disabled ? SFGrey[700] : sfColorDarkMode;
  let buttonSize, iconSize;
  let buttonProps;

  if (props.sfSize) {
    const { sfSize, ...rest } = props;
    buttonSize = SIZES[sfSize].button;
    iconSize = SIZES[sfSize].icon;
    buttonProps = rest;
  } else {
    const { buttonSize: bs, iconSize: is, ...rest } = props;
    buttonSize = typeof bs === 'number' ? bs : SIZES[bs].button;
    iconSize = typeof is === 'number' ? is : SIZES[is].icon;
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
        color={color}
        colorDarkMode={colorDarkMode}
        rotate={rotate}
        size={iconSize}
      />
    </StyledIconButton>
  );
};

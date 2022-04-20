import * as React from 'react';
import { styled, Theme, useTheme } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { SFGrey } from '../../SFColors/SFColors';
import { SFIcon, SFIconRotation } from '../SFIcon/SFIcon';

type SFSize = 'tiny' | 'small' | 'medium' | 'large';

interface IconButtonInnerProps {
  padding?: string;
  size?: string;
  width?: string;
  height?: string;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover': {
    '@media (hover: hover)': {
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

const getIconButtonInnerProps = (size?: SFSize): IconButtonInnerProps => {
  const result: IconButtonInnerProps = {};
  switch (size) {
    case 'tiny':
      result.padding = '5px';
      result.size = '10';
      result.height = '20px';
      result.width = '20px';
      break;
    case 'small':
      result.padding = '9px';
      result.size = '16';
      result.height = '34px';
      result.width = '34px';
      break;
    case 'large':
      result.padding = '14px';
      result.size = '26';
      result.height = '54px';
      result.width = '54px';
      break;
    default:
      result.padding = '11px';
      result.size = '20';
      result.height = '42px';
      result.width = '42px';
      break;
  }
  return result;
};

export interface SFIconButtonProps extends IconButtonProps {
  sfColor?: string | undefined;
  sfSize: SFSize;
  sfIcon: string;
  rotate?: SFIconRotation;
}

export const SFIconButton = ({
  sfColor,
  sfSize = 'medium',
  sfIcon = 'Bell',
  rotate = 'none',
  ...props
}: SFIconButtonProps): React.ReactElement<SFIconButtonProps> => {
  const theme: Theme = useTheme();
  const isThemeLight: boolean = theme.palette.mode === 'light';
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
      style={{
        padding: iconButtonInnerProps.padding,
        height: iconButtonInnerProps.height,
        width: iconButtonInnerProps.width
      }}
    >
      <SFIcon
        icon={sfIcon}
        size={iconButtonInnerProps.size}
        color={props.disabled ? disabledColor : colorPicked}
        rotate={rotate}
      />
    </StyledIconButton>
  );
};

import React, { forwardRef } from 'react';
import { useTheme, Theme } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import IcomoonReact from 'icomoon-react';
import IconSet from './icons/selection.json';

export type SFIconRotation = 'left' | 'right' | 'invert' | 'none';

export interface SFIconProps {
  color?: string | undefined;
  size?: string | number | undefined;
  rotate?: SFIconRotation;
  icon: string;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  onClick?: () => void;
}

const getRotationDeg = (rotation: SFIconRotation): number => {
  switch (rotation) {
    case 'left':
      return -90;
    case 'right':
      return 90;
    case 'invert':
      return 180;
    default:
      return 0;
      break;
  }
};

export const SFIcon = forwardRef(
  (
    { icon = 'Bell', size = 24, rotate = 'none', ...props }: SFIconProps,
    ref: React.Ref<SVGSVGElement>
  ): React.ReactElement<SFIconProps> => {
    const theme: Theme = useTheme();
    const colorDefault: string =
      theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400];
    const color: string = props.color ? props.color : colorDefault;
    const customStyle: React.CSSProperties = {
      transform: `rotate(${getRotationDeg(rotate)}deg)`
    };

    return (
      <IcomoonReact
        {...props}
        iconSet={IconSet}
        icon={icon}
        size={size}
        color={color}
        style={customStyle}
        ref={ref}
      />
    );
  }
);

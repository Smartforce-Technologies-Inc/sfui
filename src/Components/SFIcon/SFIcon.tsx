import React, { forwardRef } from 'react';
import IcomoonReact from 'icomoon-react';
import { SFGrey } from '../../SFColors/SFColors';
import IconSet from './icons/selection.json';
import { SFTheme, useSFTheme } from '../../SFTheme/SFTheme';

function getRotationDeg(rotation: SFIconRotation): number {
  switch (rotation) {
    case 'left':
      return -90;
    case 'right':
      return 90;
    case 'invert':
      return 180;
    default:
      return 0;
  }
}

export type SFIconRotation = 'left' | 'right' | 'invert' | 'none';

export interface SFIconProps {
  className?: string;
  color?: string;
  colorDarkMode?: string;
  icon: string;
  rotate?: SFIconRotation;
  size?: string | number;
  style?: React.CSSProperties;
}

export const SFIcon = forwardRef(
  (
    { icon = 'Bell', size = 24, rotate = 'none', ...props }: SFIconProps,
    ref: React.Ref<SVGSVGElement>
  ): React.ReactElement<SFIconProps> => {
    const theme: SFTheme = useSFTheme();

    let color: string =
      theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400];

    if (props.color) {
      if (props.colorDarkMode && theme.palette.mode === 'dark') {
        color = props.colorDarkMode;
      } else {
        color = props.color;
      }
    }

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

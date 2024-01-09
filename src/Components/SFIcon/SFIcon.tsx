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
    {
      icon = 'Bell',
      size = 24,
      rotate = 'none',
      colorDarkMode,
      ...props
    }: SFIconProps,
    ref: React.Ref<SVGSVGElement>
  ): React.ReactElement<SFIconProps> => {
    const theme: SFTheme = useSFTheme();

    const lightColor: string = props.color ?? SFGrey[600];
    const darkColor: string = colorDarkMode ?? SFGrey[400];
    const color: string =
      theme.palette.mode === 'light' ? lightColor : darkColor;

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

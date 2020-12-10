import * as React from 'react';
import { useTheme, Theme } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
import IcomoonReact from 'icomoon-react';
import IconSet from './icons/selection.json';

export interface SFIconProps {
  color?: string | undefined;
  size?: string | number | undefined;
  icon: string;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  ref?: React.Ref<SVGSVGElement>;
}

export const SFIcon = ({
  icon = 'Bell',
  size = 24,
  ...props
}: SFIconProps): React.ReactElement<SFIconProps> => {
  const theme: Theme = useTheme();
  const colorDefault: string =
    theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400];
  const color: string = props.color ? props.color : colorDefault;

  return (
    <IcomoonReact
      iconSet={IconSet}
      icon={icon}
      size={size}
      color={color}
      {...props}
    />
  );
};

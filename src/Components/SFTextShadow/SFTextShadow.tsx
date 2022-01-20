import React from 'react';
import { getColorRgb } from '../../Helpers';

interface CommonProps {
  type: 'default' | 'repeated' | 'gradient';
  text: string;
  color: string;
  size: number;
  opacity?: number;
  blur?: number;
  angle?: number;
}

interface DefaultProps extends CommonProps {
  type: 'default';
}

interface RepeatProps extends CommonProps {
  type: 'repeated';
  repeatTimes: number;
  repeatBgColor: string;
}

interface GradientProps extends CommonProps {
  type: 'gradient';
  gradientEndColor: string;
}

export type SFTextShadowProps = DefaultProps | RepeatProps | GradientProps;

export const SFTextShadow = ({
  opacity = 0,
  blur = 0,
  angle = 45,
  ...props
}: SFTextShadowProps): React.ReactElement<SFTextShadowProps> => {
  const defaultRender = <span>{props.text}</span>;

  // Validate colors
  if (!CSS.supports('color', props.color)) {
    console.error('Invalid color value for color prop');
    return defaultRender;
  } else if (
    props.type === 'repeated' &&
    !CSS.supports('color', props.repeatBgColor)
  ) {
    console.error('Invalid color value for repeatBgColor prop');
    return defaultRender;
  } else if (
    props.type === 'gradient' &&
    !CSS.supports('color', props.gradientEndColor)
  ) {
    console.error('Invalid color value for gradientEndColor prop');
    return defaultRender;
  }

  // Calculate angles
  const radians = angle * (Math.PI / 180);
  const anglex = Math.cos(radians);
  const angley = Math.sin(radians);

  let textShadow = '';

  if (props.type === 'default') {
    for (let s = 1; s < props.size; s++) {
      textShadow += `${s * anglex}px ${s * angley}px ${blur}px ${
        props.color
      }, `;
    }
  } else if (props.type === 'repeated') {
    const step = Math.trunc(props.size / props.repeatTimes);
    let firstEnd = Math.trunc(step / 2);
    let secondEnd = step;
    for (let r = 0; r < props.repeatTimes; r++) {
      for (let i = 0; i < firstEnd; i++) {
        textShadow += `${i * anglex}px ${i * angley}px ${blur}px ${
          props.repeatBgColor
        }, `;
      }
      for (let si = firstEnd + 1; si < secondEnd; si++) {
        textShadow += `${si * anglex}px ${si * angley}px ${blur}px ${
          props.color
        }, `;
      }
      firstEnd += step;
      secondEnd += step;
    }
  } else if (props.type === 'gradient') {
    const ec = getColorRgb(props.gradientEndColor);
    const sc = getColorRgb(props.color);

    const [ecr, ecg, ecb] = ec
      .substring(ec.indexOf('(') + 1, ec.lastIndexOf(')'))
      .split(/,\s*/);

    const [scr, scg, scb] = sc
      .substring(sc.indexOf('(') + 1, sc.lastIndexOf(')'))
      .split(/,\s*/);

    const cstepr = Math.trunc((+ecr - Math.trunc(+scr)) / props.size);
    const cstepg = Math.trunc((+ecg - Math.trunc(+scg)) / props.size);
    const cstepb = Math.trunc((+ecb - Math.trunc(+scb)) / props.size);

    let gradr = +scr;
    let gradg = +scg;
    let gradb = +scb;

    for (let g = 1; g < props.size; g++) {
      gradr += cstepr;
      gradg += cstepg;
      gradb += cstepb;

      const gradColor = `rgb(${gradr}, ${gradg}, ${gradb})`;
      textShadow += `${g * anglex}px ${g * angley}px ${blur}px ${gradColor}, `;
    }
  }

  textShadow = textShadow.slice(0, -2);

  if (opacity) {
    return (
      <span style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ visibility: 'hidden' }}>{props.text}</span>
        <span style={{ position: 'absolute', top: 0, left: 0 }}>
          {props.text}
        </span>
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            textShadow,
            opacity
          }}
        >
          {props.text}
        </span>
      </span>
    );
  } else {
    return <span style={{ textShadow }}>{props.text}</span>;
  }
};

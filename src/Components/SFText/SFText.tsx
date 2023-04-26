import React from 'react';
import { SFGrey, SFTextBlack, SFTextWhite } from '../../SFColors/SFColors';
import { styled } from '@mui/material';

export type SFTextType =
  | 'component-title-number'
  | 'component-title'
  | 'component-1-extraBold'
  | 'component-1-medium'
  | 'component-1'
  | 'component-button-L'
  | 'component-button-M'
  | 'component-2-medium'
  | 'component-2'
  | 'component-button-S'
  | 'component-tooltip-title'
  | 'component-chip-S-M'
  | 'component-tooltip-text'
  | 'component-notification-label'
  | 'component-calendar-label'
  | 'component-messages';

interface TextCSSProps {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}

const textTypeProps: Record<SFTextType, TextCSSProps> = {
  'component-title-number': {
    fontSize: '50px',
    fontWeight: 700,
    lineHeight: '59px',
    letterSpacing: '0em'
  },
  'component-title': {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '28px',
    letterSpacing: '0em'
  },
  'component-1-extraBold': {
    fontSize: '16px',
    fontWeight: 800,
    lineHeight: '24px',
    letterSpacing: '0em'
  },
  'component-1-medium': {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0em'
  },
  'component-1': {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0em'
  },
  'component-button-L': {
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: '0em'
  },
  'component-button-M': {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0em'
  },
  'component-2-medium': {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0em'
  },
  'component-2': {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0em'
  },
  'component-button-S': {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: '0em'
  },
  'component-tooltip-title': {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: '0em'
  },
  'component-chip-S-M': {
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0em'
  },
  'component-tooltip-text': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '0.02em'
  },
  'component-notification-label': {
    fontSize: '12px',
    fontWeight: 900,
    lineHeight: '14px',
    letterSpacing: '0em'
  },
  'component-calendar-label': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '14px',
    letterSpacing: '0.02em'
  },
  'component-messages': {
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '12px',
    letterSpacing: '0.02em'
  }
};

export type SFTextColor = 'default' | 'neutral';

function getColor(color: SFTextColor, isLight: boolean): string {
  switch (color) {
    case 'neutral': {
      if (isLight) {
        return SFGrey[600];
      } else {
        return SFGrey[400];
      }
    }
    default: {
      if (isLight) {
        return SFTextBlack;
      } else {
        return SFTextWhite;
      }
    }
  }
}

export interface SFTextProps {
  children: React.ReactNode;
  className?: string;
  sfColor?: SFTextColor;
  type: SFTextType;
}

const SFTextBase = ({
  className = '',
  children
}: SFTextProps): React.ReactElement<SFTextProps> => {
  return <p className={className}>{children}</p>;
};

export const SFText = styled(SFTextBase)(
  ({ theme, sfColor = 'default', type }) => ({
    margin: 0,
    color: getColor(sfColor, theme.palette.mode === 'light'),
    fontSize: textTypeProps[type].fontSize,
    fontWeight: textTypeProps[type].fontWeight,
    lineHeight: textTypeProps[type].lineHeight,
    letterSpacing: textTypeProps[type].letterSpacing
  })
);

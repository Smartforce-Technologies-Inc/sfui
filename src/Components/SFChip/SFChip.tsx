import React, { CSSProperties } from 'react';
import { styled, Chip, ChipProps, PaletteMode } from '@mui/material';
import { SFBlue, SFGrey, SFRed, SFSurfaceLight } from '../../SFColors/SFColors';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { hexToRgba } from '../../Helpers';

type ChipColorType = 'primary' | 'default';

const StyledChip = styled(Chip)({
  fontWeight: 400,
  boxSizing: 'border-box',
  fontSize: '13px',
  maxWidth: '100%'
});

const getChipBackgroundColor = (
  color: ChipColorType,
  disabled: boolean,
  error: boolean,
  outlined: boolean,
  themeMode: PaletteMode
): string => {
  if (outlined) {
    return 'transparent';
  }

  if (disabled) {
    return themeMode === 'light' ? SFGrey[100] : SFGrey[800];
  }

  if (error) {
    return themeMode === 'light' ? SFRed[700] : SFRed[200];
  }

  if (color === 'primary') {
    return themeMode === 'light' ? SFBlue[500] : SFBlue[200];
  }

  return themeMode === 'light' ? SFGrey[100] : SFGrey[500];
};

const getChipBorderColor = (
  color: ChipColorType,
  disabled: boolean,
  error: boolean,
  outlined: boolean,
  themeMode: PaletteMode
): string => {
  if (!outlined) {
    return 'unset';
  }

  if (disabled) {
    return `1px solid ${themeMode === 'light' ? SFGrey[200] : SFGrey[700]}`;
  }

  if (error) {
    return `1px solid ${themeMode === 'light' ? SFRed[700] : SFRed[200]}`;
  }

  if (color === 'primary') {
    return `1px solid ${themeMode === 'light' ? SFBlue[500] : SFBlue[200]}`;
  }

  return `1px solid ${themeMode === 'light' ? SFGrey[400] : SFGrey[500]}`;
};

const getChipClickableActiveStyles = (
  clickable: boolean,
  color: ChipColorType,
  disabled: boolean,
  error: boolean,
  outlined: boolean,
  themeMode: PaletteMode
): CSSProperties => {
  if (disabled || !clickable) {
    return {};
  }

  if (error) {
    if (outlined) {
      return {
        borderColor: themeMode === 'light' ? SFRed[900] : SFRed[400],
        backgroundColor: `${
          themeMode === 'light'
            ? hexToRgba(SFRed[100], 0.7)
            : hexToRgba(SFRed[200], 0.1)
        } !important`,
        color: themeMode === 'light' ? SFRed[900] : SFRed[400]
      };
    }

    return {
      backgroundColor: themeMode === 'light' ? SFRed[900] : SFRed[400]
    };
  }

  if (color === 'primary') {
    if (outlined) {
      return {
        borderColor: themeMode === 'light' ? SFBlue[800] : SFBlue[400],
        backgroundColor: `${
          themeMode === 'light'
            ? hexToRgba(SFBlue[100], 0.6)
            : hexToRgba(SFBlue[200], 0.1)
        } !important`,
        color: themeMode === 'light' ? SFBlue[800] : SFBlue[400]
      };
    }

    return {
      backgroundColor: themeMode === 'light' ? SFBlue[800] : SFBlue[400]
    };
  }

  if (outlined) {
    return {
      borderColor: themeMode === 'light' ? SFGrey[800] : SFGrey[700],
      backgroundColor: `${
        themeMode === 'light'
          ? hexToRgba(SFGrey[200], 0.5)
          : hexToRgba(SFGrey[500], 0.2)
      } !important`
    };
  }

  return { backgroundColor: themeMode === 'light' ? SFGrey[300] : SFGrey[700] };
};

const getChipClickableHoverStyles = (
  clickable: boolean,
  color: ChipColorType,
  disabled: boolean,
  error: boolean,
  outlined: boolean,
  themeMode: PaletteMode
): CSSProperties => {
  if (disabled || !clickable) {
    return {};
  }

  if (error) {
    if (outlined) {
      return {
        borderColor: themeMode === 'light' ? SFRed[800] : SFRed[300],
        backgroundColor: `${
          themeMode === 'light'
            ? hexToRgba(SFRed[100], 0.4)
            : hexToRgba(SFRed[200], 0.2)
        } !important`,
        color: themeMode === 'light' ? SFRed[800] : SFRed[300]
      };
    }

    return {
      backgroundColor: themeMode === 'light' ? SFRed[800] : SFRed[300]
    };
  }

  if (color === 'primary') {
    if (outlined) {
      return {
        borderColor: themeMode === 'light' ? SFBlue[700] : SFBlue[300],
        backgroundColor: `${
          themeMode === 'light'
            ? hexToRgba(SFBlue[100], 0.4)
            : hexToRgba(SFBlue[200], 0.2)
        } !important`,
        color: themeMode === 'light' ? SFBlue[700] : SFBlue[300]
      };
    }

    return {
      backgroundColor: themeMode === 'light' ? SFBlue[700] : SFBlue[300]
    };
  }

  if (outlined) {
    return {
      borderColor: SFGrey[600],
      backgroundColor: `${
        themeMode === 'light'
          ? hexToRgba(SFGrey[200], 0.3)
          : hexToRgba(SFGrey[500], 0.3)
      } !important`
    };
  }

  return { backgroundColor: themeMode === 'light' ? SFGrey[200] : SFGrey[600] };
};

const getChipDeleteIconColor = (
  color: ChipColorType,
  disabled: boolean,
  error: boolean,
  outlined: boolean,
  themeMode: PaletteMode
): string => {
  if (outlined) {
    if (disabled) {
      return `${themeMode === 'light' ? SFGrey[400] : SFGrey[600]}`;
    }

    if (error) {
      return `${themeMode === 'light' ? SFRed[700] : SFRed[200]}`;
    }

    if (color === 'primary') {
      return themeMode === 'light' ? SFBlue[500] : SFBlue[200];
    }
  }

  if (color === 'primary' || error) {
    return themeMode === 'light' ? SFSurfaceLight : SFGrey[900];
  }

  return themeMode === 'light' ? SFGrey[900] : SFGrey[50];
};

const getChipDeleteIconHoverColor = (
  color: ChipColorType,
  disabled: boolean,
  themeMode: PaletteMode
): string => {
  if (disabled) {
    return '';
  }

  if (color === 'default') {
    return themeMode === 'light'
      ? (hexToRgba(SFGrey[500], 0.2) as string)
      : (hexToRgba(SFGrey[200], 0.3) as string);
  }

  return themeMode === 'light'
    ? (hexToRgba(SFGrey[200], 0.3) as string)
    : (hexToRgba(SFGrey[500], 0.3) as string);
};

const getChipFullWidthStyles = (fullWidth: boolean): CSSProperties => {
  if (fullWidth) {
    return { display: 'flex', justifyContent: 'space-between', width: '100%' };
  }

  return {};
};

const getChipLabelSize = (size: string): string => {
  if (size === 'small') {
    return '20px';
  }

  return '24px';
};

const getChipTextColor = (
  color: ChipColorType,
  disabled: boolean,
  error: boolean,
  outlined: boolean,
  themeMode: PaletteMode
): string => {
  if (disabled) {
    return themeMode === 'light' ? SFGrey[400] : SFGrey[600];
  }

  if (error) {
    if (outlined) {
      return themeMode === 'light' ? SFRed[700] : SFRed[200];
    }

    return themeMode === 'light' ? SFSurfaceLight : SFGrey[900];
  }

  if (color === 'primary') {
    if (outlined) {
      return themeMode === 'light' ? SFBlue[500] : SFBlue[200];
    }

    return themeMode === 'light' ? SFSurfaceLight : SFGrey[900];
  }

  return themeMode === 'light' ? SFGrey[900] : SFGrey[50];
};

export interface SFChipProps extends ChipProps {
  sfColor: ChipColorType;
  deleteable?: boolean;
  hasError?: boolean;
  fullWidth?: boolean;
}

const SFChipBase = ({
  className = '',
  sfColor = 'primary',
  size = 'medium',
  label,
  disabled,
  deleteable,
  variant = 'filled',
  fullWidth,
  hasError,
  clickable,
  onDelete,
  ...props
}: SFChipProps): React.ReactElement<SFChipProps> => {
  return (
    <StyledChip
      {...props}
      className={className}
      label={label}
      size={size}
      variant={variant}
      disabled={disabled}
      clickable={clickable}
      deleteIcon={<SFIconButton sfIcon='Close' sfSize='tiny' />}
      onDelete={deleteable ? onDelete : undefined}
    />
  );
};

export const SFChip = styled(SFChipBase)(
  ({
    clickable = false,
    disabled = false,
    hasError = false,
    fullWidth = false,
    sfColor,
    size = 'medium',
    theme,
    variant = 'filled'
  }) => ({
    color: getChipTextColor(
      sfColor,
      disabled,
      hasError,
      variant === 'outlined',
      theme.palette.mode
    ),
    cursor: clickable ? 'pointer' : 'default',
    backgroundColor: getChipBackgroundColor(
      sfColor,
      disabled,
      hasError,
      variant === 'outlined',
      theme.palette.mode
    ),
    border: getChipBorderColor(
      sfColor,
      disabled,
      hasError,
      variant === 'outlined',
      theme.palette.mode
    ),
    lineHeight: getChipLabelSize(size),
    ...getChipFullWidthStyles(fullWidth),
    '&:hover': {
      '@media (hover: hover)': {
        ...getChipClickableHoverStyles(
          clickable,
          sfColor,
          disabled,
          hasError,
          variant === 'outlined',
          theme.palette.mode
        )
      }
    },
    '&:active': {
      ...getChipClickableActiveStyles(
        clickable,
        sfColor,
        disabled,
        hasError,
        variant === 'outlined',
        theme.palette.mode
      )
    },
    '& .MuiChip-deleteIcon': {
      '& svg': {
        '& path': {
          fill: `${getChipDeleteIconColor(
            sfColor,
            disabled,
            hasError,
            variant === 'outlined',
            theme.palette.mode
          )} !important`
        }
      },
      '&:hover': {
        '@media (hover: hover)': {
          backgroundColor: getChipDeleteIconHoverColor(
            sfColor,
            disabled,
            theme.palette.mode
          )
        }
      }
    }
  })
);

import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { withStyles, Theme } from '@material-ui/core/styles';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import { SFBlue, SFGrey, SFSurfaceLight } from '../../SFColors/SFColors';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { hexToRgba } from '../../Helpers';

const StyledChip = withStyles((theme: Theme) => ({
  root: {
    fontWeight: 400,
    fontSize: '13px',

    '&:not(.Mui-disabled)': {
      '&.primary': {
        backgroundColor:
          theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200],
        color: theme.palette.type === 'light' ? SFSurfaceLight : SFGrey[900],

        '&.MuiChip-deletable': {
          '& .MuiChip-deleteIcon': {
            color: theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200],

            '& .MuiIconButton-label': {
              '& svg': {
                '& path': {
                  fill: `${
                    theme.palette.type === 'light'
                      ? SFSurfaceLight
                      : SFGrey[900]
                  } !important`
                }
              }
            },

            '&:hover, &:active': {
              backgroundColor:
                theme.palette.type === 'light'
                  ? hexToRgba(SFGrey[200], 0.3)
                  : hexToRgba(SFGrey[500], 0.3)
            }
          },

          '&:active': {
            backgroundColor:
              theme.palette.type === 'light' ? SFBlue[700] : SFBlue[300]
          }
        },

        '&.MuiChip-outlined': {
          backgroundColor: 'transparent',
          border: `1px solid ${
            theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
          }`,
          color: theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200],

          '&.MuiChip-deletable': {
            '& .MuiChip-deleteIcon': {
              color: theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200],

              '& .MuiIconButton-label': {
                '& svg': {
                  '& path': {
                    fill: `${
                      theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
                    } !important`
                  }
                }
              }
            },

            '&:active': {
              backgroundColor:
                theme.palette.type === 'light'
                  ? hexToRgba(SFBlue[100], 0.4)
                  : hexToRgba(SFBlue[200], 0.2)
            }
          }
        }
      },

      '&.default': {
        backgroundColor:
          theme.palette.type === 'light' ? SFGrey[100] : SFGrey[500],
        color: theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50],

        '&.MuiChip-deletable': {
          '& .MuiChip-deleteIcon': {
            color: theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
          },

          '&:hover, &:active': {
            backgroundColor:
              theme.palette.type === 'light'
                ? hexToRgba(SFGrey[500], 0.2)
                : hexToRgba(SFGrey[200], 0.3)
          },

          '& .MuiIconButton-label': {
            '& svg': {
              '& path': {
                fill: `${
                  theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]
                } !important`
              }
            }
          },

          '&:active': {
            backgroundColor:
              theme.palette.type === 'light' ? SFGrey[200] : SFGrey[600]
          }
        },

        '&.MuiChip-outlined': {
          backgroundColor: 'transparent',
          border: `1px solid ${
            theme.palette.type === 'light' ? SFGrey[400] : SFGrey[500]
          }`,

          '&.MuiChip-deletable': {
            '&:active': {
              backgroundColor:
                theme.palette.type === 'light'
                  ? hexToRgba(SFGrey[200], 0.3)
                  : hexToRgba(SFGrey[500], 0.3)
            }
          }
        }
      }
    },

    '&.Mui-disabled': {
      backgroundColor:
        theme.palette.type === 'light' ? SFGrey[100] : SFGrey[800],
      color: theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600],
      opacity: 1,

      '&.MuiChip-outlined': {
        border: `1px solid ${
          theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]
        } `,
        color: `${theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600]} `,
        backgroundColor: 'transparent'
      },

      '&.MuiChip-deletable': {
        '& .MuiChip-deleteIcon': {
          '& .MuiIconButton-label': {
            '& svg': {
              '& path': {
                fill: `${
                  theme.palette.type === 'light' ? SFGrey[400] : SFGrey[600]
                } !important`
              }
            }
          }
        }
      }
    }
  },
  label: {
    lineHeight: '24px'
  },
  labelSmall: {
    lineHeight: '20px'
  }
}))(Chip);

export interface SFChipProps extends ChipProps {
  sfColor: 'primary' | 'default';
  deleteable?: boolean;
}

export const SFChip = ({
  sfColor = 'primary',
  size = 'medium',
  label,
  disabled,
  deleteable,
  variant = 'default',
  onDelete,
  ...props
}: SFChipProps): React.ReactElement<SFChipProps> => {
  return (
    <FormControl>
      <StyledChip
        {...props}
        className={sfColor}
        label={label}
        size={size}
        variant={variant}
        disabled={disabled}
        deleteIcon={<SFIconButton sfIcon='Close' sfSize='tiny' />}
        onDelete={deleteable ? onDelete : undefined}
      />
    </FormControl>
  );
};

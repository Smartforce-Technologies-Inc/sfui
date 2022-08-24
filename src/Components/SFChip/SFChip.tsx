import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import { SFBlue, SFGrey, SFRed, SFSurfaceLight } from '../../SFColors/SFColors';
import { SFIconButton } from '../SFIconButton/SFIconButton';
import { hexToRgba } from '../../Helpers';

const StyledChip = withStyles((theme: Theme) => ({
  root: {
    fontWeight: 400,
    fontSize: '13px',
    maxWidth: '100%',

    '&:not(.Mui-disabled)': {
      '&.primary:not(.hasError)': {
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
              '@media (hover: hover)': {
                backgroundColor:
                  theme.palette.type === 'light'
                    ? hexToRgba(SFGrey[200], 0.3)
                    : hexToRgba(SFGrey[500], 0.3)
              }
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

      '&.default:not(.hasError)': {
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

          '&:hover': {
            backgroundColor:
              theme.palette.type === 'light' ? SFGrey[100] : SFGrey[500]
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
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              backgroundColor:
                theme.palette.type === 'light'
                  ? hexToRgba(SFGrey[200], 0.3)
                  : hexToRgba(SFGrey[500], 0.3)
            }
          }
        }
      },

      '&.hasError': {
        backgroundColor:
          theme.palette.type === 'light' ? SFRed[700] : SFRed[200],
        color: theme.palette.type === 'light' ? SFSurfaceLight : SFGrey[900],

        '&.MuiChip-deletable': {
          '& .MuiChip-deleteIcon': {
            color: `${
              theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
            } !important`,

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
              '@media (hover: hover)': {
                backgroundColor: `${
                  theme.palette.type === 'light'
                    ? hexToRgba(SFGrey[200], 0.3)
                    : hexToRgba(SFGrey[500], 0.3)
                }`
              }
            }
          },

          '&:active': {
            backgroundColor: `${
              theme.palette.type === 'light' ? SFRed[800] : SFRed[300]
            }`
          }
        },

        '&.MuiChip-outlined': {
          backgroundColor: 'transparent',
          border: `1px solid ${
            theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
          } !important`,
          color: `${
            theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
          } !important`,

          '&.MuiChip-deletable': {
            '& .MuiChip-deleteIcon': {
              color: `${
                theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
              } !important`,

              '& .MuiIconButton-label': {
                '& svg': {
                  '& path': {
                    fill: `${
                      theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
                    } !important`
                  }
                }
              }
            },

            '&:active': {
              backgroundColor: `${
                theme.palette.type === 'light'
                  ? hexToRgba(SFRed[100], 0.4)
                  : hexToRgba(SFRed[200], 0.2)
              }`
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
        }  !important`,
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
    },

    '&.fullWidth': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
  },
  label: {
    lineHeight: '24px'
  },
  labelSmall: {
    lineHeight: '20px'
  }
}))(Chip);

const useStyles = makeStyles((theme: Theme) => ({
  disableClick: {
    cursor: 'default',
    '&:not(.Mui-disabled)': {
      '&:hover, &:active': {
        '@media (hover: hover)': {
          backgroundColor: `${
            theme.palette.type === 'light' ? SFGrey[100] : SFGrey[500]
          } !important`
        }
      },
      '&.MuiChip-outlined': {
        '&:hover, &:active': {
          '@media (hover: hover)': {
            backgroundColor: `transparent !important`
          }
        }
      },
      '&.hasError': {
        '&:hover, &:active': {
          '@media (hover: hover)': {
            backgroundColor: `${
              theme.palette.type === 'light' ? SFRed[700] : SFRed[200]
            } !important`
          }
        }
      },
      '&.primary': {
        '&:hover, &:active': {
          '@media (hover: hover)': {
            backgroundColor: `${
              theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]
            } !important`
          }
        }
      }
    }
  }
}));

export interface SFChipProps extends ChipProps {
  sfColor: 'primary' | 'default';
  deleteable?: boolean;
  hasError?: boolean;
  fullWidth?: boolean;
}

export const SFChip = ({
  sfColor = 'primary',
  size = 'medium',
  label,
  disabled,
  deleteable,
  variant = 'default',
  fullWidth,
  hasError,
  clickable,
  onDelete,
  ...props
}: SFChipProps): React.ReactElement<SFChipProps> => {
  const classes = useStyles();
  return (
    <FormControl fullWidth={fullWidth}>
      <StyledChip
        {...props}
        className={`${sfColor} ${fullWidth ? 'fullWidth' : ''} ${
          hasError ? 'hasError' : ''
        } ${!clickable ? classes.disableClick : ''}`}
        label={label}
        size={size}
        variant={variant}
        disabled={disabled}
        clickable={clickable}
        deleteIcon={<SFIconButton sfIcon='Close' sfSize='tiny' />}
        onDelete={deleteable ? onDelete : undefined}
      />
    </FormControl>
  );
};

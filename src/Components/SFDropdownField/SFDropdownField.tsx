import * as React from 'react';
import uniqueId from 'lodash.uniqueid';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import {
  ButtonGroup,
  Popper,
  ClickAwayListener,
  MenuList
} from '@material-ui/core';
import { SFButton } from '../SFButton/SFButton';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey, SFBlue, SFTextWhite } from '../../SFColors/SFColors';
import { SFPaper } from '../SFPaper/SFPaper';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    borderRadius: 2
  },
  iconButton: {
    '& svg': {
      '& path': {
        fill: (props: Partial<SFDropdownFieldProps>): string => {
          const isLight: boolean = theme.palette.type === 'light';
          if (props.sfColor === 'grey') {
            return `${isLight ? SFGrey[900] : SFGrey[50]} !important`;
          } else {
            if (props.variant === 'outlined') {
              return `${isLight ? SFBlue[500] : SFBlue[200]} !important`;
            }
            return `${isLight ? SFTextWhite : SFGrey[900]} !important`;
          }
        }
      }
    },
    '&:hover': {
      '& svg': {
        '& path': {
          fill: (props: Partial<SFDropdownFieldProps>): string => {
            const isLight: boolean = theme.palette.type === 'light';
            if (props.variant === 'outlined' && props.sfColor === 'blue') {
              return `${isLight ? SFBlue[700] : SFBlue[300]} !important`;
            }
            return 'auto';
          }
        }
      }
    },
    '&:active': {
      '& svg': {
        '& path': {
          fill: (props: Partial<SFDropdownFieldProps>): string => {
            const isLight: boolean = theme.palette.type === 'light';
            if (props.variant === 'outlined' && props.sfColor === 'blue') {
              return `${isLight ? SFBlue[800] : SFBlue[400]} !important`;
            }
            return 'auto';
          }
        }
      }
    }
  }
}));

const StyledButtonGroup = withStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none'
  },
  grouped: {
    '&:last-child': {
      padding: '0 !important'
    }
  },
  groupedContainedHorizontal: {
    '&:first-child': {
      borderRight: `1px solid ${theme.palette.background.default}`
    }
  }
}))(ButtonGroup);

const StyledButton = withStyles({
  root: {
    pointerEvents: 'none'
  }
})(SFButton);

export interface SFDropdownFieldOption {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface SFDropdownFieldProps {
  defaultSelected?: number;
  hideSelectedOption?: boolean;
  options: SFDropdownFieldOption[];
  renderSelectedOption?: (label: string) => React.ReactNode;
  sfColor: 'blue' | 'grey';
  size?: 'medium' | 'large';
  variant: 'outlined' | 'contained';
  openButtonAriaLabel?: string;
}

export const SFDropdownField = ({
  defaultSelected = 0,
  hideSelectedOption = false,
  options,
  renderSelectedOption,
  sfColor = 'blue',
  size = 'medium',
  variant = 'contained',
  openButtonAriaLabel
}: SFDropdownFieldProps): React.ReactElement<SFDropdownFieldProps> => {
  const classes = useStyles({ variant, sfColor });

  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>(
    defaultSelected
  );
  const refMenu = React.useRef<HTMLDivElement>(null);
  const refMenuId = React.useRef<string>(uniqueId('sfsplitbutton-menu-'));

  const onMenuItemClick = (index: number): void => {
    setSelectedItemIndex(index);
    options[index].onClick();
    setIsMenuOpen(false);
  };

  const onToggleMenu = (): void => {
    setIsMenuOpen((prevOpen) => !prevOpen);
  };

  const onClickAway = (event: React.MouseEvent<Document, MouseEvent>): void => {
    if (
      refMenu.current &&
      refMenu.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setIsMenuOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>): void => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      e.preventDefault();
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      <StyledButtonGroup ref={refMenu} variant={variant} size='medium'>
        <StyledButton
          sfColor={sfColor}
          size={size}
          onClick={options[selectedItemIndex].onClick}
        >
          {renderSelectedOption
            ? renderSelectedOption(options[selectedItemIndex].label)
            : options[selectedItemIndex].label}
        </StyledButton>

        <SFButton
          sfColor={sfColor}
          className={classes.iconButton}
          size={size}
          aria-controls={isMenuOpen ? refMenuId.current : undefined}
          aria-expanded='true'
          aria-haspopup='menu'
          aria-label={openButtonAriaLabel || 'Open options'}
          onClick={onToggleMenu}
        >
          <SFIcon icon='Down-2' size={13} />
        </SFButton>
      </StyledButtonGroup>

      <Popper
        style={{ zIndex: 1 }}
        open={isMenuOpen}
        anchorEl={refMenu.current}
        placement='bottom-end'
        disablePortal
      >
        <SFPaper className={classes.paper} elevation={8}>
          <ClickAwayListener onClickAway={onClickAway}>
            <MenuList
              autoFocusItem={isMenuOpen}
              id={refMenuId.current}
              onKeyDown={onKeyDown}
            >
              {options.map((option, index) => {
                if (hideSelectedOption && index === selectedItemIndex) {
                  return undefined;
                }

                return (
                  <SFMenuItem
                    key={option.label}
                    disabled={option.disabled}
                    selected={index === selectedItemIndex}
                    onClick={(): void => onMenuItemClick(index)}
                  >
                    {option.label}
                  </SFMenuItem>
                );
              })}
            </MenuList>
          </ClickAwayListener>
        </SFPaper>
      </Popper>
    </div>
  );
};

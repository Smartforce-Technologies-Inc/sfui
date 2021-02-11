import * as React from 'react';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import {
  ButtonGroup,
  Popper,
  ClickAwayListener,
  MenuList,
  Paper
} from '@material-ui/core';
import { SFButton } from '../SFButton/SFButton';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey, SFBlue, SFTextWhite } from '../../SFColors/SFColors';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    padding: '0 !important',

    '& svg': {
      '& path': {
        fill: (props: SFSplitButtonProps): string => {
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
          fill: (props: SFSplitButtonProps): string => {
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
          fill: (props: SFSplitButtonProps): string => {
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
  contained: {
    boxShadow: 'none'
  },
  outlined: {
    boxShadow: 'none'
  },
  groupedContainedHorizontal: {
    '&:first-child': {
      borderRight: `1px solid ${theme.palette.background.default}`
    }
  }
}))(ButtonGroup);

export interface SFSplitButtonOption {
  key: string;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface SFSplitButtonProps {
  options: SFSplitButtonOption[];
  variant: 'outlined' | 'contained';
  sfColor: 'blue' | 'grey';
  size: 'small' | 'medium' | 'large';
}

export const SFSplitButton = ({
  options,
  variant = 'contained',
  sfColor = 'blue',
  size = 'medium'
}: SFSplitButtonProps): React.ReactElement<SFSplitButtonProps> => {
  const classes = useStyles({
    options,
    variant,
    sfColor,
    size
  });

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const refMenu = React.useRef<HTMLDivElement>(null);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const onMenuItemClick = (index: number): void => {
    setSelectedItemIndex(index);
    setIsMenuOpen(false);
  };

  const onOpenMenu = (): void => {
    setIsMenuOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>): void => {
    if (
      refMenu.current &&
      refMenu.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setIsMenuOpen(false);
  };

  return (
    <div>
      <StyledButtonGroup ref={refMenu} variant={variant} size={size}>
        <SFButton
          sfColor={sfColor}
          onClick={options[selectedItemIndex].onClick}
        >
          {options[selectedItemIndex].label}
        </SFButton>

        <SFButton
          sfColor={sfColor}
          className={classes.iconButton}
          aria-controls={isMenuOpen ? 'split-button-menu' : undefined}
          aria-expanded={isMenuOpen ? 'true' : undefined}
          aria-haspopup='menu'
          onClick={onOpenMenu}
        >
          <SFIcon icon='Down-2' size={13} />
        </SFButton>
      </StyledButtonGroup>

      <Popper
        open={isMenuOpen}
        anchorEl={refMenu.current}
        placement='top-end'
        transition
        disablePortal
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList id='split-button-menu'>
              {options.map((option, index) => (
                <SFMenuItem
                  key={option.key}
                  disabled={option.disabled}
                  selected={index === selectedItemIndex}
                  onClick={(): void => onMenuItemClick(index)}
                >
                  {option.label}
                </SFMenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
};

import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  ButtonGroup,
  Popper,
  ClickAwayListener,
  MenuList,
  Theme
} from '@mui/material';
import { SFButton } from '../SFButton/SFButton';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey, SFBlue, SFTextWhite } from '../../SFColors/SFColors';
import { SFPaper } from '../SFPaper/SFPaper';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

const getFill = (
  theme: Theme,
  sfColor: string,
  variant: string,
  status?: string
): string => {
  const isLight: boolean = theme.palette.mode === 'light';

  if (status === 'hover') {
    if (variant === 'outlined' && sfColor === 'blue') {
      return `${isLight ? SFBlue[700] : SFBlue[300]} !important`;
    }
    return 'auto';
  } else if (status === 'active') {
    if (variant === 'outlined' && sfColor === 'blue') {
      return `${isLight ? SFBlue[800] : SFBlue[400]} !important`;
    }
    return 'auto';
  } else {
    if (sfColor === 'grey') {
      return `${isLight ? SFGrey[900] : SFGrey[50]} !important`;
    } else {
      if (variant === 'outlined') {
        return `${isLight ? SFBlue[500] : SFBlue[200]} !important`;
      }
      return `${isLight ? SFTextWhite : SFGrey[900]} !important`;
    }
  }
};

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  boxShadow: 'none',

  '& .MuiButtonGroup-grouped': {
    '&:last-child': {
      padding: '0 !important'
    }
  },

  '& .MuiButtonGroup-groupedContainedHorizontal': {
    '&:first-child': {
      borderRight: `1px solid ${theme.palette.background.default}`
    }
  }
}));

export interface SFSplitButtonOption {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface SFSplitButtonProps {
  className?: string;
  options: SFSplitButtonOption[];
  defaultSelected?: number;
  variant: 'outlined' | 'contained';
  sfColor: 'blue' | 'grey';
  size?: 'medium' | 'large';
}

const SFSplitButtonBase = ({
  className = '',
  options,
  defaultSelected = 0,
  variant = 'contained',
  sfColor = 'blue',
  size = 'medium'
}: SFSplitButtonProps): React.ReactElement<SFSplitButtonProps> => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>(
    defaultSelected
  );
  const refMenu = React.useRef<HTMLDivElement>(null);

  const onMenuItemClick = (index: number): void => {
    setSelectedItemIndex(index);
    setIsMenuOpen(false);
  };

  const onToggleMenu = (): void => {
    setIsMenuOpen((prevOpen) => !prevOpen);
  };

  const onClickAway = (event: MouseEvent | TouchEvent): void => {
    if (
      refMenu.current &&
      refMenu.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setIsMenuOpen(false);
  };

  return (
    <div className={className}>
      <StyledButtonGroup ref={refMenu} variant={variant} size='medium'>
        <SFButton
          sfColor={sfColor}
          size={size}
          variant={variant}
          onClick={options[selectedItemIndex].onClick}
        >
          {options[selectedItemIndex].label}
        </SFButton>

        <SFButton
          className='SFSplitButton-iconButton'
          sfColor={sfColor}
          variant={variant}
          size={size}
          aria-controls={isMenuOpen ? 'split-button-menu' : undefined}
          aria-expanded={isMenuOpen ? 'true' : undefined}
          aria-haspopup='menu'
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
        <SFPaper className='SFSplitButton-paper' elevation={8}>
          <ClickAwayListener onClickAway={onClickAway}>
            <MenuList id='split-button-menu'>
              {options.map((option, index) => (
                <SFMenuItem
                  key={option.label}
                  disabled={option.disabled}
                  selected={index === selectedItemIndex}
                  onClick={(): void => onMenuItemClick(index)}
                >
                  {option.label}
                </SFMenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </SFPaper>
      </Popper>
    </div>
  );
};

export const SFSplitButton = styled(SFSplitButtonBase)(
  ({ theme, sfColor, variant }) => ({
    '& .SFSplitButton-paper': {
      borderRadius: 2
    },
    '& .SFSplitButton-iconButton': {
      '& svg': {
        '& path': {
          fill: getFill(theme, sfColor, variant)
        }
      },
      '&:hover': {
        '& svg': {
          '& path': {
            fill: getFill(theme, sfColor, variant, 'hover')
          }
        }
      },
      '&:active': {
        '& svg': {
          '& path': {
            fill: getFill(theme, sfColor, variant, 'active')
          }
        }
      }
    }
  })
);

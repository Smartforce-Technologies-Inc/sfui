import * as React from 'react';
import {
  ClickAwayListener,
  MenuList,
  Popper,
  ButtonGroup,
  styled
} from '@mui/material';
import { SFButton } from '../SFButton/SFButton';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFGrey, SFBlue, SFTextWhite } from '../../SFColors/SFColors';
import { SFPaper } from '../SFPaper/SFPaper';
import { SFMenuItem } from '../SFMenuItem/SFMenuItem';

function getFillColor(
  sfColor: string,
  variant: string,
  isLight: boolean,
  type?: 'hover' | 'active'
): string {
  if (type === 'hover') {
    if (variant === 'outlined' && sfColor === 'blue') {
      return `${isLight ? SFBlue[700] : SFBlue[300]} !important`;
    }
    return 'inherit';
  } else if (type === 'active') {
    if (variant === 'outlined' && sfColor === 'blue') {
      return `${isLight ? SFBlue[800] : SFBlue[400]} !important`;
    }
    return 'inherit';
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
}

const StyledPaper = styled(SFPaper)({
  borderRadius: 2
});

const StyledButton = styled(SFButton)(
  ({ theme, sfColor = 'blue', variant = 'contained' }) => ({
    '& svg': {
      '& path': {
        fill: getFillColor(sfColor, variant, theme.palette.mode === 'light')
      }
    },
    '&:hover': {
      '& svg': {
        '& path': {
          fill: getFillColor(
            sfColor,
            variant,
            theme.palette.mode === 'light',
            'hover'
          )
        }
      }
    },
    '&:active': {
      '& svg': {
        '& path': {
          fill: getFillColor(
            sfColor,
            variant,
            theme.palette.mode === 'light',
            'active'
          )
        }
      }
    }
  })
);

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  boxShadow: 'none',
  '.MuiButtonGroup-grouped': {
    '&:last-child': {
      padding: '0 !important'
    }
  },
  '.MuiButtonGroup-groupedContainedHorizontal': {
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.background.default}`
    }
  }
}));

export type SFSplitButtonVariant = 'outlined' | 'contained';
export type SFSplitButtonColor = 'blue' | 'grey';
export type SFSplitButtonSize = 'medium' | 'large';

export interface SFSplitButtonOption {
  disabled?: boolean;
  label: string;
  onClick: () => void;
}

export interface SFSplitButtonProps {
  defaultSelected?: number;
  options: SFSplitButtonOption[];
  sfColor: SFSplitButtonColor;
  size?: SFSplitButtonSize;
  variant: SFSplitButtonVariant;
}

export const SFSplitButton = ({
  defaultSelected = 0,
  options,
  sfColor = 'blue',
  size = 'medium',
  variant = 'contained'
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
    <div>
      <StyledButtonGroup ref={refMenu} variant={variant} size='medium'>
        <SFButton
          variant={variant}
          sfColor={sfColor}
          size={size}
          onClick={options[selectedItemIndex].onClick}
        >
          {options[selectedItemIndex].label}
        </SFButton>

        <StyledButton
          variant={variant}
          sfColor={sfColor}
          size={size}
          aria-controls={isMenuOpen ? 'split-button-menu' : undefined}
          aria-expanded={isMenuOpen ? 'true' : undefined}
          aria-haspopup='menu'
          onClick={onToggleMenu}
        >
          <SFIcon icon='Down-2' size={13} />
        </StyledButton>
      </StyledButtonGroup>

      <Popper
        style={{ zIndex: 1 }}
        open={isMenuOpen}
        anchorEl={refMenu.current}
        placement='bottom-end'
        disablePortal
      >
        <StyledPaper elevation={8}>
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
        </StyledPaper>
      </Popper>
    </div>
  );
};

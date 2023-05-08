import React, { forwardRef } from 'react';

import { SFSpinner } from '../SFSpinner/SFSpinner';
import { SFPaper } from '../SFPaper/SFPaper';

import { makeStyles } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';

const cardStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '30px',
    borderRadius: '2px',
    '& .loader': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      '&.top': {
        flexDirection: 'row',
        '& p': {
          margin: '0px 15px'
        }
      }
    }
  }
});

const usePaperStyles = makeStyles({
  root: {
    border: `1px solid ${SFGrey[100]}`,
    borderRadius: '2px'
  }
});

export type sfElevations = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;

export interface SFCardProps {
  sfElevation?: sfElevations;
  className?: string;
  isLoading?: boolean;
  loadingAtTop?: boolean;
  paperClassName?: string;
  children?: React.ReactNode;
}

export const SFCard = forwardRef(
  (
    {
      sfElevation = 0,
      className = '',
      isLoading = false,
      loadingAtTop = false,
      paperClassName,
      children
    }: SFCardProps,
    ref?: React.Ref<unknown> | undefined
  ): React.ReactElement<SFCardProps> => {
    const externalClass: string = className || '';
    const customCardStyles: Record<'root', string> = cardStyles();
    const styledPaper: Record<'root', string> = usePaperStyles();

    return (
      <SFPaper
        elevation={sfElevation}
        className={paperClassName}
        classes={sfElevation === 0 ? styledPaper : undefined}
        ref={ref}
      >
        <div className={`${customCardStyles.root} ${externalClass} `}>
          {isLoading === true ? (
            <div
              className={`loader ${loadingAtTop === true ? 'top' : undefined}`}
            >
              <SFSpinner />
              <p>Loading...</p>
            </div>
          ) : (
            children
          )}
        </div>
      </SFPaper>
    );
  }
);

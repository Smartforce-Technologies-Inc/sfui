import React, { forwardRef } from 'react';

import { SFSpinner } from '../SFSpinner/SFSpinner';
import { SFPaper, SFPaperProps } from '../SFPaper/SFPaper';

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

export interface SFCardProps extends SFPaperProps {
  sfElevation?: sfElevations;
  containerClassName?: string;
  isLoading?: boolean;
  loadingAtTop?: boolean;
  children?: React.ReactNode;
}

export const SFCard = forwardRef(
  (
    {
      sfElevation = 0,
      containerClassName = '',
      isLoading = false,
      loadingAtTop = false,
      children,
      ...props
    }: SFCardProps,
    ref?: React.Ref<unknown> | undefined
  ): React.ReactElement<SFCardProps> => {
    const customCardStyles: Record<'root', string> = cardStyles();
    const styledPaper: Record<'root', string> = usePaperStyles();

    return (
      <SFPaper
        {...props}
        elevation={sfElevation}
        classes={sfElevation === 0 ? styledPaper : undefined}
        ref={ref}
      >
        <div className={`${customCardStyles.root} ${containerClassName} `}>
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

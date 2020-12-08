import * as React from 'react';

import { CircularProgress } from '@material-ui/core';
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

const paperStyles = makeStyles({
  root: {
    border: `1px solid ${SFGrey[100]}`
  }
});

export type sfElevations = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;

export interface SFCardProps {
  sfElevation?: sfElevations;
  className?: string;
  isLoading?: boolean;
  loadingAtTop?: boolean;
  children?: React.ReactNode;
}

export const SFCard = ({
  sfElevation = 0,
  className = '',
  isLoading = false,
  loadingAtTop = false,
  children
}: SFCardProps): React.ReactElement<SFCardProps> => {
  const externalClass: string = className ? className : '';
  const customCardStyles: Record<'root', string> = cardStyles();
  const styledPaper: Record<'root', string> = paperStyles();

  return (
    <SFPaper
      elevation={sfElevation}
      classes={sfElevation === 0 ? styledPaper : undefined}
    >
      <div className={`${customCardStyles.root} ${externalClass} `}>
        {isLoading === true ? (
          <div
            className={`loader ${loadingAtTop === true ? 'top' : undefined}`}
          >
            <CircularProgress />
            <p>Loading...</p>
          </div>
        ) : (
          { children }
        )}
      </div>
    </SFPaper>
  );
};

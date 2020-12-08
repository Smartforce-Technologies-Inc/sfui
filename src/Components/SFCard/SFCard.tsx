import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { SFGrey } from '../../SFColors/SFColors';
const cardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      padding: '30px',
      borderRadius: '2px',
      '&.withBorder': {
        border: `1px solid ${SFGrey[100]}`
      }
    }
  })
);

type sfElevations = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;

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

  return (
    <div
      className={`${customCardStyles.root} ${externalClass} ${
        sfElevation > 0 ? 'MuiPaper-elevation' + sfElevation : 'withBorder'
      }`}
    >
      {isLoading === true ? (
        loadingAtTop === false ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <CircularProgress />
            <p>Loading...</p>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <CircularProgress />
            <p style={{ margin: '0px 15px' }}>Loading...</p>
          </div>
        )
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

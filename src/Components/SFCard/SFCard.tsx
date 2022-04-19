import * as React from 'react';
import { styled } from '@mui/material/styles';
import { SFSpinner } from '../SFSpinner/SFSpinner';
import { SFPaper } from '../SFPaper/SFPaper';
import { SFGrey } from '../../SFColors/SFColors';

export type sfElevations = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;

export interface SFCardProps {
  sfElevation?: sfElevations;
  className?: string;
  isLoading?: boolean;
  loadingAtTop?: boolean;
  children?: React.ReactNode;
}

const SFCardBase = ({
  sfElevation = 0,
  className = '',
  isLoading = false,
  loadingAtTop = false,
  children
}: SFCardProps): React.ReactElement<SFCardProps> => {
  return (
    <SFPaper elevation={sfElevation} className={className}>
      <div className='content'>
        {isLoading === true ? (
          <div className={`loader ${loadingAtTop === true ? 'top' : ''}`}>
            <SFSpinner />
            <p>Loading...</p>
          </div>
        ) : (
          children
        )}
      </div>
    </SFPaper>
  );
};

export const SFCard = styled(SFCardBase)({
  '&.MuiPaper-elevation0': {
    border: `1px solid ${SFGrey[100]}`,
    borderRadius: '2px'
  },

  '.content': {
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

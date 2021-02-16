import React from 'react';

import { SFChip } from 'sfui';

export const SFChipsView = (): JSX.Element => {
  return (
    <div className='itemsContainer'>
      <div className='columnGroup'>
        <div className='column'>
          <div className='rowGroup'>
            <SFChip label='Small' size='small' sfColor='primary' />
            <SFChip label='Small' size='small' sfColor='primary' disabled />
          </div>
          <div className='rowGroup'>
            <SFChip label='Small' size='small' sfColor='default' />
            <SFChip label='Small' size='small' sfColor='default' disabled />
          </div>
        </div>
        <div className='column'>
          <div className='rowGroup'>
            <SFChip
              label='Small'
              size='small'
              sfColor='primary'
              variant='outlined'
            />
            <SFChip
              label='Small'
              size='small'
              sfColor='primary'
              disabled
              variant='outlined'
            />
          </div>
          <div className='rowGroup'>
            <SFChip
              label='Small'
              size='small'
              sfColor='default'
              variant='outlined'
            />
            <SFChip
              label='Small'
              size='small'
              sfColor='default'
              disabled
              variant='outlined'
            />
          </div>
        </div>
      </div>
      <div className='columnGroup'>
        <div className='column'>
          <div className='rowGroup'>
            <SFChip label='Medium' sfColor='primary' />
            <SFChip label='Medium' sfColor='primary' disabled />
          </div>
          <div className='rowGroup'>
            <SFChip label='Medium' sfColor='default' />
            <SFChip label='Medium' sfColor='default' disabled />
          </div>
        </div>
        <div className='column'>
          <div className='rowGroup'>
            <SFChip label='Medium' sfColor='primary' variant='outlined' />
            <SFChip
              label='Medium'
              sfColor='primary'
              disabled
              variant='outlined'
            />
          </div>
          <div className='rowGroup'>
            <SFChip label='Medium' sfColor='default' variant='outlined' />
            <SFChip
              label='Medium'
              sfColor='default'
              disabled
              variant='outlined'
            />
          </div>
        </div>
      </div>

      <div className='columnGroup'>
        <div className='column'>
          <div className='rowGroup'>
            <SFChip
              label='Small'
              size='small'
              sfColor='primary'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
            <SFChip
              label='Small'
              size='small'
              sfColor='primary'
              disabled
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
          </div>
          <div className='rowGroup'>
            <SFChip
              label='Small'
              size='small'
              sfColor='default'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
            <SFChip
              label='Small'
              size='small'
              sfColor='default'
              disabled
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
          </div>
        </div>
        <div className='column'>
          <div className='rowGroup'>
            <SFChip
              label='Small'
              size='small'
              sfColor='primary'
              variant='outlined'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
            <SFChip
              label='Small'
              size='small'
              sfColor='primary'
              disabled
              variant='outlined'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
          </div>
          <div className='rowGroup'>
            <SFChip
              label='Small'
              size='small'
              sfColor='default'
              variant='outlined'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
            <SFChip
              label='Small'
              size='small'
              sfColor='default'
              disabled
              variant='outlined'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
          </div>
        </div>
      </div>
      <div className='columnGroup'>
        <div className='column'>
          <div className='rowGroup'>
            <SFChip
              label='Medium'
              sfColor='primary'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
            <SFChip
              label='Medium'
              sfColor='primary'
              disabled
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
          </div>
          <div className='rowGroup'>
            <SFChip
              label='Medium'
              sfColor='default'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
            <SFChip
              label='Medium'
              sfColor='default'
              disabled
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
          </div>
        </div>
        <div className='column'>
          <div className='rowGroup'>
            <SFChip
              label='Medium'
              sfColor='primary'
              variant='outlined'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
            <SFChip
              label='Medium'
              sfColor='primary'
              disabled
              variant='outlined'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
          </div>
          <div className='rowGroup'>
            <SFChip
              label='Medium'
              sfColor='default'
              variant='outlined'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
            <SFChip
              label='Medium'
              sfColor='default'
              disabled
              variant='outlined'
              deleteable
              onDelete={() => console.log('Deleted!')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

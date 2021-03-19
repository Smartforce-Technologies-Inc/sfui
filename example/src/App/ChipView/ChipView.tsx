import React from 'react';

import { SFChip } from 'sfui';

export const SFChipsView = (): JSX.Element => {
  return (
    <div className='row content'>
      <div className='column'>
        <div className='row'>
          <SFChip label='Small' size='small' sfColor='primary' />
          <SFChip
            label='Small'
            size='small'
            sfColor='primary'
            variant='outlined'
          />
        </div>
        <div className='row'>
          <SFChip label='Small' size='small' sfColor='primary' disabled />
          <SFChip
            label='Small'
            size='small'
            sfColor='primary'
            disabled
            variant='outlined'
          />
        </div>
        <div className='row'>
          <SFChip label='Small' size='small' sfColor='default' />
          <SFChip
            label='Small'
            size='small'
            sfColor='default'
            variant='outlined'
          />
        </div>
        <div className='row'>
          <SFChip label='Small' size='small' sfColor='default' disabled />
          <SFChip
            label='Small'
            size='small'
            sfColor='default'
            disabled
            variant='outlined'
          />
        </div>
      </div>
      <div className='column'>
        <div className='row'>
          <SFChip label='Medium' sfColor='primary' />
          <SFChip label='Medium' sfColor='primary' variant='outlined' />
        </div>
        <div className='row'>
          <SFChip label='Medium' sfColor='primary' disabled />
          <SFChip
            label='Medium'
            sfColor='primary'
            disabled
            variant='outlined'
          />
        </div>
        <div className='row'>
          <SFChip label='Medium' sfColor='default' />
          <SFChip label='Medium' sfColor='default' variant='outlined' />
        </div>
        <div className='row'>
          <SFChip label='Medium' sfColor='default' disabled />
          <SFChip
            label='Medium'
            sfColor='default'
            disabled
            variant='outlined'
          />
        </div>
      </div>
      <div className='column'>
        <div className='row'>
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
        <div className='row'>
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
        <div className='row'>
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
        <div className='row'>
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
      <div className='column'>
        <div className='row'>
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
        <div className='row'>
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
        <div className='row'>
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
        <div className='row'>
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
  );
};

import React from 'react';
import { SFTextField } from 'sfui';

const SFTextFieldsMultilineView = (): JSX.Element => {
  const innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis. 
  Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis.
   Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.`;
  return (
    <div className='column'>
      <div className='row'>
        <SFTextField multiline label='Bagel' />
      </div>
      <div className='row'>
        <SFTextField multiline label='Bagel' value={innerText} />
      </div>
      <div className='row'>
        <SFTextField multiline label='Bagel' value={innerText} disabled />
      </div>
      <div className='row'>
        <SFTextField multiline label='Bagel' value={innerText} error />
      </div>
      <div className='row'>
        <SFTextField
          multiline
          label='Bagel'
          value={innerText}
          helperText='Helper Message'
        />
      </div>
    </div>
  );
};
export { SFTextFieldsMultilineView };

import React from 'react';
import { SFTextField } from 'sfui';

const SFTextFieldsMultilineView = (): JSX.Element => {
  const innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis. 
  Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis.
   Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.`;
  return (
    <div className='fullSize'>
      <SFTextField multiline label='Bagel' />
      <SFTextField multiline label='Bagel' value={innerText} />
      <SFTextField multiline label='Bagel' value={innerText} disabled />
      <SFTextField multiline label='Bagel' value={innerText} error />
      <SFTextField
        multiline
        label='Bagel'
        value={innerText}
        helperText='Helper Message'
      />
    </div>
  );
};
export { SFTextFieldsMultilineView };

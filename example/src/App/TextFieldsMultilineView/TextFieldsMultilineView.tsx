import React from 'react';

import { SFTextField } from 'sfui';

const SFTextFieldsMultilineView = () => {
  return (
    <div className='fullSize'>
      <SFTextField multiline label='Bagel' />
      <SFTextField
        multiline
        label='Bagel'
        value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis. 
    Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis.
     Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.'
      />
      <SFTextField
        multiline
        label='Bagel'
        value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis. 
    Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis.
     Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.'
        disabled
      />
      <SFTextField
        multiline
        label='Bagel'
        value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis. 
    Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis.
     Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.'
        error
      />
      <SFTextField
        multiline
        label='Bagel'
        value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis. 
    Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis a erat eu mattis.
     Donec fringilla molestie justo pulvinar dignissim. Pellentesque sit amet ex a velit maximus aliquet sit amet id justo.'
        helperText='Helper Message'
      />
    </div>
  );
};

export { SFTextFieldsMultilineView };

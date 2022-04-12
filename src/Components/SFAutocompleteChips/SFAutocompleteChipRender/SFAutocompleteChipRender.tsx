import React, { Fragment } from 'react';
import { SFChip } from '../../SFChip/SFChip';

export interface SFAutocompleteChipRenderProps {
  values: string[];
  onDelete: (input: string) => void;
}

export const SFAutocompleteChipRender = ({
  values,
  onDelete
}: SFAutocompleteChipRenderProps): React.ReactElement<SFAutocompleteChipRenderProps> => {
  return (
    <Fragment>
      {values.map((input: string, index: number) => (
        <SFChip
          key={`${input}-${index}`}
          sfColor='default'
          variant='outlined'
          size='small'
          label={input}
          onDelete={(): void => onDelete(input)}
        />
      ))}
    </Fragment>
  );
};

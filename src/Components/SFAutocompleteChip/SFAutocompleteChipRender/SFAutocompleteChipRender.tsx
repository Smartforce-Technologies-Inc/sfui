import React, { Fragment } from 'react';
import { SFChip } from '../../SFChip/SFChip';

export interface SFAutocompleteChipRenderProps {
  values: string[];
  disabled: boolean;
  onDelete: (input: string) => void;
}

export const SFAutocompleteChipRender = ({
  values,
  disabled,
  onDelete
}: SFAutocompleteChipRenderProps): React.ReactElement<SFAutocompleteChipRenderProps> => {
  return (
    <Fragment>
      {values.map((input: string, index: number) => (
        <SFChip
          key={`${input}-${index}`}
          deleteable
          sfColor='default'
          variant='outlined'
          size='small'
          label={input}
          disabled={disabled}
          onDelete={(): void => onDelete(input)}
        />
      ))}
    </Fragment>
  );
};

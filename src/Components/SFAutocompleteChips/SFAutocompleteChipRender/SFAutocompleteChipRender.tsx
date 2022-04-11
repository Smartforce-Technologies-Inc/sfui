import React, { Fragment } from 'react';
import { SFChip } from '../../SFChip/SFChip';

export interface SFAutocompleteChipRenderProps {
  values: string[];
  disabled: boolean;
  isValid?: (value: string) => boolean;
  onDelete: (input: string) => void;
  onEdit?: (value: string) => void;
}

export const SFAutocompleteChipRender = ({
  values,
  disabled,
  onDelete,
  onEdit
}: SFAutocompleteChipRenderProps): React.ReactElement<SFAutocompleteChipRenderProps> => {
  return (
    <Fragment>
      {values.map((input: string, index: number) => (
        <SFChip
          key={`${input}-${index}`}
          deleteable
          clickable
          sfColor='default'
          variant='outlined'
          size='small'
          label={input}
          disabled={disabled}
          onDelete={(): void => onDelete(input)}
          onClick={(): void => {
            if (onEdit) {
              onEdit(input);
            }
          }}
        />
      ))}
    </Fragment>
  );
};

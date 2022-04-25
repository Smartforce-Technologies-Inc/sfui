import React from 'react';
import { styled } from '@mui/material/styles';
import parse from 'autosuggest-highlight/parse';
import { SFGrey } from '../../../SFColors/SFColors';
import { SFIcon } from '../../SFIcon/SFIcon';

interface TextPart {
  text: string;
  highlight: boolean;
}

export interface SFAutocompleteLocationOptionProps
  extends React.HTMLAttributes<HTMLLIElement> {
  option: google.maps.places.AutocompletePrediction;
}

const SFAutocompleteLocationOptionBase = ({
  className,
  option,
  ...props
}: SFAutocompleteLocationOptionProps): React.ReactElement<SFAutocompleteLocationOptionProps> => {
  let matches: google.maps.places.PredictionSubstring[] = [];
  let parts: TextPart[] = [];

  if (option.structured_formatting) {
    matches = option.structured_formatting.main_text_matched_substrings;
    parts = parse(
      option.structured_formatting.main_text,
      matches.map((match: google.maps.places.PredictionSubstring) => [
        match.offset,
        match.offset + match.length
      ])
    );
  }

  return (
    <li className={className} {...props}>
      <SFIcon icon='Loction-1' />

      <div className='SFAutocompleteLocationOption-text'>
        {parts.map((part, index) => (
          <span
            key={index}
            className={
              part.highlight ? 'SFAutocompleteLocationOption-highlight' : ''
            }
          >
            {part.text}
          </span>
        ))}

        <br />

        <span className='SFAutocompleteLocationOption-secondaryText'>
          {option.structured_formatting &&
            option.structured_formatting.secondary_text}
        </span>
      </div>
    </li>
  );
};

export const SFAutocompleteLocationOption = styled(
  SFAutocompleteLocationOptionBase
)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '15px',
  alignItems: 'center',

  '& .SFAutocompleteLocationOption-text': {
    fontSize: '16px',
    lineHeight: '24px',
    color: theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]
  },
  '& .SFAutocompleteLocationOption-highlight': {
    fontWeight: 700
  },
  '& .SFAutocompleteLocationOption-secondaryText': {
    fontSize: '12px',
    lineHeight: '14px',
    color: theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400]
  }
}));

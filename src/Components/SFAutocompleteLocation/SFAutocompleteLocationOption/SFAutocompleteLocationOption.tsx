import React from 'react';
import { styled } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import { SFIcon } from '../../SFIcon/SFIcon';
import { SFGrey } from '../../../SFColors/SFColors';

interface TextPart {
  text: string;
  highlight: boolean;
}

const PrimaryText = styled('span')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  color: theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]
}));

const SecondaryText = styled('span')(({ theme }) => ({
  fontSize: '12px',
  lineHeight: '14px',
  color: theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400]
}));

export interface SFAutocompleteLocationOptionProps {
  liProps: object;
  option: google.maps.places.AutocompletePrediction;
}

export const SFAutocompleteLocationOption = ({
  liProps,
  option
}: SFAutocompleteLocationOptionProps): React.ReactElement<SFAutocompleteLocationOptionProps> => {
  let matches: google.maps.places.PredictionSubstring[] = [];
  let parts: TextPart[] = [];
  const structuredFormatting: google.maps.places.StructuredFormatting =
    option.structured_formatting;

  if (structuredFormatting) {
    matches = structuredFormatting.main_text_matched_substrings || [];
    parts = parse(
      structuredFormatting.main_text,
      matches.map((match: google.maps.places.PredictionSubstring) => [
        match.offset,
        match.offset + match.length
      ])
    );
  }

  return (
    <li {...liProps}>
      <SFIcon icon='Loction-1' />

      <div>
        {parts.map((part, index) => (
          <PrimaryText
            key={index}
            style={part.highlight ? { fontWeight: 700 } : {}}
          >
            {part.text}
          </PrimaryText>
        ))}

        <br />

        <SecondaryText>
          {option.structured_formatting &&
            option.structured_formatting.secondary_text}
        </SecondaryText>
      </div>
    </li>
  );
};

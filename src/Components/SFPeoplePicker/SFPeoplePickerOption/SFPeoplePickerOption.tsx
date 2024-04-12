import React from 'react';
import { styled } from '@mui/material';
import { SFBlue, SFGrey, SFTextWhite } from '../../../SFColors/SFColors';
import { SFPeopleOption } from '../SFPeoplePicker';

const getStringAbbreviation = (value: string): string => {
  const abbreviation = value.split(' ');
  let stringAbbreviation = '';

  if (abbreviation) {
    for (let i = 0; i < 3; i++) {
      if (abbreviation[i]) {
        stringAbbreviation += abbreviation[i][0];
      } else {
        break;
      }
    }
  }

  return stringAbbreviation;
};

const Avatar = styled('div')({
  backgroundColor: SFBlue[400],
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '14px',
  lineHeight: '21px',
  fontWeight: 700,
  color: SFTextWhite
});

const Name = styled('div')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  color: theme.palette.mode === 'light' ? SFGrey[900] : SFGrey[50]
}));

export interface SFPeoplePickerOptionProps {
  liProps: object;
  option: SFPeopleOption;
}

export const SFPeoplePickerOption = ({
  liProps,
  option
}: SFPeoplePickerOptionProps): React.ReactElement<SFPeoplePickerOptionProps> => {
  return (
    <li {...liProps}>
      <Avatar
        style={{
          backgroundImage: option.avatarUrl ? `url("${option.avatarUrl}")` : '',
          backgroundSize: 'cover'
        }}
      >
        {!option.avatarUrl && <span>{getStringAbbreviation(option.name)}</span>}
      </Avatar>

      <Name>{option.name}</Name>
    </li>
  );
};

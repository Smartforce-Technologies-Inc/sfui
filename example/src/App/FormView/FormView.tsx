import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import React, { ChangeEvent, useEffect, useState } from 'react';

import {
  SFTextField,
  SFRadioGroup,
  SFRadioOptionsProps,
  SFCheckbox,
  SFSwitch,
  SFDatePicker,
  SFSelect,
  SFMenuOption,
  SFAlertDialog,
  SFNumericField,
  SFAutocompleteLocation,
  SFAutocompleteLocationResult,
  SFTimeField,
  SFLink,
  SFSkeleton,
  SFSpinner,
  SFChipsListField,
  ChipFieldValueType,
  SFAutocomplete,
  SFMultiSelect,
  SFButton,
  SFScrollable
} from 'sfui';

export const FormView = (): JSX.Element => {
  type formInformation = {
    date: string | undefined;
    streetAdress: SFAutocompleteLocationResult;
    incidentNumber: string;
    incidentTime: ParsableDate;
    description: string;
    injured: boolean;
    propertyDamage: boolean;
    witnessess: string;
    supervisor: string;
    officers: ChipFieldValueType[];
    incidentEvents: ChipFieldValueType[];
    placeOfOcurrence: string | undefined;
    incidentTests: string[] | undefined;
    policeDepartment: string;
  };

  const initialData: formInformation = {
    date: undefined,
    streetAdress: { text: '' },
    incidentNumber: '',
    incidentTime: undefined,
    description: '',
    injured: false,
    propertyDamage: false,
    witnessess: '',
    supervisor: '',
    officers: [],
    incidentEvents: [],
    placeOfOcurrence: undefined,
    incidentTests: [],
    policeDepartment: ''
  };

  const [response, setResponse] = useState<formInformation>({ ...initialData });
  const [formData, setFormData] = useState({ ...initialData });
  const [openResponsePanel, setOpenResponsePanel] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const cleanOutput = (): void => {
    console.log(formData);
    setFormData({ ...initialData });
  };

  const handleFormResponse = (): void => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 1000);
    setResponse(formData);
  };

  const radioGroupOptions: SFRadioOptionsProps[] = [
    { value: 'None', label: 'None', disabled: false },
    { value: 'Around 10', label: 'Few', disabled: false },
    { value: 'Around 25 ', label: 'Some', disabled: false },
    { value: 'More Than 30', label: 'Many', disabled: false }
  ];

  const selectOptions: SFMenuOption[] = [
    { value: 'Henry McKane', label: 'Henry McKane' },
    { value: 'Donald McDonald', label: 'Donald McDonald' },
    { value: 'Andrew Snippets', label: 'Andrew Snippets' },
    { value: 'John Cenna', label: 'John Cenna' }
  ];

  const ChipsListOptions: string[] = [
    'Verbal',
    'Fight',
    'Escape',
    'Hand Weapon Usage',
    'Pursuit',
    'Firegun Usage',
    'Standup Stabilization',
    'Ground Stabilization'
  ];

  const autoCompleteOptions: SFMenuOption[] = [
    { label: 'School', value: 'School' },
    { label: 'Gym', value: 'Gym' },
    { label: 'Hospital', value: 'Hospital' },
    { label: 'Store', value: 'Store' },
    { label: 'Parking Lot', value: 'Parking Lot' },
    { label: 'Playground', value: 'Playground' },
    { label: 'Street', value: 'Street' },
    { label: 'House', value: 'House' },
    { label: 'Train Station', value: 'Train Station' }
  ];

  const multiSelectOptions: SFMenuOption[] = [
    { label: 'Alcohol Test', value: 'Alcohol Test' },
    { label: 'Drugs Test', value: 'Drugs Test' },
    { label: 'First Aid', value: 'First Aid' }
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='demoItem'>
      <h4 className='demoTitle'>Form Demo</h4>
      <div className='demoBody'>
        {isLoading && (
          <div className='grid-column skeleton'>
            <div className='row'>
              <SFSkeleton variant='circle' width={60} height={60} />
              <SFSkeleton variant='rect' width='94%' height={60} />
            </div>
            <SFSkeleton variant='text' />
            <SFSkeleton variant='text' />
            <SFSkeleton variant='text' />
          </div>
        )}
        {!isLoading && (
          <form className='demoTest'>
            <div className='column'>
              <h4 className='title'>Incident Information</h4>
              <SFAutocomplete
                label='Place of Ocurrence'
                options={autoCompleteOptions}
                value={formData.placeOfOcurrence}
                onChange={(value: string): void =>
                  setFormData({ ...formData, placeOfOcurrence: value })
                }
              />
              <div className='grid-row'>
                <div className='column'>
                  <SFDatePicker
                    label='Incident Date'
                    name='date'
                    value={formData.date}
                    onChange={(value: string): void =>
                      setFormData({
                        ...formData,
                        date: value
                      })
                    }
                  />
                  <SFAutocompleteLocation
                    label='Street you were in'
                    value={formData.streetAdress}
                    onChange={(value: SFAutocompleteLocationResult): void =>
                      setFormData({
                        ...formData,
                        streetAdress: {
                          text: value.text
                        }
                      })
                    }
                  />
                </div>
                <div className='column'>
                  <SFNumericField
                    label='Incident #'
                    value={formData.incidentNumber}
                    onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                      setFormData({
                        ...formData,
                        incidentNumber: event.target.value
                      })
                    }
                  />
                  <SFTimeField
                    label='Time of Incident'
                    name='incidentTime'
                    placeholder='08:00 AM'
                    value={formData.incidentTime}
                    onChange={(value: string): void =>
                      setFormData({ ...formData, incidentTime: value })
                    }
                  />
                </div>
              </div>
              <SFTextField
                multiline
                label='Incident description'
                name='description'
                value={formData.description}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setFormData({ ...formData, description: event.target.value })
                }
              />
            </div>
            <div className='column'>
              <h4 className='title'>Additional Information</h4>
            </div>
            <div className='grid-row'>
              <div className='column'>
                <SFSwitch
                  label='Property Damage'
                  name='propertyDamage'
                  checked={formData.propertyDamage}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    setFormData({
                      ...formData,
                      propertyDamage: event.target.checked
                    })
                  }
                />
                <SFCheckbox
                  label='Officer Injured'
                  name='injured'
                  checked={formData.injured}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    setFormData({ ...formData, injured: event.target.checked })
                  }
                />
              </div>
              <SFRadioGroup
                row
                label='Witnessess'
                name='witnessess'
                value={formData.witnessess}
                options={radioGroupOptions}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setFormData({ ...formData, witnessess: event.target.value })
                }
              />
            </div>
            <SFChipsListField
              label='Incident Events'
              options={ChipsListOptions}
              items={formData.incidentEvents}
              onChange={(value: ChipFieldValueType[]): void =>
                setFormData({ ...formData, incidentEvents: value })
              }
            />
            <SFMultiSelect
              label='Incident Tests'
              value={formData.incidentTests}
              options={multiSelectOptions}
              onChange={(event): void =>
                setFormData({
                  ...formData,
                  incidentTests: event.target.value as string[]
                })
              }
            />
            <div className='column'>
              <h4 className='title'>Employees Assigned</h4>
              <SFTextField
                label='Police Department Name'
                name='police department'
                autoComplete='off'
                value={formData.policeDepartment}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setFormData({
                    ...formData,
                    policeDepartment: event.target.value
                  })
                }
              />
              <div className='grid-row'>
                <SFChipsListField
                  label='Officers Involved'
                  items={formData.officers}
                  onChange={(value: ChipFieldValueType[]): void =>
                    setFormData({ ...formData, officers: value })
                  }
                />

                <SFSelect
                  label='Supervisor'
                  name='supervisor'
                  options={selectOptions}
                  value={formData.supervisor}
                  onChange={(event): void =>
                    setFormData({
                      ...formData,
                      supervisor: event.target.value
                        ? (event.target.value as string)
                        : ''
                    })
                  }
                />
              </div>
            </div>
            <div className='send'>
              <SFButton
                variant='outlined'
                sfColor='grey'
                onClick={(): void => cleanOutput()}
              >
                Clear Input
              </SFButton>
              <SFButton
                variant='contained'
                sfColor='blue'
                onClick={(): void => {
                  handleFormResponse();
                  setOpenResponsePanel(true);
                }}
              >
                Send Information
              </SFButton>
            </div>
          </form>
        )}
      </div>
      <footer className='brand'>
        <span>Powered by</span>
        <br />
        <SFLink
          sfSize='medium'
          color='primary'
          href='https://smartforce.app'
          target='_blank'
        >
          SmartForce Technologies, Inc.
        </SFLink>
      </footer>
      {isSent && (
        <div className='loadingScreen'>
          <SFSpinner size='60px' />
        </div>
      )}
      <SFAlertDialog
        title='Form Output'
        PaperProps={{ className: 'demoResponse' }}
        maxWidth='sm'
        fullWidth
        open={openResponsePanel}
        content=''
        rightAction={{
          label: 'Close',
          buttonProps: {
            onClick: (): void => setOpenResponsePanel(false)
          }
        }}
      >
        {!isSent && (
          <div className='response'>
            <SFScrollable>
              <code>
                <pre>
                  {response && Object.keys(response).length === 0
                    ? ''
                    : JSON.stringify(response, null, 2)}
                </pre>
              </code>
            </SFScrollable>
          </div>
        )}
      </SFAlertDialog>
    </div>
  );
};

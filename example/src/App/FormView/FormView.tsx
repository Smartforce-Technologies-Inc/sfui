import React, { useState } from 'react';

import {
  SFButton,
  SFTextField,
  SFRadioGroup,
  SFRadioOptionsProps,
  SFCheckbox,
  SFSwitch,
  SFDatePicker,
  SFSelect,
  SFMenuOption,
  SFMultiSelect,
  SFAlert
} from 'sfui';

export const FormView = (): JSX.Element => {
  const [response, setResponse] = useState({});
  const [date, setDate] = useState(undefined);
  const initialData = {
    officer: '',
    gender: '',
    nightTime: false,
    onDuty: false,
    date: '',
    supervisor: '',
    witnesses: '',
    description: ''
  };
  const [formData, setFormData] = useState(initialData);
  const [openResponsePanel, setOpenResponsePanel] = useState(false);

  const radioOptions: SFRadioOptionsProps[] = [
    { value: 'male', label: 'Male', disabled: false },
    { value: 'female', label: 'Female', disabled: false },
    { value: 'others', label: 'Others', disabled: false }
  ];

  const selectOptions: SFMenuOption[] = [
    { value: 'from 0 to 10', label: 'few' },
    { value: 'from 10 to 50', label: 'some' },
    { value: 'more than 50', label: 'many' },
    { value: '0', label: 'none' }
  ];

  const multiSelectOptions: SFMenuOption[] = [
    { value: 'Henry McKane', label: 'McKane' },
    { value: 'Donald McDonald', label: 'McDonald' },
    { value: 'Andrew Snippets', label: 'Snippets' },
    { value: 'John Cenna', label: 'Cenna' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ): void => {
    if (e.target.name) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const cleanOutput = (): void => {
    setFormData(initialData);
  };

  const handleFormResponse = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    setResponse(formData);
  };

  return (
    <div className='demoItem'>
      <h4 className='demoTitle'>Form Demo</h4>
      <div className='demoBody'>
        <form className='demoTest' onSubmit={handleFormResponse}>
          <div className='row'>
            <SFSwitch
              label='Night Time'
              name='nightTime'
              onChange={handleInputChange}
            />
            <SFCheckbox
              label='On Duty'
              name='onDuty'
              onChange={handleInputChange}
            />
          </div>
          <SFTextField
            label='Officer'
            name='officer'
            onChange={handleInputChange}
          />
          <SFRadioGroup
            row
            label='Gender'
            name='gender'
            options={radioOptions}
            onChange={handleInputChange}
          />
          <SFDatePicker
            label='Ocurrence Date'
            name='date'
            onChange={(event): void => {
              setDate(event);
              setFormData({ ...formData, date: event });
            }}
            value={date}
          />
          <SFSelect
            options={selectOptions}
            label='Number of witnesses'
            name='witnesses'
            onChange={handleSelectChange}
          />
          <SFMultiSelect
            label='Supervisor'
            name='supervisor'
            options={multiSelectOptions}
            onChange={handleSelectChange}
          />
          <SFTextField
            multiline
            label='Incident description'
            name='description'
            onChange={handleInputChange}
          />
          <div className='send'>
            <SFButton
              type='submit'
              onClick={(): void => setOpenResponsePanel(true)}
            >
              Send
            </SFButton>
          </div>
        </form>
      </div>
      <SFAlert
        title='Form Output'
        className='demoResponse'
        open={openResponsePanel}
        content=''
        rightAction={{
          label: 'Close',
          buttonProps: {
            onClick: (): void => {
              cleanOutput();
              setOpenResponsePanel(false);
            }
          }
        }}
      >
        <code>
          <pre>
            {Object.keys(response).length === 0
              ? ''
              : JSON.stringify(response, null, 4)}
          </pre>
        </code>
      </SFAlert>
    </div>
  );
};

import React, { useState } from 'react';

import {
  SFButton,
  SFTextField,
  SFRadioGroup,
  SFRadioOptionsProps,
  SFPaper,
  SFCheckbox,
  SFSwitch,
  SFDatePicker,
  SFSelect,
  SFSelectOption,
  SFMultiSelect,
  SFMultiSelectOption
} from 'sfui';

export const FormView = (): JSX.Element => {
  const [response, setResponse] = useState({});
  const [date, setDate] = useState(undefined);
  const [formData, setFormData] = useState({
    officer: '',
    gender: '',
    nightTime: false,
    onDuty: false,
    date: '',
    supervisor: '',
    witnesses: '',
    description: ''
  });

  const radioOptions: SFRadioOptionsProps[] = [
    { value: 'male', label: 'Male', disabled: false },
    { value: 'female', label: 'Female', disabled: false },
    { value: 'others', label: 'Others', disabled: false }
  ];

  const selectOptions: SFSelectOption[] = [
    { value: 'from 0 to 10', label: 'few' },
    { value: 'from 10 to 50', label: 'some' },
    { value: 'more than 50', label: 'many' },
    { value: '0', label: 'none' }
  ];

  const multiSelectOptions: SFMultiSelectOption[] = [
    { value: 'Henry McKane', label: 'McKane' },
    { value: 'Donald McDonald', label: 'McDonald' },
    { value: 'Andrew Snippets', label: 'Snippets' },
    { value: 'John Cenna', label: 'Cenna' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    if (e.target.name) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleFormResponse = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResponse(formData);
  };

  return (
    <div className='demoItem'>
      <h4 className='demoTitle'>Form Demo</h4>
      <div className='demoBody'>
        <form className='demoTest' onSubmit={handleFormResponse}>
          <SFTextField
            label='Officer'
            name='officer'
            onChange={handleInputChange}
          />
          <SFRadioGroup
            label='Gender'
            name='gender'
            options={radioOptions}
            onChange={handleInputChange}
          />
          <SFSwitch
            label='Night'
            name='nightTime'
            onChange={handleInputChange}
          />
          <SFCheckbox
            label='On Duty'
            name='onDuty'
            onChange={handleInputChange}
          />
          <SFDatePicker
            label='Ocurrence Date'
            name='date'
            onChange={(event) => {
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
            <SFButton type='submit'>Send</SFButton>
          </div>
        </form>
      </div>
      <SFPaper className='demoResponse'>
        {Object.keys(response).length === 0 ? null : (
          <code>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </code>
        )}
      </SFPaper>
    </div>
  );
};

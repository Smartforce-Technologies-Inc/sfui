import React from 'react';

import { SFButtonsView } from '../ButtonsView/ButtonsView';
import { SFCheckboxesView } from '../CheckboxesView/CheckboxesView';
import { SFChipsView } from '../ChipView/ChipView';
import { SFDatePickerView } from '../DatePickerView/DatePickerView';
import { SFDialogsView } from '../DialogsView/DialogsView';
import { SFDrawersView } from '../DrawersView/DrawersView';
import { SFIconButtonView } from '../IconButtonView/IconButtonView';
import { SFLinksView } from '../LinksView/LinksView';
import { SFMultiSelectView } from '../MultiSelectView/MultiSelectView';
import { SFRadioView } from '../RadioView/RadioView';
import { SFRadioGroupView } from '../RadioGroupView/RadioGroupView';
import { SFSpinnerView } from '../SpinnerView/SpinnerView';
import { SFSplitButtonView } from '../SplitButtonView/SplitButtonView';
import { SFSelectView } from '../SelectView/SelectView';
import { SFSwitchesView } from '../SwitchesView/SwitchesView';
import { SFTextFieldsView } from '../TextFieldsView/TextFieldsView';
import { SFTextFieldsMultilineView } from '../TextFieldsMultilineView/TextFieldsMultilineView';
import { SFTableView } from '../TableView/TableView';

export const ComponentsPage = (): JSX.Element => {
  return (
    <div className='pagesLayout'>
      <div className='content'>
        <div className='section'>
          <h4 className='title'>Buttons</h4>
          <SFButtonsView />
        </div>
      </div>
      <div className='content'>
        <div className='section'>
          <h4 className='title'>Icon Button</h4>
          <SFIconButtonView />
        </div>
        <div className='section'>
          <h4 className='title'>Split Button</h4>
          <SFSplitButtonView />
        </div>
        <div className='section'>
          <h4 className='title'>Links</h4>
          <SFLinksView />
        </div>
        <div className='section'>
          <h4 className='title'>Progress Circular Indeterminate</h4>
          <SFSpinnerView />
        </div>
      </div>
      <div className='content'>
        <div className='section'>
          <h4 className='title'>Chips</h4>
          <SFChipsView />
        </div>
      </div>
      <div className='content'>
        <div className='section'>
          <h4 className='title'>Checkbox</h4>
          <SFCheckboxesView />
        </div>
        <div className='section'>
          <h4 className='title'>Radio Button</h4>
          <SFRadioView />
        </div>
        <div className='section'>
          <h4 className='title'>Radio Group Button</h4>
          <SFRadioGroupView />
        </div>
        <div className='section'>
          <h4 className='title'>Switch</h4>
          <SFSwitchesView />
        </div>
      </div>
      <div className='content'>
        <div className='section'>
          <h4 className='title'>Dialog and Drawer</h4>
          <div className='row content'>
            <SFDialogsView />
            <SFDrawersView />
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='section'>
          <h4 className='title'>Text Field</h4>
          <SFTextFieldsView />
        </div>
        <div className='section'>
          <h4 className='title'>Date Picker</h4>
          <SFDatePickerView />
        </div>
      </div>
      <div className='content'>
        <div className='section'>
          <h4 className='title'>Text Field Multiline</h4>
          <SFTextFieldsMultilineView />
        </div>
      </div>
      <div className='content'>
        <div className='section'>
          <h4 className='title'>Simple Select</h4>
          <SFSelectView />
        </div>
        <div className='section'>
          <h4 className='title'>Multiline Select</h4>
          <SFMultiSelectView />
        </div>
      </div>
      <div className='content'>
        <div className='section'>
          <h4>Tables</h4>
          <SFTableView />
        </div>
      </div>
    </div>
  );
};

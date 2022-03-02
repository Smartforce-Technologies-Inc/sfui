import React, { useState, useEffect } from 'react';

import { SFThemeProvider, createSFTheme, SFTheme } from '../SFTheme/SFTheme';

import { SFPaper } from '../Components/SFPaper/SFPaper';
import { SFSwitch } from '../Components/SFSwitch/SFSwitch';
import { SFLink } from '../Components/SFLink/SFLink';
import { useSFMediaQuery, SFStylesProvider } from '../SFUtils/SFUtils';
import ReactDOM from 'react-dom';

export interface StorybookWrapperProps {
  children: React.ReactNode;
  context: any;
}

const getMUILinkTemplate = (name: string): JSX.Element => {
  let muiName: string | undefined;
  switch (name) {
    case 'SFAlertCollapse':
      muiName = 'components/alert';
      break;
    case 'SFAlertDialog':
      muiName = 'api/dialog';
      break;
    case 'SFAutocompleteLocation':
      muiName = 'components/autocomplete';
      break;
    case 'SFDatePicker':
    case 'SFTimeField':
      muiName = 'components/pickers';
      break;
    case 'SFIconButton':
      muiName = 'api/icon-button';
      break;
    case 'SFMenuItem':
      muiName = 'api/menu-item';
      break;
    case 'SFMultiSelect':
      muiName = 'api/select';
      break;
    case 'SFRadioGroup':
      muiName = 'api/radio-group';
      break;
    case 'SFSpinner':
      muiName = 'api/circular-progress';
      break;
    case 'SFSplitButton':
      muiName = 'components/button';
      break;
    case 'SFNumericField':
    case 'SFTextField':
      muiName = 'api/text-field';
      break;
    case 'SFChipListField':
    case 'SFScrollable':
    case 'SFTextShadow':
      muiName = undefined;
      break;
    default:
      muiName = `api/${name.substring(2)}`;
  }

  return muiName ? (
    <div style={{ marginBottom: '40px' }}>
      <span style={{ fontSize: '16px', lineHeight: '24px' }}>
        For more information you can check the Mui v.4 documentation{' '}
      </span>
      <SFLink
        sfSize='medium'
        color='primary'
        href={`https://v4.mui.com/${muiName}/`}
        target='_blank'
      >
        {muiName}
      </SFLink>
    </div>
  ) : undefined;
};

const StorybookWrapper = ({
  children,
  context
}: StorybookWrapperProps): React.ReactElement<StorybookWrapperProps> => {
  const prefersDarkMode: boolean = useSFMediaQuery(
    '(prefers-color-scheme: dark)'
  );
  const [nightMode, setNightMode] = useState(prefersDarkMode);

  const theme: SFTheme = createSFTheme(nightMode ? 'night' : 'day');

  const toggleSwitch = (): void => {
    setNightMode(!nightMode);
  };

  useEffect(() => {
    const stories: Element = document
      .getElementsByClassName('docblock-argstable')
      .item(0);
    let apiLinkWrapper: HTMLElement = document.getElementById(
      'mui-api-link-wrapper'
    );
    if (
      context &&
      context.component &&
      context.component.displayName &&
      stories &&
      !apiLinkWrapper
    ) {
      apiLinkWrapper = document.createElement('div');
      apiLinkWrapper.setAttribute('id', 'mui-api-link-wrapper');
      stories.parentNode.append(apiLinkWrapper);
      ReactDOM.render(
        getMUILinkTemplate(context.component.displayName as string),
        apiLinkWrapper
      );
    }
  }, []);

  return (
    <SFThemeProvider theme={theme}>
      <SFStylesProvider injectFirst>
        <div
          id='sf-topbar'
          style={{
            backgroundColor: theme.palette.background.default
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '5px 1rem',
              borderBottom: `2px solid ${theme.palette.primary.main}`
            }}
          >
            <h2
              style={{
                display: 'inline-block',
                margin: '7px 0',
                color: theme.palette.text.primary
              }}
            >
              SFUI Library
            </h2>
            <SFSwitch checked={nightMode} onChange={toggleSwitch} />
          </div>
          <br />
        </div>
        <SFPaper
          id='sf-story-wrapper'
          style={{
            height: '100%',
            minHeight: 'calc(100vh - 106px)',
            padding: '1rem',
            backgroundColor: theme.palette.background.default
          }}
        >
          {children}
        </SFPaper>
      </SFStylesProvider>
    </SFThemeProvider>
  );
};

export default StorybookWrapper;

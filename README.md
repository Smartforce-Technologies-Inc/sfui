# sfui - The Smartforce UI Library

<!-- [![NPM](https://img.shields.io/npm/v/sfui.svg)](https://www.npmjs.com/package/sfui) -->

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save git+https://github.com/AdventosCorp/sfui.git
```

## Usage

```tsx
import React, { Component } from 'react';

import { SFButton } from 'sfui';

class Example extends Component {
  render() {
    return (
      <SFButton sfColor='blue' variant='outlined' size='small'>
        Click Me
      </SFButton>
    );
  }
}
```

### Story creation format

Each story must describe the component's functionality with all the controls needed to do so, if it is necessary, you can create more than one story to make the component's functionality as clear as possible.

As a convention, when writing the stories, You have to take into account the following conditions:

- All controls props must be ordered alphabetically on the docs in the storybook:

  To do this You must add the props `parameters: { controls: { sort: 'alpha' } }` into the story config.

  Example:

  ```tsx
  export default {
    title: 'Components/SFAlert',
    component: SFAlert,
    parameters: { controls: { sort: 'alpha' } },
    args: {},
    argTypes: {}
  };
  ```

- By default, all controls of type object into the story should be disabled on the table in order to avoid stories having errors for bad property usage:

  To do this You must add the props `table: { disable: true}` on argTypes prop into the story config.

  Example:

  ```tsx
  argTypes: {
    children: {
      table: {
        disable: true;
      }
    }
  }
  ```

- Functions/callbacks triggered by the component actions should be disabled on the table and add the action corresponding to its prop definition:

  This could be done by following storybook [action's guideline](https://storybook.js.org/docs/react/essentials/actions#action-args).

  In addition to the guideline, to avoid stories from stop working due to bad property assignment, you should add this to the prop:

  ```tsx
  prop: {
    control: {
      disabled: true;
    }
  }
  ```

- If a component property lack description, you must add it to the story:

  ```tsx
  prop: {
    description: 'Some text describing the prop functionality';
  }
  ```

### Full Story Example

```tsx
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Component } from './Component';

export default {
  title: 'Components/ComponentName',
  component: Component,
  parameters: { controls: { sort: 'alpha' } },
  args: { // Added arguments that need assignment for the purpose of the story,
    title: 'Example Title'
  }
  argTypes: {
    onClose: {
      description: 'Callback function when close action is triggered',
      table: {
        disable: true
      }
    },
    actionButton : {
      description: 'Some action button',
      control: {
        disabled: true
      }
    }
  }
} as Meta;

export const DefaultStory: Story =({title, ...args}) => {
  return <Component {...args} title={title}  />
}
```

Every time you add a new story, you should add the url of the base component's [MUI API](https://v4.mui.com/) to the StorybookWrapper component.

All needed information on how to create a story and other related matters, please follow [Storybook's Page](https://storybook.js.org/)

## Examples

You can try a demo deployed into github pages [here](https://adventoscorp.github.io/sfui/).

## Development tools

- We have based our react components library on [create-react-library](https://js.coach/package/create-react-library) project.
- We have based ours react components on [Material-UI](https://material-ui.com/) library. Also we have used:
  - [Material-UI Pickers](https://material-ui-pickers.dev/), using [Moment.js](https://momentjs.com/) to handle dates.
  - [Material Table](https://material-table.com/).
- We have added the svg icon library [icon54](https://icon54.com/) based on [icomoon](https://icomoon.io/) project.
- We have added [Storybook](https://storybook.js.org/) to test isolated components.
- We have added support for [TypeScript](https://www.typescriptlang.org/) language.
- We have added support for [Sass](https://sass-lang.com/) and [Css Modules](https://github.com/css-modules/css-modules)
- We have added [Github Actions](https://docs.github.com/en/free-pro-team@latest/actions) for CI.

## Development scripts

### Into the root folder

```bash
# runs the sfui library locally.
npm run start
```

```bash
# builds the sfui library locally.
npm run build
```

```bash
# runs the sfui library into the storybook environment.
npm run storybook
```

```bash
# deploys the example app into github pages.
npm run deploy
```

## License

MIT © [SmartForce Technologies, Inc.](https://github.com/AdventosCorp)

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

As a convention, when writing the stories, they have to meet the following conditions:

- It must have alphabetical order in all props displayed on the docs in storybook:

  This is added with the "parameters: { controls: { sort: 'alpha' } }" line of code.

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

- By default, all components in the story should have the object properties disabled on the table in order to avoid stories having errors for bad property usage:

  This is done by adding 'disable' prop to 'true' on argTypes table prop.

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

- Functions and/or callbacks fired by the component should be disabled for interaction on the table and add the action corresponding to it's prop definition:

  This could be done by following storybook [action's guideline](https://storybook.js.org/docs/react/essentials/actions#action-args).

  In addition to the guideline, to avoid stories from stop working due to bad property assignment, you should add this:

  ```tsx
    control: {
      disabled: true
    },
  ```

All needed information on how to create a story and other related matters, please follow [Storybook's Page](https://storybook.js.org/)

## Example app

You can try a demo app deployed into github pages [here](https://adventoscorp.github.io/sfui/).

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

### Into the example/ folder

```bash
# runs the example app locally.
npm run start
```

## License

MIT © [SmartForce Technologies, Inc.](https://github.com/AdventosCorp)

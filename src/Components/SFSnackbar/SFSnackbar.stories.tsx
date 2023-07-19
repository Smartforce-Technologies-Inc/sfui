import React from 'react';
import { SFSnackBar } from './SFSnackbar';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/SFSnackBar',
  component: SFSnackBar,
  parameters: {
    controls: {
      sort: 'alpha',
      exclude: ['ref']
    }
  },
  args: {
    open: false,
    message: 'Lorem ipsum dolor sit amet.',
    buttonText: 'Done'
  },
  argTypes: {
    buttonText: {
      description: 'The text to display in the button.',
      table: {
        defaultValue: {
          summary: ''
        }
      }
    },
    message: {
      description: 'The message to display.',
      table: {
        defaultValue: {
          summary: ''
        }
      }
    },
    transitionDuration: {
      description:
        'The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.',
      table: {
        type: {
          summary: 'number | { appear?: number, enter?: number, exit?: number }'
        },
        defaultValue: {
          summary:
            '{ enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen }'
        }
      },
      control: {
        disabled: true
      }
    },
    anchorOrigin: {
      description:
        'The anchor of the Snackbar. On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored.',
      table: {
        type: {
          summary:
            "anchorOrigin	{ horizontal: 'center' | 'left' | 'right', vertical: 'bottom' | 'top' }"
        },
        defaultValue: {
          summary: "{ horizontal: 'center', vertical: 'top' }"
        }
      },
      options: {
        topLeft: { horizontal: 'left', vertical: 'top' },
        topCenter: { horizontal: 'center', vertical: 'top' },
        topRight: { horizontal: 'right', vertical: 'top' },
        bottomLeft: { horizontal: 'left', vertical: 'bottom' },
        bottomCenter: { horizontal: 'center', vertical: 'bottom' },
        bottomRight: { horizontal: 'right', vertical: 'bottom' }
      },
      control: {
        type: 'select',
        labels: {
          topLeft: 'Top Left',
          topCenter: 'Top Center',
          topRight: 'Top Right',
          bottomLeft: 'Bottom Left',
          bottomCenter: 'Bottom Center',
          bottomRight: 'Bottom'
        }
      }
    },
    autoHideDuration: {
      description:
        'The number of milliseconds to wait before automatically calling the onClose function. onClose should then set the state of the open prop to hide the Snackbar. This behavior is disabled by default with the null value.',
      control: {
        type: 'number'
      },
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 'null'
        }
      }
    },
    open: {
      description: 'If true, tooltip will be open.',
      control: {
        type: 'boolean'
      },
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    onClick: {
      action: 'onClick',
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof SFSnackBar>;

export const Default: ComponentStory<typeof SFSnackBar> = (args) => {
  return <SFSnackBar {...args} />;
};

export const AutoHide: ComponentStory<typeof SFSnackBar> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(
    args.open ? args.open : true
  );

  React.useEffect(() => {
    args.open && setIsOpen(args.open === true);
  }, [args.open]);

  return (
    <SFSnackBar
      {...args}
      open={isOpen}
      onClose={(): void => setIsOpen(false)}
    />
  );
};

AutoHide.args = {
  autoHideDuration: 3600
};

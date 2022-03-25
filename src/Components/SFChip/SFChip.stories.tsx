import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFChip, SFChipProps } from './SFChip';

export default {
  title: 'Components/SFChip',
  component: SFChip,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    label: 'Bagel'
  },
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    deleteable: {
      description:
        'If true, the chip shows the delete icon and the chip could be deleted.'
    },
    fullWidth: {
      description:
        'If true, the component will take up the full width of its container.'
    },
    hasError: {
      description: 'If true, the chip should be displayed in a error state.'
    },
    variant: {
      table: { disable: true }
    },
    disabled: {
      table: { disable: true }
    },
    avatar: {
      table: {
        disable: true
      }
    },
    clickable: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    deleteIcon: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    onDelete: {
      action: 'onDelete',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFChipProps> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px 15px',
        flexWrap: 'wrap'
      }}
    >
      <SFChip {...args} />
    </div>
  );
};

export const Default = Template.bind({});

export const AllTogether: Story<SFChipProps> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px 15px',
        flexWrap: 'wrap'
      }}
    >
      <SFChip {...args} />
      <SFChip {...args} variant='outlined' />
      <SFChip {...args} size='medium' />
      <SFChip {...args} size='medium' variant='outlined' />
      <SFChip {...args} deleteable />
      <SFChip {...args} deleteable variant='outlined' />
      <SFChip {...args} deleteable size='medium' />
      <SFChip {...args} deleteable size='medium' variant='outlined' />
    </div>
  );
};

AllTogether.argTypes = {
  deleteable: {
    table: {
      disable: true
    }
  },
  size: {
    table: {
      disable: true
    }
  },
  variant: {
    table: {
      disable: true
    }
  }
};

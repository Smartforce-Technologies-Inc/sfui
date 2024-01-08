import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SFChip, SFChipProps } from './SFChip';

export default {
  title: 'Components/SFChip',
  component: SFChip,
  parameters: {
    controls: {
      sort: 'alpha',
      include: [
        'label',
        'deleteable',
        'disabled',
        'clickable',
        'fullWidth',
        'sfColor',
        'size',
        'hasError',
        'variant',
        'onDelete'
      ]
    }
  },
  args: {
    clickable: false,
    deleteable: false,
    disabled: false,
    fullWidth: false,
    hasError: false,
    sfColor: 'primary',
    size: 'small',
    label: 'Bagel',
    variant: 'filled'
  },
  argTypes: {
    label: {
      description: 'The label asociated to the input value meaning.',
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
    onDelete: {
      action: 'onDelete',
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof SFChip>;

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

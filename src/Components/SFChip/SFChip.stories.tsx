import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFChip, SFChipProps } from './SFChip';

export default {
  title: 'Components/SFChip',
  component: SFChip,
  args: {
    label: 'Bagel'
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    avatar: {
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
      <SFChip {...args} onDelete={undefined} />
      <SFChip {...args} onDelete={undefined} variant='outlined' />
      <SFChip {...args} onDelete={undefined} sfSize='medium' />
      <SFChip
        {...args}
        onDelete={undefined}
        sfSize='medium'
        variant='outlined'
      />
      <SFChip {...args} />
      <SFChip {...args} variant='outlined' />
      <SFChip {...args} sfSize='medium' />
      <SFChip {...args} sfSize='medium' variant='outlined' />
    </div>
  );
};

AllTogether.argTypes = {
  size: {
    table: {
      disable: true
    }
  },
  avatar: {
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
  sfSize: {
    table: {
      disable: true
    }
  },
  clickable: {
    table: {
      disable: true
    }
  },
  variant: {
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
};

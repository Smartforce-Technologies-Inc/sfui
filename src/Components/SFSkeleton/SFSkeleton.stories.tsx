import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFSkeleton, SFSkeletonProps } from './SFSkeleton';

export default {
  title: 'Components/SFSkeleton',
  component: SFSkeleton,
  parameters: { controls: { sort: 'alpha' } },
  args: {
    height: 20,
    width: 300,
    animation: 'pulse'
  },
  argTypes: {
    animation: {
      description: 'The animation. If false the animation effect is disabled.',
      table: {
        defaultValue: {
          summary: 'pulse'
        }
      }
    },
    height: {
      description: `Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card.`,
      control: {
        type: 'number'
      }
    },
    width: {
      description: `Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.`,
      control: {
        type: 'number'
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Text: Story<SFSkeletonProps> = (args) => {
  return <SFSkeleton {...args} variant='text' />;
};

Text.argTypes = {
  animation: {
    options: ['false', 'pulse', 'wave'],
    control: {
      type: 'radio'
    }
  },
  variant: {
    table: {
      disable: true
    }
  }
};

export const Circle: Story<SFSkeletonProps> = (args) => {
  return <SFSkeleton {...args} variant='circle' width={args.height} />;
};

Circle.args = {
  height: 50
};
Circle.argTypes = {
  animation: {
    options: ['false', 'pulse', 'wave'],
    control: {
      type: 'radio'
    }
  },
  variant: {
    table: {
      disable: true
    }
  },
  width: {
    table: {
      disable: true
    }
  }
};

Circle.args = {
  height: 30
};

export const Rect: Story<SFSkeletonProps> = (args) => {
  return <SFSkeleton {...args} variant='rect' />;
};

Rect.args = {
  height: 50
};
Rect.argTypes = {
  animation: {
    options: ['false', 'pulse', 'wave'],
    control: {
      type: 'radio'
    }
  },
  variant: {
    table: {
      disable: true
    }
  }
};

Rect.args = {
  height: 50
};

export const AllTogether: Story = ({ animation }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '50px 1fr',
          gap: 10
        }}
      >
        <SFSkeleton variant='circle' height={50} animation={animation} />
        <SFSkeleton variant='rect' height={50} animation={animation} />
      </div>

      <SFSkeleton variant='text' animation={animation} />
      <SFSkeleton variant='text' animation={animation} />
      <SFSkeleton variant='text' animation={animation} />
    </div>
  );
};

AllTogether.argTypes = {
  animation: {
    options: ['false', 'pulse', 'wave'],
    control: {
      type: 'radio'
    }
  },
  variant: {
    table: {
      disable: true
    }
  },
  height: {
    table: {
      disable: true
    }
  },
  width: {
    table: {
      disable: true
    }
  }
};

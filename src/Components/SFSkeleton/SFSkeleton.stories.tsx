import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFSkeleton, SFSkeletonProps } from './SFSkeleton';

export default {
  title: 'Components/SFSkeleton',
  component: SFSkeleton,
  args: {
    height: 20,
    width: 300,
    animation: 'pulse'
  },
  argTypes: {
    height: {
      control: {
        type: 'number'
      }
    },
    width: {
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
    control: {
      type: 'radio',
      options: ['false', 'pulse', 'wave']
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
    control: {
      type: 'radio',
      options: ['false', 'pulse', 'wave']
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

export const Rect: Story<SFSkeletonProps> = (args) => {
  return <SFSkeleton {...args} variant='rect' />;
};

Rect.args = {
  height: 50
};
Rect.argTypes = {
  animation: {
    control: {
      type: 'radio',
      options: ['false', 'pulse', 'wave']
    }
  },
  variant: {
    table: {
      disable: true
    }
  }
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
    control: {
      type: 'radio',
      options: ['false', 'pulse', 'wave']
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

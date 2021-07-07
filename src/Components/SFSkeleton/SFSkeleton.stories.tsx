import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFSkeleton, SFSkeletonProps } from './SFSkeleton';

export default {
  title: 'Components/SFSkeleton',
  component: SFSkeleton,
  argTypes: {
    height: {
      defaultValue: 20,
      control: {
        type: 'number'
      }
    },
    width: {
      defaultValue: 300,
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

export const Default: Story<SFSkeletonProps> = (args) => {
  return <SFSkeleton {...args} />;
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
    defaultValue: 'pulse',
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

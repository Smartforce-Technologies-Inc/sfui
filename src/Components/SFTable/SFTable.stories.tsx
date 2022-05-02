import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFTable, SFTableProps, SFTableColumn, SFTableRow } from './SFTable';

const getColumns = (): SFTableColumn[] => {
  return [
    { title: 'Head title one', field: 'one' },
    { title: 'Head title two', field: 'two' },
    { title: 'Head title three', field: 'three' },
    { title: 'Head title four', field: 'four' },
    { title: 'Head title five', field: 'five' },
    { title: 'Head title six', field: 'six' }
  ];
};

const getRows = (): SFTableRow[] => {
  return [
    {
      id: 1,
      one: 'Body row one',
      two: 'Body row one',
      three: 'Body row one',
      four: 'Body row one',
      five: 'Body row one',
      six: 'Body row one'
    },
    {
      id: 2,
      one: 'Body row two',
      two: 'Body row two',
      three: 'Body row two',
      four: 'Body row two',
      five: 'Body row two',
      six: 'Body row two'
    },
    {
      id: 3,
      one: 'Body row three',
      two: 'Body row three',
      three: 'Body row three',
      four: 'Body row three',
      five: 'Body row three',
      six: 'Body row three'
    },
    {
      id: 4,
      one: 'Body row four',
      two: 'Body row four',
      three: 'Body row four',
      four: 'Body row four',
      five: 'Body row four',
      six: 'Body row four'
    },
    {
      id: 5,
      one: 'Body row five',
      two: 'Body row five',
      three: 'Body row five',
      four: 'Body row five',
      five: 'Body row five',
      six: 'Body row five'
    },
    {
      id: 6,
      one: 'Body row six',
      two: 'Body row six',
      three: 'Body row six',
      four: 'Body row six',
      five: 'Body row six',
      six: 'Body row six'
    }
  ];
};

export default {
  title: 'Components/SFTable',
  component: SFTable,
  parameters: {
    controls: {
      sort: 'alpha',
      include: ['stickyHeader', 'selection', 'size', 'elevation']
    }
  },
  args: {
    rows: getRows(),
    columns: getColumns(),
    selection: false,
    stickyHeader: false,
    selectedRows: []
  },
  argTypes: {
    elevation: {
      description: 'The elevation of the table.'
    },
    selection: {
      description: 'If true, the table rows can be selected.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    stickyHeader: {
      description: 'If true, the header becomes sticky',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    }
  }
} as Meta;

const Template: Story<SFTableProps> = (args) => <SFTable {...args} />;

export const Default = Template.bind({});

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFTable, SFTableProps, SFTableColumn, RowData } from './SFTable';

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

const getRows = (): RowData[] => {
  return [
    {
      one: 'Body row one',
      two: 'Body row one',
      three: 'Body row one',
      four: 'Body row one',
      five: 'Body row one',
      six: 'Body row one'
    },
    {
      one: 'Body row two',
      two: 'Body row two',
      three: 'Body row two',
      four: 'Body row two',
      five: 'Body row two',
      six: 'Body row two'
    },
    {
      one: 'Body row three',
      two: 'Body row three',
      three: 'Body row three',
      four: 'Body row three',
      five: 'Body row three',
      six: 'Body row three'
    },
    {
      one: 'Body row four',
      two: 'Body row four',
      three: 'Body row four',
      four: 'Body row four',
      five: 'Body row four',
      six: 'Body row four'
    },
    {
      one: 'Body row five',
      two: 'Body row five',
      three: 'Body row five',
      four: 'Body row five',
      five: 'Body row five',
      six: 'Body row five'
    },
    {
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
  args: {
    columns: getColumns()
  },
  argTypes: {
    columns: {
      table: {
        disable: true
      }
    },
    options: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFTableProps> = (args) => (
  <SFTable {...args} data={getRows()} />
);

interface StoryWithKnobs {
  sorting: boolean;
  search: boolean;
  toolbar: boolean;
  selection: boolean;
  paging: boolean;
  draggable: boolean;
  showTitle: boolean;
  title: string;
  maxBodyHeight: number | string;
  columns: SFTableColumn[];
  elevation: number;
}

export const Default: Story<StoryWithKnobs> = ({
  sorting = false,
  search = false,
  toolbar = false,
  selection = false,
  paging = false,
  draggable = false,
  showTitle = false,
  title = '',
  maxBodyHeight,
  columns,
  elevation
}): JSX.Element => {
  return (
    <SFTable
      title={title}
      options={{
        sorting,
        search,
        toolbar,
        showTitle,
        paging,
        draggable,
        selection,
        maxBodyHeight
      }}
      data={getRows()}
      columns={columns}
      elevation={elevation}
    />
  );
};

Default.argTypes = {
  sorting: {
    control: {
      type: 'boolean'
    }
  },
  search: {
    control: {
      type: 'boolean'
    }
  },
  toolbar: {
    control: {
      type: 'boolean'
    }
  },
  selection: {
    control: {
      type: 'boolean'
    }
  },
  paging: {
    control: {
      type: 'boolean'
    }
  },
  draggable: {
    control: {
      type: 'boolean'
    }
  },
  showTitle: {
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  title: {
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  maxBodyHeight: {
    control: {
      type: 'number',
      min: 100,
      step: 50
    }
  }
};

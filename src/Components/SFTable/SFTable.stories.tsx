import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SFTable, SFTableProps, SFTableColumn } from './SFTable';

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

const getRows = () => {
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
    columns: getColumns(),
    data: getRows()
  },
  argTypes: {
    columns: {
      table: {
        disable: true
      }
    },
    data: {
      table: {
        disable: true
      }
    },
    options: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SFTableProps> = (args) => <SFTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: {
    toolbar: false,
    paging: false,
    sorting: false,
    search: false,
    draggable: false,
    selection: false
  }
};

export const Selection = Template.bind({});
Selection.args = {
  options: {
    toolbar: false,
    paging: false,
    sorting: false,
    search: false,
    draggable: false,
    selection: true
  }
};

export const Sorting = Template.bind({});
Sorting.args = {
  options: {
    toolbar: false,
    paging: false,
    sorting: true,
    search: false,
    draggable: false,
    selection: false
  }
};

export const Pagination = Template.bind({});
Pagination.args = {
  options: {
    toolbar: false,
    paging: true,
    sorting: false,
    search: false,
    draggable: false,
    selection: false
  }
};

export const StickyHeader = Template.bind({});
StickyHeader.args = {
  options: {
    maxBodyHeight: '20vh',
    toolbar: false,
    paging: false,
    sorting: false,
    search: false,
    draggable: false,
    selection: false
  }
};

export const Export = Template.bind({});
Export.args = {
  options: {
    exportButton: true,
    toolbar: true,
    showTitle: false,
    paging: false,
    sorting: false,
    search: false,
    draggable: false,
    selection: false
  }
};

export const Filtering = Template.bind({});
Filtering.args = {
  options: {
    toolbar: false,
    showTitle: false,
    paging: false,
    sorting: false,
    search: false,
    draggable: false,
    selection: false,
    filtering: true
  }
};

export const Search = Template.bind({});
Search.args = {
  options: {
    search: true,
    toolbar: true,
    showTitle: false,
    paging: false,
    sorting: false,
    draggable: false,
    selection: false
  }
};

export const Actions = Template.bind({});
Actions.args = {
  options: {
    search: false,
    toolbar: false,
    showTitle: false,
    paging: false,
    sorting: false,
    draggable: false,
    selection: false
  },
  actions: [
    {
      icon: 'save',
      tooltip: 'Action one'
    },
    {
      icon: 'save',
      tooltip: 'Action two'
    }
  ]
};

export const WithKnobs = ({
  sorting,
  search,
  toolbar,
  selection,
  paging,
  showTitle = false,
  title = '',
  maxBodyHeight,
  ...args
}) => {
  return (
    <SFTable
      title={title}
      options={{
        sorting,
        search,
        toolbar,
        showTitle,
        paging,
        selection,
        maxBodyHeight,
        draggable: false
      }}
      {...args}
    />
  );
};

WithKnobs.argTypes = {
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

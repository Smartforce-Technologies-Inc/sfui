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
  parameters: { controls: { sort: 'alpha' } },
  args: {
    columns: getColumns(),
    showTitle: false,
    title: ''
  },
  argTypes: {
    showTitle: {
      description:
        'If true, the title of the table is shown. This will be shown if toolbar is enabled.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    elevation: {
      description: 'The elevation of the table.'
    },
    draggable: {
      description: 'If true, the table can be dragged.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    paging: {
      description: 'If true, the table content is paginated.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    search: {
      description:
        'If true, the table searchbar is enabled. This will be shown if toolbar is enabled.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
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
    sorting: {
      description: 'If true, the table columns can sort the content.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    toolbar: {
      description: 'If true, the toolbar is shown.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    maxBodyHeight: {
      description: 'The maximum height of the body of the table.',
      table: {
        type: {
          summary: 'number | string'
        }
      }
    },
    title: {
      description: 'The title of the table to display.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
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
    control: {
      type: 'boolean'
    }
  },
  title: {
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

Default.args = {
  showTitle: false,
  title: ''
};

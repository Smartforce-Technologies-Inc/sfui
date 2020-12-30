import React from 'react';

import { SFTable, SFTableColumn, RowData } from 'sfui';

const SFTableView = () => {
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

  return (
    <div className='tables'>
      <div className='row'>
        <SFTable
          options={{
            toolbar: false,
            paging: false,
            sorting: false,
            search: false,
            draggable: false,
            selection: false
          }}
          columns={getColumns()}
          data={getRows()}
        />
        <SFTable
          options={{
            search: true,
            toolbar: true,
            showTitle: false,
            paging: false,
            sorting: false,
            draggable: false,
            selection: false
          }}
          columns={getColumns()}
          data={getRows()}
        />
      </div>
      <div className='row'>
        <SFTable
          options={{
            toolbar: false,
            paging: false,
            sorting: false,
            search: false,
            draggable: false,
            selection: true
          }}
          columns={getColumns()}
          data={getRows()}
        />
        <SFTable
          options={{
            toolbar: false,
            paging: true,
            sorting: false,
            search: false,
            draggable: false,
            selection: false
          }}
          columns={getColumns()}
          data={getRows()}
        />
      </div>
    </div>
  );
};

export { SFTableView };

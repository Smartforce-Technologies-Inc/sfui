import React from 'react';
import {
  withStyles,
  Theme,
  makeStyles,
  createStyles,
  useTheme
} from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import MaterialTable, {
  MTableBodyRow,
  MaterialTableProps,
  Column,
  Options
} from 'material-table';
import { SFBlue, SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../helpers';

const StyledRow = withStyles((theme: Theme) => ({
  root: {
    '&:hover': {
      backgroundColor:
        theme.palette.type === 'light'
          ? hexToRgba(SFGrey[200], 0.3)
          : hexToRgba(SFGrey[500], 0.3)
    }
  }
}))(MTableBodyRow);

const StyledContainer = withStyles({
  root: {
    padding: '24px 24px 34px 24px',
    width: 'auto',
    '& th:not(.MuiTableCell-paddingNone)': {
      padding: 20
    }
  }
})(Paper);

const useSelectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: `${theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400]}`
    },
    colorSecondary: {
      '&.Mui-checked': {
        color: `${theme.palette.type === 'light' ? SFBlue[500] : SFBlue[200]}`
      },
      '&:hover': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey[200], 0.3)
            : hexToRgba(SFGrey[500], 0.3)
      },
      '&:active': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFGrey[200], 0.5)
            : hexToRgba(SFGrey[500], 0.2)
      },
      '&.Mui-checked:hover': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFBlue[100], 0.4)
            : hexToRgba(SFBlue[200], 0.2)
      },
      '&.Mui-checked:active': {
        backgroundColor:
          theme.palette.type === 'light'
            ? hexToRgba(SFBlue[100], 0.6)
            : hexToRgba(SFBlue[200], 0.1)
      },
      '&.Mui-disabled': {
        color: `${theme.palette.type === 'light' ? SFGrey[200] : SFGrey[700]}`
      }
    }
  })
);

export interface RowData {}
export interface SFTableColumn extends Column<RowData> {}
export interface SFTableOptions extends Options<RowData> {}
export interface SFTableProps extends MaterialTableProps<RowData> {
  columns: SFTableColumn[];
  options: SFTableOptions;
}

export const SFTable = ({
  columns,
  options,
  ...props
}: SFTableProps): React.ReactElement<SFTableProps> => {
  const theme = useTheme();
  const selectionClasses = useSelectionStyles(props);

  const columnsWithStyles: SFTableColumn[] = columns.map(
    (column: SFTableColumn) => {
      return {
        ...column,
        cellStyle: {
          padding: 20,
          borderBottom: `1px solid  ${
            theme.palette.type === 'light' ? SFGrey[100] : SFGrey[700]
          }`,
          color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
          fontWeight: 400,
          fontSize: 14
        }
      };
    }
  );

  const optionsWithStyles: SFTableOptions = {
    ...options,
    headerStyle: {
      borderBottom: `2px solid  ${
        theme.palette.type === 'light' ? SFGrey[100] : SFGrey[700]
      }`,
      fontWeight: 600,
      color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
      fontSize: 14
    },
    rowStyle: (rowData): React.CSSProperties => {
      if (rowData.tableData.checked) {
        return {
          backgroundColor:
            theme.palette.type === 'light'
              ? hexToRgba(SFGrey[200], 0.5)
              : hexToRgba(SFGrey[500], 0.2)
        };
      }
      return {};
    },
    selectionProps: {
      classes: selectionClasses
    },
    headerSelectionProps: {
      classes: selectionClasses,
      indeterminate: false
    }
  };

  return (
    <MaterialTable
      {...props}
      columns={columnsWithStyles}
      options={optionsWithStyles}
      components={{
        Container: (props): JSX.Element => <StyledContainer {...props} />,
        Row: (props): JSX.Element => <StyledRow {...props} />
      }}
    />
  );
};

import React, { forwardRef } from 'react';
import {
  withStyles,
  Theme,
  makeStyles,
  createStyles,
  useTheme
} from '@material-ui/core/styles';
import { Paper, CheckboxProps } from '@material-ui/core';
import MaterialTable, {
  MTableBodyRow,
  MaterialTableProps,
  Column,
  Options,
  Icons
} from 'material-table';
import { SFBlue, SFGrey } from '../../SFColors/SFColors';
import { SFIcon } from '../SFIcon/SFIcon';
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

const tableIcons: Icons = {
  Export: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SFIcon icon='Download' {...props} ref={ref} />
  )),
  Filter: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SFIcon icon='Adjustments' {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SFIcon icon='Up-7' {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SFIcon icon='Left-2' {...props} ref={ref} />
  )),
  LastPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SFIcon icon='Right-2' {...props} ref={ref} />
  )),
  NextPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SFIcon icon='Right-7' {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SFIcon icon='Left-7' {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SFIcon icon='Close' {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SFIcon icon='Search' {...props} ref={ref} />
  ))
};

interface RowTableData {
  id: number;
  checked: boolean;
}

export type RowData = {
  [key: string]: number | string | boolean | undefined;
} & { tableData?: RowTableData };

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

  const iconCheckedColor: string = theme.palette.primary.main;
  const iconUncheckedColor: string =
    theme.palette.type === 'light' ? SFGrey[600] : SFGrey[400];

  const selectionProps: CheckboxProps = {
    classes: useSelectionStyles(props),
    checkedIcon: (
      <SFIcon icon='Checkbox-Selected' size={42} color={iconCheckedColor} />
    ),
    icon: (
      <SFIcon icon='Checkbox-Unselected' size={42} color={iconUncheckedColor} />
    )
  };

  const customColumns: SFTableColumn[] = columns.map(
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

  const customOptions: SFTableOptions = {
    ...options,
    headerStyle: {
      borderBottom: `2px solid  ${
        theme.palette.type === 'light' ? SFGrey[100] : SFGrey[700]
      }`,
      fontWeight: 600,
      color: `${theme.palette.type === 'light' ? SFGrey[900] : SFGrey[50]}`,
      fontSize: 14
    },
    rowStyle: (rowData: RowData): React.CSSProperties => {
      if (rowData?.tableData?.checked) {
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
      ...selectionProps
    },
    headerSelectionProps: {
      indeterminate: false,
      ...selectionProps
    }
  };

  return (
    <MaterialTable
      {...props}
      icons={tableIcons}
      columns={customColumns}
      options={customOptions}
      components={{
        // eslint-disable-next-line
        Container: (props: any): JSX.Element => <StyledContainer {...props} />,
        // eslint-disable-next-line
        Row: (props: any): JSX.Element => <StyledRow {...props} />
      }}
    />
  );
};
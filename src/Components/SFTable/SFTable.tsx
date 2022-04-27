import React from 'react';
import {
  styled,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableProps
} from '@mui/material';
import { SFGrey } from '../../SFColors/SFColors';
import { hexToRgba } from '../../Helpers';
import { SFPaper } from '../SFPaper/SFPaper';
import { SFCheckbox } from '../SFCheckbox/SFCheckbox';

const StyledPaper = styled(SFPaper)({
  padding: 24
});

const StyledHeadTableRow = styled(TableRow)(({ theme }) => ({
  '&.MuiTableRow-head': {
    '& .MuiTableCell-root': {
      color: theme.palette.mode === 'light' ? SFGrey[600] : SFGrey[400],
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      borderBottom: `2px solid ${
        theme.palette.mode === 'light' ? SFGrey[100] : SFGrey[700]
      }`
    }
  }
}));

const StyledBodyTableRow = styled(TableRow)(({ theme }) => ({
  '& .MuiTableCell-root': {
    fontSize: '14px',
    lineHeight: '20px',
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? SFGrey[100] : SFGrey[700]
    }`
  },
  '&:last-child': {
    '& .MuiTableCell-root': {
      border: 0
    }
  },
  '&.Mui-selected': {
    backgroundColor: `${
      theme.palette.mode === 'light'
        ? hexToRgba(SFGrey[200], 0.5)
        : hexToRgba(SFGrey[500], 0.5)
    } !important`
  },
  '&:hover': {
    '@media (hover: hover)': {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? hexToRgba(SFGrey[200], 0.3)
          : hexToRgba(SFGrey[500], 0.3)
      } !important`
    }
  }
}));

const StyledTableCell = styled(TableCell)({
  padding: 20
});

export interface SFTableColumn {
  field: string;
  title: string;
}

export interface SFTableRow {
  [key: string]: string | number | undefined;
  id?: number;
}

export interface SFTableProps extends TableProps {
  className?: string;
  elevation?: number;
  columns: SFTableColumn[];
  rows: SFTableRow[];
  selection?: boolean;
  selectedRows?: number[];
  onSelectRow?: (row: SFTableRow) => void;
  onSelectAll?: (checked: boolean) => void;
}

export const SFTable = ({
  className = '',
  elevation = 2,
  columns,
  rows,
  selection = false,
  selectedRows = [],
  onSelectRow,
  ...props
}: SFTableProps): React.ReactElement<SFTableProps> => {
  const onSelectAll = (
    _e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ): void => props.onSelectAll && props.onSelectAll(checked);

  const isSelected = (id: number): boolean => selectedRows.indexOf(id) !== -1;

  return (
    <StyledPaper elevation={elevation}>
      <Table {...props}>
        <TableHead>
          <StyledHeadTableRow>
            {selection && (
              <TableCell style={{ padding: '0 10px 10px 10px' }}>
                <SFCheckbox
                  checked={rows.length === selectedRows.length}
                  onChange={onSelectAll}
                />
              </TableCell>
            )}

            {columns.map((column: SFTableColumn) => (
              <StyledTableCell key={`col-${column.field}`} component='th'>
                {column.title}
              </StyledTableCell>
            ))}
          </StyledHeadTableRow>
        </TableHead>

        <TableBody>
          {rows.map((row: SFTableRow, rowIndex: number) => (
            <StyledBodyTableRow
              key={`table-row-${rowIndex}`}
              selected={row.id !== undefined && isSelected(row.id)}
            >
              {selection && (
                <TableCell style={{ padding: '0 10px 10px 10px' }}>
                  <SFCheckbox
                    checked={row.id !== undefined && isSelected(row.id)}
                    onChange={(): void => onSelectRow && onSelectRow(row)}
                  />
                </TableCell>
              )}

              {columns.map((column: SFTableColumn) => (
                <StyledTableCell key={`table-row-${rowIndex}-${column.field}`}>
                  {row[column.field]}
                </StyledTableCell>
              ))}
            </StyledBodyTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledPaper>
  );
};

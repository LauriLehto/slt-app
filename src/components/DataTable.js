import {useState} from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';

import TablePaginationActions from './TablePaginationActions';

export default function DataTable(props) {
  const { data } = props
  const tableHeaders = data[0]
  const tableData = data.slice(1)

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Table 
        sx={{ maxWidth: 650 }} 
        aria-label="simple table"
        //pageSize={5}
        //rowsPerPageOptions={[5]}
        >
        <TableHead>
          <TableRow>
            {tableHeaders.map(th => <TableCell key={th}>{th.toUpperCase()}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : tableData
          ).map((row) => (
            <TableRow
              key={row.toString()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row.map(tc=> <TableCell key={tc}>{tc}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={tableData.length}
              rowsPerPage={20}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}


DataTable.propTypes = {
  data: PropTypes.array.isRequired
};
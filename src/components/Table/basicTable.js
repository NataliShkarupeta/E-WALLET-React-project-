import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ColorBox, tableStyle, rowStyle, cellStyle, cellColorStyle} from './Table.styled';
import { formatNumber } from 'utils/serviceFunctions';
import PropTypes from 'prop-types';

export const BasicTable = ({tableData}) => {

  return (
    <TableContainer component={Paper} style={tableStyle}>
      <Table sx={{ maxWidth: 650, border: 0 }} >
        <TableBody >
          {tableData.map(({name, total, color}) => (
            <TableRow style={rowStyle}
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={cellColorStyle}>
                <ColorBox backgroundColor={color}></ColorBox>
              </TableCell>
              <TableCell style={cellStyle} align="left">{name}</TableCell>
              <TableCell style={cellStyle} align="right">{formatNumber(total)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

BasicTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })),
};
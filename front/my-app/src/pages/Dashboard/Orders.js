import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2023',
    'Elvis Presley',
    '103',
    'Juan Lopez',
    5659865324,
  ),
  createData(
    1,
    '16 Mar, 2023',
    'Paul McCartney',
    '204',
    'Susana Horia',
    554395326,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', '256', 'Armando Hoyos', 568746634),
  createData(
    3,
    '16 Mar, 2023',
    'Michael Jackson',
    '186',
    'Alma Madero',
    558965426,
  ),
  createData(
    4,
    '15 Mar, 2023',
    'Bruce Springsteen',
    '122',
    'Elvi Olado',
    5546923654,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Ultimos conductores registrados</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>No. Economico</TableCell>
            <TableCell>Propietario de unidad</TableCell>
            <TableCell align="right">Telefono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </React.Fragment>
  );
}
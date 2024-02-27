import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

function createData(
  sku: string,
  name: string,
  Tpag: number,
  FPed: string,
  Estatus: string,
) {
  return { sku, name, Tpag, FPed, Estatus };
}

const rows = [
  createData('FD034', 'Arreglo Rosas', 360, '15/01/2024', 'Preparando'),
  createData('FD035', 'Arreglo Rosas', 360, '15/01/2024', 'Enviado'),
  createData('FD036', 'Arreglo Rosas', 360, '15/01/2024', 'En camino'),
  createData('FD036', 'Arreglo Rosas', 360, '15/01/2024', 'Entregado'),
];

export default function EstatusEnvio() {
  return (
    <Grid container>
        <Grid item xs={6}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>SKU</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Total Pagado</TableCell>
                        <TableCell align="right">Fecha Pedido</TableCell>
                        <TableCell align="right">Estatus</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.sku}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.Tpag}</TableCell>
                        <TableCell align="right">{row.FPed}</TableCell>
                        <TableCell align="right">{row.Estatus}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
  );
}
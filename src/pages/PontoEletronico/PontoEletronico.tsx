import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography } from '@mui/material';
import AppLayout from '../../components/AppLayout/AppLayout';

// Dados simulados
const data = [
  { date: '01/11/2024', jornada: 8, chegada: '08:00', inicioIntervalo: '12:00', fimIntervalo: '13:00', saida: '18:01', atrasos: '0(0:10)', turno: 'Diurno' },
  { date: '02/11/2024', jornada: 8, chegada: '08:15', inicioIntervalo: '12:10', fimIntervalo: '13:10', saida: '18:10', atrasos: '1(0:15)', turno: 'Diurno' },
  { date: '03/11/2024', jornada: 8, chegada: '08:05', inicioIntervalo: '12:05', fimIntervalo: '13:05', saida: '18:05', atrasos: '0(0:05)', turno: 'Diurno' },
  { date: '01/11/2024', jornada: 8, chegada: '08:00', inicioIntervalo: '12:00', fimIntervalo: '13:00', saida: '18:01', atrasos: '0(0:10)', turno: 'Diurno' },
  { date: '02/11/2024', jornada: 8, chegada: '08:15', inicioIntervalo: '12:10', fimIntervalo: '13:10', saida: '18:10', atrasos: '1(0:15)', turno: 'Diurno' },
  { date: '03/11/2024', jornada: 8, chegada: '08:05', inicioIntervalo: '12:05', fimIntervalo: '13:05', saida: '18:05', atrasos: '0(0:05)', turno: 'Diurno' },
  // Adicione mais dados conforme necessário
];

const PontoEletronico: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <AppLayout>
    <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 0, borderRadius: 2, margin: 0 }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
        Ponto Eletrônico
      </Typography>
      
      {/* Container para centralizar a tabela */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <TableContainer
          component={Paper}
          sx={{
            width: '95%', // Controlando a largura da tabela
            maxHeight: '400px', // Definindo altura fixa para a tabela
            overflow: 'auto', // Adicionando a rolagem aqui
            borderRadius: '10px', // Bordas arredondadas
            boxShadow: 3, // Sombra suave
            padding: 0, // Remover qualquer padding extra do Paper
          }}
        >
          <Table aria-label="ponto eletrônico">
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Jornada</TableCell>
                <TableCell>Chegada</TableCell>
                <TableCell>Início Intervalo</TableCell>
                <TableCell>Fim Intervalo</TableCell>
                <TableCell>Saída</TableCell>
                <TableCell>Atrasos</TableCell>
                <TableCell>Turno</TableCell>
              </TableRow>
            </TableHead>

            {/* Corpo da tabela com rolagem e altura fixa */}
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.jornada}</TableCell>
                  <TableCell>{row.chegada}</TableCell>
                  <TableCell>{row.inicioIntervalo}</TableCell>
                  <TableCell>{row.fimIntervalo}</TableCell>
                  <TableCell>{row.saida}</TableCell>
                  <TableCell>{row.atrasos}</TableCell>
                  <TableCell>{row.turno}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Paginação */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ marginTop: 2 }}
      />
    </Paper>
    </AppLayout>
  );
};

export default PontoEletronico;

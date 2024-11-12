import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography, Box, TextField } from '@mui/material';
import AppLayout from '../../components/AppLayout/AppLayout';
import { useLocation } from 'react-router-dom';

interface Ponto {
  data_registro: string;
  jornada: number;
  entrada: string;
  inicio_intervalo: string;
  fim_intervalo: string;
  saida: string;
  banco_horas: string;
  turno: string;
}

const PontoEletronico: React.FC = () => {
  const [data, setData] = useState<Ponto[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:3335/api/consultarPonto', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const result = await response.json();
        const ponto: Ponto[] = result
        if (!response.ok) {
          alert(response);
        } else {          
          setData(ponto);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
    setPage(0);
  };

  const filtred = data.filter(ponto =>
    Object.values(ponto).some(value =>
      String(value).toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <AppLayout>
      <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 0, borderRadius: 2, margin: 20 }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}></Typography>

        <Box display="flex" justifyContent="flex-end">
          <TextField
            label="Search Point"
            variant="outlined"
            value={filterText}
            onChange={handleFilterChange}
            sx={{ width: "30%", marginRight: 5 }}
          />
        </Box>

        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={filtred.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ marginTop: 2, marginRight: 6 }}
        />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <TableContainer
            component={Paper}
            sx={{
              width: '95%',
              maxHeight: '700px',
              overflow: 'auto',
              borderRadius: '10px',
              boxShadow: 3,
              padding: 0,
            }}
          >
            <Table aria-label="ponto eletrônico">
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>Jornada</TableCell>
                  <TableCell>entrada</TableCell>
                  <TableCell>Início Intervalo</TableCell>
                  <TableCell>Fim Intervalo</TableCell>
                  <TableCell>Saída</TableCell>
                  <TableCell>Banco de Horas</TableCell>
                  <TableCell>Turno</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtred.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                  <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                    <TableCell>{row.data_registro}</TableCell>
                    <TableCell>{row.jornada}</TableCell>
                    <TableCell>{row.entrada}</TableCell>
                    <TableCell>{row.inicio_intervalo}</TableCell>
                    <TableCell>{row.fim_intervalo}</TableCell>
                    <TableCell>{row.saida}</TableCell>
                    <TableCell>{row.banco_horas}</TableCell>
                    <TableCell>{row.turno}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </AppLayout>
  );
};

export default PontoEletronico;

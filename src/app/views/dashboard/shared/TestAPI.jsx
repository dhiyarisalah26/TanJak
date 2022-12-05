import {
    Avatar,
    Box,
    Card,
    Icon,
    IconButton,
    MenuItem,
    Select,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    useTheme,
} from '@mui/material';


import React, { useState, useEffect, useMemo } from 'react';
// import { useTheme } from '@mui/system'
import axios from 'axios';
import { Divider, Input } from '@mui/material';

const CardHeader = styled(Box)(() => ({
    display: 'flex',
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
      width: 50,
      height: 15,
      borderRadius: 500,
      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': { borderBottom: 'none' },
    '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const TestAPI = () => {
    
    const [Pekerjaan, SetDataPekerjaan] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios 
            .get(`/jumlahpenduduk_perpekerjaan`)
            .then(res => {
                const dp = res.data;
                SetDataPekerjaan(dp);
            })
            .catch(err => {
                console.log(err)
            })
    })



    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
            <Title>Data Penduduk Berdasarkan Pekerjaan</Title>
            </CardHeader>
            <Box overflow="auto">
            <ProductTable>
                <TableHead>
                <TableRow>
                    <TableCell sx={{ px: 3 }} colSpan={4}>
                    Jenis pekerjaan
                    </TableCell>
                    <TableCell sx={{ px: 0 }} colSpan={2}>
                    Jumlah
                    </TableCell>
                </TableRow>
                </TableHead>
    
                <TableBody>
                  {Pekerjaan.map((pekerjaan, index) => (
                    <TableRow key={index} hover>
                    <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                        {pekerjaan.jenis_pekerjaan}
                    </TableCell>
    
                    <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                        {pekerjaan.jumlah}
                    </TableCell>
    
    
 
                    </TableRow>
                ))}
                </TableBody>
            </ProductTable>
            </Box>
        </Card>
    );
};
export default TestAPI;

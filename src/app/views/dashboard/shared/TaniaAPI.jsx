import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Button, Divider, Input, TextField, Card, styled } from '@mui/material';

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '0px',
  // padding: '24px !important',
  // [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  // padding: '24px !important',
  // background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  // [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const TaniaAPI = () => {
  // const userName = 'divya'
  // const password = '12345'
  // const apiUrlLogin = 'https://newsclassifiertst.azurewebsites.net/login'
  // const [id, setId] = useState(1)

  // const authAxios = axios.create({
  //     baseURL: apiUrlLogin,
  //     accept : application/json,
  //     Content-Type: application/x-www-form-urlencoded,

  //     }
  // })

  // useEffect(() => {
  //     axios
  //         .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //         .then(res => {
  //             console.log(res)
  //             setPost(res.data)
  //         })
  //         .catch(err => {
  //             console.log(err)
  //         })
  // }, [id])

  return (
    <CardRoot>
      <StyledCard elevation={0}>
        {/* <Title>Eksplorasi Kota</Title> */}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Masukkan judul berita"
          variant="outlined"
          margin="normal"
        />
        {/* <Paragraph>
            Upgrade to <b>MatX PRO</b> for <br /> more resources
          </Paragraph> */}

        <Button
          href="https://www.detik.com/"
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}
        >
          Periksa
        </Button>
      </StyledCard>
    </CardRoot>
  );
  //   <TextField
  //     fullWidth
  //     id="outlined-basic"
  //     label="Masukkan judul berita"
  //     variant="outlined"
  //     margin="normal"
  //   />;
  // <Button size="large" color="primary" variant="contained" sx={{ textTransform: 'uppercase' }}> upgrade now</Button>
};
export default TaniaAPI;

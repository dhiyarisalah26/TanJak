import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Divider, Input, TextField} from '@mui/material';

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
        <TextField id="outlined-basic" label="Masukkan judul berita" variant="outlined" />
    );
};
export default TaniaAPI;
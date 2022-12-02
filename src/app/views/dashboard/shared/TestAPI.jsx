import React, { useState, useEffect } from 'react';
// import { useTheme } from '@mui/system'
import axios from 'axios';
import { Divider, Input } from '@mui/material';


const TestAPI = () => {
    // const theme = useTheme()
    // const accessToken = '';
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios 
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <Divider>
            <Input type="text" value={id} onChange={e => setId(e.target.value)}></Input>
            <Divider>{post.title}</Divider>
            {/* <ul>
                {posts.map(post => (
                    <li key ={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </Divider>
    );
};
export default TestAPI;

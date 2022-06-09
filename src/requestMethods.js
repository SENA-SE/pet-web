   
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
// const BASE_URL = 'http://localhost:5000/api/';
const BASE_URL = 'http://cyjspace.5gzvip.91tunnel.com:80';
// const TOKEN="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2IiwiZXhwIjoxNjU0ODQzNzExLCJpYXQiOjE2NTQ1ODQ1MTF9.PfuGR_bHbyz_yMyhe7oeSqlpGf4H-E13HDPtTY5h-Y0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers:{token:`${TOKEN}`}
// });
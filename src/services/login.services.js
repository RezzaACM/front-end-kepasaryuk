import Axios from "axios";
require('dotenv').config()

const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(`${process.env.REACT_APP_BASE_URL}/${path}`, data, {
            headers: {
                'access-key': process.env.REACT_APP_ACCESS_KEY
            }
        })
            .then((res) => {
                resolve(res.data)
            }, err => {
                reject(err)
            })
    })
    return promise
}

const login = (data) => Post('user/login', data);


const AuthApi = {
    login
}

export default AuthApi;

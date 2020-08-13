import Axios from "axios";

const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(`${process.env.REACT_APP_BASE_URL}/${path}`, data)
            .then((res) => {
                resolve(res.data)
            }, err => {
                reject(err.response.data)
            })
    })
    return promise
}

const login = (data) => Post('admin/login', data);


const AuthAdmin = {
    login
}

export default AuthAdmin;
import axios from 'axios'

// const token = JSON.parse(localStorage.getItem("token"))

const api = axios.create({
    // baseURL: 'http://localhost:4001',
    baseURL:'https://myntra-3s3b.onrender.com'
    // headers:{'Authorization':`Bearer ${token}`}
})

export default api
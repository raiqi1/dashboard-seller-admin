import axios from 'axios'
const api = axios.create({
    // baseURL: 'https://ecom-api-swart.vercel.app/api'
     baseURL: 'https://ecom-api-production-9723.up.railway.app/api'
})
export default api
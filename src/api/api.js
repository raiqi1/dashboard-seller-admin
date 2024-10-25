import axios from 'axios'
const api = axios.create({
    baseURL: 'https://ecom-api-swart.vercel.app/api'
})
export default api
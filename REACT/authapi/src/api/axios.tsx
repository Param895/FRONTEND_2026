//steps to create base end point 
//step1 : import axios 
import axios from 'axios';
//step2
const api = axios.create({
    baseURL:'https://backend-ai-d7iv.onrender.com/api'
});
//step3
export default api;
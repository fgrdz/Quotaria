import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.seriesquotes.10cyrilc.me/'
})

export default api
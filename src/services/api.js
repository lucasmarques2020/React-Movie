import axios from 'axios'

// URL 
// https://api.themoviedb.org/3
// /movie/now_playing?api_key=2f6095647d6d9f31c4eab5cc0ad908b6&language=pt-BR&page=1
export const key = '2f6095647d6d9f31c4eab5cc0ad908b6'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;
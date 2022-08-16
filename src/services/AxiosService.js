import Axios from 'axios'
import { baseURL } from '../env'

export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const spaceApi = Axios.create({
  baseURL: 'https://bcw-getter.herokuapp.com',
  timeout: 4000,
  params: {
    url: 'https://api.nasa.gov/planetary/apod',
    api_key: '42ciP7Y3C5YU92czTDvEmfv2GG3m2Bb61NHCApZ1'
  }
})
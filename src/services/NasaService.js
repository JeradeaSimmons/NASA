import { AppState } from "../AppState.js"
import { Nasa } from "../models/Nasa.js"
import { spaceApi } from "./AxiosService.js"




class NasaService {
    async getNasa() {
        const res = await spaceApi.get('/?')

        AppState.nasa = res.data.results

    }





}



export const nasaService = new NasaService()
import { AppState } from "../AppState.js"
import { spaceApi } from "./AxiosService.js"




class NasaService {
    async getNasa() {
        const res = await spaceApi.get('')

        console.log('RES DATA', res.data);
        AppState.nasa = res.data.results

    }





}



export const nasaService = new NasaService()
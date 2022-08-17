import { AppState } from "../AppState.js"
import { spaceApi } from "./AxiosService.js"




class NasaService {
    async getNasa() {
        const res = await spaceApi.get('')

        console.log('RES DATA', res.data);
        AppState.nasa = res.data
        console.log('APPSTATE', res.data);

    }





}



export const nasaService = new NasaService()
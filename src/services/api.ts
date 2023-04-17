import axios from "axios";


export const  api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ea16010703d2c80007aa6faa93986558",
        language: "pt-BR",
        include_adult: false,
    }
})
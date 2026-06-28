import axios from "axios";
import { setupIntercepptors } from "@/shared/services/http/interceptor";

const cepHttp = axios.create({
    baseURL: import.meta.env.VITE_CEP_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application-json'
    }
})

setupIntercepptors(cepHttp)


export default cepHttp
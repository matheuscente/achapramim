import axios from "axios";
import { setupIntercepptors } from "@/shared/services/http/interceptor";

const dddHttp = axios.create({
    baseURL: import.meta.env.DDD_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application-json'
    }
})

setupIntercepptors(dddHttp)

export default dddHttp
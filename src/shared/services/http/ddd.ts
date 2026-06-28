import axios from "axios";
import { setupIntercepptors } from "@/shared/services/http/interceptor";
import { env } from "@/app/env";

const dddHttp = axios.create({
    baseURL: env.dddUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application-json'
    }
})

setupIntercepptors(dddHttp)

export default dddHttp
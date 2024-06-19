import { CorsOptions } from 'cors'

export const corsConfig: CorsOptions = {
    origin: function(origin, callback) {
        const whitelist = [process.env.FRONTEND_URL]
        console.log(origin);
        console.log(process.env.FRONTEND_URL);
        
        if(process.argv[2] === '--api'){
            whitelist.push(undefined)
        }
        if (whitelist.includes(origin)) {
            callback(null, true)
        }else{
            callback(new Error('Error de Cors Intente Un Dominio Permitido'))
        }
    }
}
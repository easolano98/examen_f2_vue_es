import axios from "axios";

export const generarTokenFachada=async(bodyCredenciales)=>{
    return await generarToken(bodyCredenciales)
}


const generarToken=async(bodyCredenciales)=>{
   const data= axios.post(`http://localhost:8081/API/1.0/Autorizacion/tokens/obtener`, bodyCredenciales).then(r=>r.data)
    return data
}

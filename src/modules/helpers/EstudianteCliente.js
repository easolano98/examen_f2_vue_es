import axios from "axios";

export const registrarEstudianteFachada=async(bodyEstudiante)=>{
    await registrarEstudiante(bodyEstudiante)
}

export const buscarEstudiantesFachada=async()=>{
    await buscarEstudiantes()
}

const registrarEstudiante=async(bodyEstudiante)=>{

    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlYSIsImlhdCI6MTY5MzY2NDA5MCwiZXhwIjoxNjkzNjY0MzkwfQ.pdK2l9xpbhq8iBuolyireUuuHtovay3F7cGxrbfOVEOTgsmxmoPX8nzLT6Bt9TBU5pV2zFzPsjssBayXPCIC-g",
        "Mensaje": "Valor1"
    }

    axios.post(`http://localhost:8080/API/1.0/Inscripcion/estudiantes`, bodyEstudiante, {headers:headers}).then(r=>r.data)
}

const buscarEstudiantes=async()=>{

    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlYSIsImlhdCI6MTY5MzY2NDA5MCwiZXhwIjoxNjkzNjY0MzkwfQ.pdK2l9xpbhq8iBuolyireUuuHtovay3F7cGxrbfOVEOTgsmxmoPX8nzLT6Bt9TBU5pV2zFzPsjssBayXPCIC-g",
        "Mensaje": "Valor1"
    }

    axios.get(`http://localhost:8080/API/1.0/Inscripcion/estudiantes`, {headers:headers}).then(r=>r.data)
}


  
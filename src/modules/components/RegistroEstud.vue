<template>
  <div class="registro">
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
  </div>
  <button @click="registrarEstudiante">Ingresar</button>
</template>

<script>
import { registrarEstudianteFachada } from "../helpers/EstudianteCliente";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async registrarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
      };

      await registrarEstudianteFachada(data);

      this.reiniciar();
    },
    reiniciar() {
      this.cedula = null;
      this.nombre = null;
      this.apellido = null;
    },
  },
};
</script>

<style scoped>
.registro{
    display: grid;
    border: 1px solid black;
    background: salmon;
    padding: 10px;
    margin-right: 100px;
    margin-left: 100px;
}
input{
    width: 500px;
    align-items: center;
    margin-left: 300px;
}
</style>
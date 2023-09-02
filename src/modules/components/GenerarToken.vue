<template>
  <div class="token">
    <label for="">Token</label>
    <label for="" v-bind="{ token }"></label>
    <button @click="generarToken">Generar Token</button>
  </div>
</template>

<script>
import { generarTokenFachada } from "../helpers/TokenCliente";
export default {
  data() {
    return {
      userName: "ea",
      password: "12345",
      token: null,
    };
  },
  methods: {
    async generarToken() {
      const data = {
        userName: this.userName,
        password: this.password,
      };
      this.token = await generarTokenFachada(data);
    },
  },
};
</script>

<style>
.token{
    border: 1px solid;
    background: blueviolet;
    margin-right: 50px;
    margin-left: 50px;
    display: grid;
}
</style>
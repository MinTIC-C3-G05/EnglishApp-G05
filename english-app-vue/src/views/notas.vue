<template>
    <div>
        <div style="text-align:center; padding-top: 2%">
          <h1 style="left-padding: 60px">BUSCA TU PERFECTO COMPAÑERO DE ESTUDIO</h1>
        </div>

            <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
      <h3>Buscar compañeros de estudio</h3>

      <input
        type="text"
        class="form-control my-2"
        placeholder="Escribe tu nombre"
        v-model="notaEditar.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Resultado de tu examen"
        v-model="notaEditar.descripcion"
      />
      <button class="btn-success my-2 mx-2" type="submit">Editar</button>
      <button class="my-2" type="submit" @click="editar = false"
        >Cancelar</button
      >
    </form>
    <form @submit.prevent="agregarNota()" v-if="!editar">
      <h3>Agrega tu resultado para buscar posibles compañeros de estudio</h3>

      <input
        type="text"
        class="form-control my-2"
        placeholder="Escribe tu nombre"
        v-model="nota.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Resultado de examen"
        v-model="nota.descripcion"
      />
      <button class="btn-success my-2" type="submit">Agregar</button>
    </form>
     <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Resultado de examen</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in notas" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>
            <button class="btn-danger mx-2" @click="eliminarNota(item._id)"
              >Eliminar</button
            >
            <button class="btn-warning mx-2" @click="activarEdicion(item._id)"
              >Editar</button
            >
          </td>
        </tr>
      </tbody>
    </table>
        
    </div>
</template>



<script>
export default {
  data() {
    return {
      notas: [],
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,

      nota: { nombre: "", descripcion: "" },
      editar: false,
      notaEditar: {},
    };
  },

  created() {
    this.listarNotas();
  },

  methods: {
    listarNotas() {
      this.axios
        .get("/nota")
        .then((res) => {
          console.log(res.data);
          this.notas = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    agregarNota() {
      this.axios
        .post("/nueva-nota", this.nota)
        .then((res) => {
          this.notas.push(res.data);
          this.nota.nombre = "";
          this.nota.descripcion = "";
          this.mensaje.color = "success";
          this.mensaje.texto = "Nota Agregada";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    eliminarNota(id) {
      this.axios
        .delete(`/nota/${id}`)
        .then((res) => {
          const index = this.notas.findIndex(
            (item) => item._id === res.data._id
          );
          this.notas.splice(index, 1);
          this.mensaje.color = "success";
          this.mensaje.texto = "Nota Eliminada";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.editar = true;
      this.axios
        .get(`/nota/${id}`)
        .then((res) => {
          this.notaEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarNota(item) {
      this.axios
        .put(`/nota/${item._id}`, item)
        .then((res) => {
          const index = this.notas.findIndex((n) => n._id === res.data._id);
          this.notas[index].nombre = res.data.nombre;
          this.notas[index].descripcion = res.data.descripcion;
          this.mensaje.color = "success";
          this.mensaje.texto = "Nota Editada";
          this.showAlert();
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

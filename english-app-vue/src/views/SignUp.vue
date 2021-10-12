<template>


    <div class="general-container">
        <div class="welcomeBack-container">
            <div class="welcomeBack">
                <h1 style="background-color: white; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">SIGN UP</h1>
                <img src="@/assets/CLIK_PROF_LOGO.png" alt="logo" style="height: 150px; " >
            </div>
        </div>
       
        <div class="inputs">
            <form action="" class="form" @submit.prevent="agregarNota()">
                

                <input type="date"  class="input-login">
                <br>
                <input type="email" placeholder="example@example.com" class="input-login" v-model="datos.email">    
                <input type="password" placeholder="Password" class="input-login" v-model="datos.pass"> 
                <input type="nombre" placeholder="your name" class="input-login" v-model="datos.nombre"> 
                <br>
                <br>
                <br>
                <button type="submit" class="login-button"><h3 style="color: aliceblue;">SIGN UP</h3></button>
                <br>
                <h5 style="background-color: white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">OR...</h5>
                <button class="google" > <img src="@/assets/google-logo.png" alt="" style="height: 30px;"> <h3 style="background-color: #1A1D53; color:white;">CONTINUE WITH GOOGLE</h3></button>
                
                
                
               
       
            </form>
        </div>
        <div class="sign-up">
            <h4 style="background-color: white;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Already have an account?</h4>
            <button style="background-color: white;box-shadow: 5px 10px #888888;">Log in</button>
        </div>
   </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'SignUp',
  components: {
  },
  data() {
    return {
      datos: [],
      mensaje: { color: "success", texto: "" },
    };
  },

  created() {
    this.crearUsuario();
  },

  methods: {
    crearUsuario() {
      this.axios
        .post("/user/nuevo-usuario", this.datos)
        .then((res) => {
          this.datos.push(res.data);
          this.datos.nombre = "";
          this.datos.pass = "";
          this.datos.email = "";
          this.mensaje.color = "success";
          this.mensaje.texto = "Usuario creado";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
 }
}
</script>

<style src="../assets/css/login.css"></style>
<template>

    <div class="general-container">
        <div class="welcomeBack-container">
            <div class="welcomeBack">
                <h1 style="
              background-color: white;
              font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
                'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            ">
                    LOG IN
                </h1>
                <img src="@/assets/CLIK_PROF_LOGO.png" alt="logo" style="height: 150px" />
            </div>
        </div>

        <div class="inputs">
            <form action="" class="form" @submit.prevent="accesoUsuario()" >
                <input type="email" placeholder="Email" class="input-login" v-model="datos.email" />
                <br />
                <input type="password" placeholder="Password" class="input-login" v-model="datos.pass" />
                <br />
                <br />
                <br />
                <button type="submit" class="login-button">
                    <h3 style="color: aliceblue">LOG IN</h3>
                </button>
                <br />
                <h5 style="
              background-color: white;
              font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
                'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            ">
                    OR...
                </h5>
                <button class="google">
                    <img src="@/assets/google-logo.png" alt="" style="height: 30px" />
                    <h3 style="background-color: #1a1d53; color: white">
                        CONTINUE WITH GOOGLE
                    </h3>
                </button>
            </form>
        <div class="sign-up">
            <h4 style="
            background-color: white;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
              'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          ">
                Don't have an account?
            </h4>
            <button style="background-color: white; box-shadow: 5px 10px #888888" Onclick="location.href='/SignUp'">
                SIGN UP
            </button>
        </div>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  beforeCreate(){
    var autenticacion = window.localStorage.getItem('autenticacion');
    if (autenticacion == 'ok'){
      this.$router.push({path: "/Perfil1"});
    }
  },
  data(){
    return{
      mensaje: {color:'', texto: ''},
      dismissSecs: 5,
      dismissCountDown: 0,
      userData:{nombre:'', correo:'', nivel: ''},
      datos: {
        email:'',
        pass:'',
  }
    }
  },

  methods: {
    accesoUsuario() {
      console.log("se ejecuta la funcion loguear usuario");
      this.axios
      .post("/login", this.datos)
      .then((res) => {
        console.log(res.data);
        this.$router.push({path: "/Perfil1"});
        window.localStorage.setItem('autenticacion', 'ok');

      })
      .catch((e) => {
          console.log(e.response);
        });
    },
 }
}
</script>

<style src="../assets/css/login.css"></style>
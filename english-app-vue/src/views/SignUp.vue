<template>


    <div class="general-container">
        <div class="welcomeBack-container">
            <div class="welcomeBack">
                <h1 style="background-color: white; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">SIGN UP</h1>
                <img src="@/assets/CLIK_PROF_LOGO.png" alt="logo" style="height: 150px; " >
            </div>
        </div>
       
        <div class="inputs">
            <form action="" class="form">
                

                <input type="date"  class="input-login">
                <br>
                <input type="email" placeholder="example@example.com" class="input-login">    
                <input type="password" placeholder="Password" class="input-login"> 
                <input type="password" placeholder="Confirm password" class="input-login"> 
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
  }
}
</script>

<style src="../assets/css/login.css"></style>
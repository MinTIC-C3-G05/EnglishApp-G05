<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/SignUp">Sign Up</router-link>
    <router-link to="/login">Login</router-link>
  </div>
  <router-view/>
  </div>
    
</template>


<script>



export default{
  name: 'App',
  components:{
  
  }
}
</script>



<style>
#nav{
  background-color: rgba(0, 0, 0, 0.335);
  color: white;
}
</style>

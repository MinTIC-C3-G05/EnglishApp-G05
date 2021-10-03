<template>
<div id="app">
  <navbar/>
  <router-view/>
  <pie-pagina/>
</div>

</template>


<script>
import Navbar from './components/Navbar.vue'
import PiePagina from './components/PiePagina.vue'



export default{
  name: 'App',
  components:{
    Navbar,
    PiePagina
  
  }
}
</script>



<style>
#nav{
  background-color: rgba(0, 0, 0, 0.335);
  color: white;
}
</style>

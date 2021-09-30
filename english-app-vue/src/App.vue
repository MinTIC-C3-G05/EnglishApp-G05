<template>
  
    <helloWorld/>
    <navbar/>
    <primerComponente/>
    
    
  
  
</template>


<script>


import Navbar from '@/components/Navbar.vue'
import primerComponente from '@/components/miPrimerComponente'

export default{
  name: 'App',
  components:{
    
    Navbar,
    primerComponente
  }
}
</script>



<style>

</style>

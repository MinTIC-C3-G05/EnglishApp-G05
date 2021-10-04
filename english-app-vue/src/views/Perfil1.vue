
<template>
<!--usuario -->
<section id="seccion5">
<span>
<div id="contenedor1" >
<div  id="cajita">
<div >
    <h1 id="nombre">Mi nombre de usuario </h1>
</div>

<div id="cajiti2">
    <a><img id="imagen" src="@\assets/CLIK_PROF_LOGO_SIN_FONDO.png" class="userpicture" width="250" height="250"  alt="" title=""></a>
</div>
</div>
</div>
</span>
</section>

<section id="seccion4" class="region-main-content" aria-label="Contenido">
<span class="notifications" id="user-notifications"></span>
<div id="contenedormayor">
<div id="contenedor" class="col-lg-12 col-md-12 col-sm-6 col-xs-6">
<div id="cajon1">
    <h3 >Detalles de usuario</h3>
    <ul id="">
        <li><dl ><dt>Dirección de correo</dt><dd ><a href=" ">correousurario@gmail.com</a></dd></dl></li>
        <li ><dl><dt>Ciudad</dt><dd>ciudad usuario</dd></dl></li>
        <li><dl><dt>Fecha de Naciemiento</dt><dd>fecha nacimiento usuario</dd></dl></li>
    </ul>
</div>
</div>


<div id="contenedor3" class="col-lg-12 col-md-12 col-sm- col-xs-6">
<div id="cajon2">
<center>
<h2>Detalles de Prueba</h2>
<p>Tu Nivel Registrado</p>
<h2>X</h2>

<button id="boton" Onclick="location.href='/Recursos'" ><a  id="boton1">
REPOSITORIO</a>
</button>

<button id="boton" Onclick="location.href='/Test'" ><a  id="boton1">
TEST</a>
</button>

<br>

<button id="boton" Onclick="location.href='/Recomend'" ><a id="boton1" >
RECOMENDADO</a>
</button>

</center>
</div>
</div>
</div>
</section>

<!--Carrousel-->
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="@\assets/cam.png" alt="First slide" width="900" height="400" >
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="@\assets/ade.jpg" alt="Second slide" width="900" height="400"  >
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="@\assets/tor.png" alt="Third slide" width="900" height="400"  >
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</template>

<style src="../assets/css/Style.css"></style>


<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  
  }
}
</script>
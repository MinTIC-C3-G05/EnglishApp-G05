<template>
  <!-- NAVBAR -->
  <navbar/>
  <!-- FIN DE NAVBAR -->


<!-- TITULO -->
  <section class="container" style="text-align: center; margin-top: 15px;">
    <h1>CLICK-PROF <small class="text-muted" style="align-self:center;">Do you want to test your English? </small></h1>
    <h4>Take our diagnostic test!</h4>
  </section>
  <!-- FIN DE TITULO -->



  <!-- SECTION 1 -->
  <div class="container mt-5 border">
    <div class="row fotoContainer" style="text-align: center;">
      <div class="col-xs-12 col-sm-6 col-sm-push-9">
        <h5 class="text-muted"> ENGLISH TEST </h5>
        <p class="text-dark" style="text-align: justify;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores perspiciatis iure assumenda aliquam
          repudiandae sequi illum fuga, minus itaque culpa placeat dolores, corporis blanditiis. Commodi rerum fugit vel
          quaerat. </p>
        <button class="button btn-primary EnglishTest" Onclick="location.href='EnglishLevelTest_p1.html'">ENGLISH TEST
        </button>
      </div>
      <div class="col-sm-3 col-md-3 foto" style="margin: 25px; left: 14%">
        <img src="@/assets/CLIK_PROF_LOGO.png" alt="Logo picture" class=" rounded img-fluid">
      </div>
    </div>
  </div>
  <!-- FIN SECCION 1 -->



  <!-- SECCION 2 -->
<!-- SECTION 2 - CURSOS -->
  <div id="cursos" class="container bg-light border p-5 mt-5">
    <div class="col-12">
      <div class="card-group">
        <div class="card bg-light">
          <img src="@/assets/Image-1.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>

            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et! Qui, facere
              et. Eveniet tempore, eius veritatis molestiae quos officia incidunt voluptas iure. Cum id recusandae error
              unde ad. Praesentium.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card bg-light">
          <img src="@/assets/Image-2.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Lorem perferendis illo.</h5>

            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quis eveniet quae
              facilis perspiciatis nesciunt, atque expedita voluptas doloribus iusto. Nam odio porro placeat temporibus
              aliquam beatae inventore id incidunt?</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card bg-light">
          <img src="@/assets/Image-3.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum temporibus tempore
              voluptas ipsam non? Similique ipsum nihil facere totam placeat at aut assumenda est optio. Iusto ipsa odio
              facilis autem?</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- FIN SECCION 2 -->



<!-- Contact Information -->

  <div class="container">
    <section class="mb-4 border mt-5">

      <!--Section heading-->
      <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us!</h2>
      <!--Section description-->
      <p class="text-center w-responsive mx-auto mb-5"> We would love to hear from you!</p>

      <div class="row">

        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <!--Grid row-->
            <div class="row p-3">

              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" id="name" name="name" class="form-control">
                  <label for="name" class="">Name</label>
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" id="email" name="email" class="form-control">
                  <label for="email" class="">E-mail</label>
                </div>
              </div>
              <!--Grid column-->

            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row p-3">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input type="text" id="subject" name="subject" class="form-control">
                  <label for="subject" class="">Subject</label>
                </div>
              </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row p-3">

              <!--Grid column-->
              <div class="col-md-12">

                <div class="md-form">
                  <textarea id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                  <label for="message">Message</label>
                </div>

              </div>
            </div>
            <!--Grid row-->

          </form>

          <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
          </div>
          <div class="status"></div>
        </div>
        <!--Grid column-->

      </div>
    </section>
  </div>
  <!--Section: Contact v.2-->




<!-- PIE DE PAGINA -->
  <piePagina/>
  <!-- FIN DE PIE DE PAGINA -->

</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import PiePagina from '@/components/PiePagina'

export default {
  name: 'Home',
  components: {
    Navbar,
    PiePagina
  
  }
}
</script>

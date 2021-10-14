<template>
  <!-- TITULO -->
  <section class="container" style="text-align: center; margin-top: 15px">
    <h1>
      CLICK-PROF
      <small class="text-muted" style="align-self: center"
        >Do you want to test your English?
      </small>
    </h1>
    <h4>Take our diagnostic test!</h4>
  </section>
  <!-- FIN DE TITULO -->

  <!-- SECTION 1 -->
  <div class="container mt-5 border">
    <div class="row fotoContainer" style="text-align: center">
      <div class="col-xs-12 col-sm-6 col-sm-push-9">
        <h5 class="text-muted">ENGLISH TEST</h5>
        <p class="text-dark" style="text-align: justify">
          We are a company specialized in English language online testing! <br>
          Thanks to the experience we have acquired throughout the time, we can
          guarantee the correct assessment of a learner's English level.'
        </p>
        <button
          class="button btn-primary EnglishTest"
          Onclick="location.href='/Test'"
        >
          ENGLISH TEST
        </button>
      </div>
      <div class="col-sm-3 col-md-3 foto" style="margin: 25px; left: 14%">
        <img
          src="@/assets/CLIK_PROF_LOGO.png"
          alt="Logo picture"
          class="rounded img-fluid"
        />
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
          <img src="@/assets/Image-1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Test your English skills today!!</h5>

            <p class="card-text">
              Before you take that expensive test that you need to study abroad,
              take our diagnostic test and check if you are really ready for it!
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card bg-light">
          <img src="@/assets/Image-2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Business Diagnostic Test.</h5>

            <p class="card-text">
              Do you want to test your employees' English skills? Let ClickProf
              be in charge of that! '
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card bg-light">
          <img src="@/assets/Image-3.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Find the perfect teacher for you!</h5>
            <p class="card-text">
              Maybe you're not ready yet, but don't worry, we are sure you will
              find the perfect teacher in our list of private tutors.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
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
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact us!
      </h2>
      <!--Section description-->
      <p class="text-center w-responsive mx-auto mb-5">
        We would love to hear from you!
      </p>

      <div class="row">
        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <!--Grid row-->
            <div class="row p-3">
              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                  />
                  <label for="name" class="">Name</label>
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                  />
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
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    class="form-control"
                  />
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
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                  ></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
            </div>
            <!--Grid row-->
          </form>

          <div class="text-center text-md-left">
            <a
              class="btn btn-primary"
              onclick="document.getElementById('contact-form').submit();"
              >Send</a
            >
          </div>
          <div class="status"></div>
        </div>
        <!--Grid column-->
      </div>
    </section>
  </div>
  <!--Section: Contact v.2-->
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

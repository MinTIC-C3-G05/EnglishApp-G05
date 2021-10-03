<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <img src="img/CLIK_PROF_LOGO.png" alt="" style="height:80px;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/SignUp">Sign up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Log In</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/Test">Diagnostic Test</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="Recomend">Recommended Exam</a>
            <a class="dropdown-item" href="recursos.html">Resources</a>

            <a class="dropdown-item" href="perfil.html">Results</a>
          </div>
        </li>
      </ul>

      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <!-- END OF NAVBAR -->


</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  data(){
    return{
      
    }
  }
}
</script>


<style></style>

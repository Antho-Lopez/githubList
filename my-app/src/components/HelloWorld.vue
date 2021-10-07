<template>
  <div class="hello">
    <h1 class="fw-bold text-uppercase">{{ msg }}</h1>
    <p>Page de présentation : Création d'un outil qui permet de lister nos projets Github grâce à l'API de github.</p>

    <div class="btn-group mt-4" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-dark btn-lg">Boutton pour le style</button>
      <button type="button" class="btn btn-dark btn-lg">Boutton pour le style</button>
      <button type="button" class="btn btn-dark btn-lg">Boutton pour le style</button>
    </div>

  </div>
</template>

<script>

export default {
  
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

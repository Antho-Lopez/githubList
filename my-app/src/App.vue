<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/projects-list">Projets Github</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: rgb(56, 56, 56);
}

#nav a {
  font-weight: bold;
  color: white;
  font-size: 1.5vw;
  text-decoration: none;
}

#nav a:hover {
  color: rgb(187, 187, 187);
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>

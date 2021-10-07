<template>
  <div class="projects-list">
    <h1 class="pt-5 mb-5 fw-bold text-uppercase">Liste des projets réalisés sur GitHub</h1>

     <div class="">
        <display-repos />
      </div>

  </div>
</template>

<script>
import DisplayRepos from '../components/DisplayRepos.vue'


export default {
  name: 'ProjectsList',
  
  components: {
    DisplayRepos
    
  }
}
</script>

<style scoped>

.projects-list{
  background-color: #41b883;
}

</style>
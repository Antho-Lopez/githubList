<template>
  <div class="one-project">
    <h1 class="fw-bold pt-3 mb-4 text-capitalize">Repository : {{repoInfos.name}}</h1>

    <router-link to="/projects-list" class="btn btn-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg> Retour</router-link>

     <div class="d-flex flex-column col-12 align-items-center">
        <div class="card shadow p-3 mb-5 bg-body rounded m-3 col-10">
          <div class="card-body">
            <h5 class="card-title fw-bold h2">Infos du créateur</h5>

            <p><span class="fw-bold"> Pseudo : </span>{{repoInfos.owner.login}}</p> 
            <p><span class="fw-bold">Avatar : </span></p> <img :src="repoInfos.owner.avatar_url"> 
            <hr>

            
            <p class="fw-bold">Archive supprimé ?</p>
            <p v-if="repoInfos.archived == true" class="mx-3">Oui</p>
            <p v-else class="mx-3">Non</p> 
            
            <p><span class="fw-bold">Créé le : </span>{{repoInfos.created_at}}</p>
            <p><span class="fw-bold">Branche par défault : </span>{{repoInfos.default_branch}}</p>
            <p><span class="fw-bold">Description : </span>{{repoInfos.description}}</p>
            <p><span class="fw-bold">Visibilité : </span>{{repoInfos.visibility}}</p> 
            <p><span class="fw-bold">Dernier push : </span>{{repoInfos.pushed_at}}</p> 
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>

import axios from "axios";

export default {
  
  name: 'OneProject',

  components: {
    
  },

  data(){
    return {
      repoInfos: [],
      errors: {},
    }
  },

   created: function() {
      axios
        .get(`https://api.github.com/repos/${this.$route.params.owner}/${this.$route.params.name}`)
        
        .then(response => {
            this.repoInfos = response.data;
            console.log(response.data)
        }).catch(error => {
            this.errors.push(error);
        });

    },
}
</script>

<style scoped>

.one-project{
  background-color: #41b883;
  height: 120vh;
}

</style>
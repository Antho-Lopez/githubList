<template>
  <div class="">
    <div class="">
      <div class="d-flex flex-column col-12 align-items-center">
        <div class="card shadow p-3 mb-5 bg-body rounded m-3 col-6" v-for="repo in repos" :key="repo.id">
          <div class="card-body">
            <h5 class="card-title h1 text-capitalize">{{ repo.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ repo.owner.login }}</h6>
            <p class="card-text">Visibilité : {{ repo.visibility }}</p>
            <p class="card-text">Créé le : {{ repo.created_at }}</p>

            <router-link :to="{name: 'OneProject', params:{owner:repo.owner.login, name:repo.name }}" class="btn btn-warning btn-lg">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg> Voir</router-link>
        
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'DisplayRepos', 
  
  computed: {
  ...mapState('repository', ['repos']),
  },

  created() {
    this.$store.dispatch('repository/getRepos');
  },

}
</script>

<style>

</style>
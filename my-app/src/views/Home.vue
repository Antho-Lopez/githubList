<template>
  <div class="home">
    <div class="d-flex flex-column col-12 align-items-center">
      <div class="col-2 card mt-3 mb-3">
        <div class="card-body">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
      </div>
    </div>
    <HelloWorld msg="Project de listing des projets Github"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.home{
  background-color: #41b883;
  height: 100vh;
}


</style>

<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center text-center">
      <div class="col-10">
      <h1>{{nasa.title }}</h1>
      <img class="image-fluid" :src="nasa.url" alt="">
      <p>{{nasa.explanation}}</p>
      
       </div>
    </div>
  </div>
</template>



<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";
import { nasaService } from "../services/NasaService.js";

export default {
  setup() {

    async function getNasa(){
      try {
        await nasaService.getNasa()
      } catch (error) {
        logger.error(error)
      }
    }
    onMounted(()=> {
      getNasa()
   

     });

    return {
      nasa: computed(() => AppState.nasa),
    };
  },
};
</script>

<style scoped lang="scss">
</style>


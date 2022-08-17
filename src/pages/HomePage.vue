<template>
<div class="container-fluid">
<div class="row" v-for="n in nasa" :key="n.title">
  <div class="col-10">{{title}}</div>
  </div>
</div>
</template>



<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger.js'
import { AppState } from '../AppState.js'
import {nasaService} from '../services/NasaService.js'

export default {
  setup() {
    
    onMounted(async () => {
      try {
        await nasaService.getNasa();
      } catch (error) {
         logger.error(error)
      }
    });
    

    return {
      
      nasa: computed(() => AppState.nasa),
      
      
    }
  }
}

</script>

<style scoped lang="scss">

</style>


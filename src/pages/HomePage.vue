<template>
<div class="home-page">
  <div class="container-fluid">
    <div class="row d-flex justify-content-center text-center">
      <div class="col-md-8">
        {{this.title}}
      </div>
    </div>
  </div>
</div>

</template>



<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import {nasaService} from '../services/NasaService.js'

export default {
  setup() { 
    async function getNasa() {
      try {
        await nasaService.getNasa()
      } catch (error) {
        logger.error('[getting nasa]', error)
        Pop.error(error)
      }
    }

    onMounted(() => {
      getNasa()
    })

    return {
      nasa: computed(() => AppState.nasa)
    }
  }
}

</script>

<style scoped lang="scss">

</style>


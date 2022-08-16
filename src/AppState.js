import { reactive } from 'vue'
import { Nasa } from './models/Nasa.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},


  /**@type {import('./models/Nasa.js').Nasa[]} */
  nasa: {},


})



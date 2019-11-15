import Vue from 'vue'

const isRequired = () => {
  throw new Error('param is required')
}

Vue.prototype.$my = (string = isRequired()) => {
  return 'This is an example ' + string
}

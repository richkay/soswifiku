<template>
  <div class="container" v-html="content" />
</template>
<script>
import { apiurl } from '~/plugins/apiurl.js'

export default {
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    this.fetchPrivacy()
    console.log(apiurl)
  },
  methods: {
    fetchPrivacy () {
      const vm = this
      vm.$axios.$get(apiurl + 'privacy').then((data) => {
        vm.content = data
      })
    }
  }
}
</script>

<template>
  <div>
    <div v-if="this.$route.query.host">
      {{ visitor }}
    </div>
    <ElseTemplate v-else code="405" msg="Venue Not Found" />
  </div>
</template>

<script>
import ElseTemplate from '~/components/access/else.vue'

export default {
  name: 'NotyetTemplate',
  components: {
    ElseTemplate
  },
  data() {
    return {
      visitor: this.$my('name')
    }
  }
}
</script>

<template>
  <div>
    <NotyetTemplate v-if="this.$route.query.res === 'notyet'" />
    <SuccessTemplate v-else-if="this.$route.query.res === 'success'" />
    <ElseTemplate v-else code="404" msg="Route Not Found" />
  </div>
</template>
<script>
import NotyetTemplate from '~/components/access/notyet.vue'
import SuccessTemplate from '~/components/access/success.vue'
import ElseTemplate from '~/components/access/else.vue'

export default {
  name: 'AccessPage',
  components: {
    NotyetTemplate,
    SuccessTemplate,
    ElseTemplate
  },
  data() {
    return {
      template: '',
      res: ''
    }
  }
}
</script>

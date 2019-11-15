<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'ElseTemplate',
  props: {
    code: {
      type: String,
      required: true
    },
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

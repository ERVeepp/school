<template lang="html">
    <div>
    	我是header
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'contents'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="timer">{{time}}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    type: {
      type: String,
      default: 'timer'
    }
  },
  computed: {
    ...mapGetters(['time'])
  },
  watch: {
    time: function () {
      if (this.time == "00:00") {
        this.$store.dispatch('resetTimer')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.timer {
  padding: 15px;
  font-size: 18px;
  background: #2B2F3B;
  width: fit-content;
  border-radius: 5px;
  white-space: nowrap;
  height: fit-content;
}
</style>
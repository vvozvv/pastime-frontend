<template>
  <div class="">
    <h1>Страница с названием игры {{ id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  mounted() {
    this.showIdGame()
  },
  methods: {
    showIdGame() {
      alert(this.id)
    }
  }
}
</script>
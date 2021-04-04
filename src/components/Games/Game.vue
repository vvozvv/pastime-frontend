<template>
  <div class="">
    <h1>Страница с названием игры {{id}}</h1>
    
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    showIdGame() {
      alert(this.id)
    }
  },
  mounted() {
    this.showIdGame()
  }
}
</script>
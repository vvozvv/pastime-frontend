<template>
  <form action="" class="form" @submit.prevent="createNewItem">
    <input type="text" placeholder="Введите название меню" v-model="title" class="form-controll">
    <input type="text" placeholder="Введите /url" v-model="url" class="form-controll">
    <button class="btn">Создать меню</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      url: null,
    }
  },
  methods: {
    createNewItem() {
      const newItem = {
        title: this.title,
        url: this.url
      }
      this.$store.dispatch('createNewItem', newItem).then(() => {
        this.clearForm()
      })
    },
    clearForm() {
      this.title = ''
      this.url = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .form-controll {
      width: 49%;
    }
  }
</style>
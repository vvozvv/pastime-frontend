<template>
  <div>
    <form class="login form" @submit.prevent="login">
      <div class="form__box">
        <label>Никнейм</label>
        <input v-model="username" required type="text" placeholder="Ваш никнейм" class="form-controll">
      </div>
      <div class="form__box">
        <label>Пароль</label>
        <input v-model="password" required type="password" placeholder="Пароль" class="form-controll">
      </div>
      <button type="submit" class="btn btn--accent">Войти</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      username: null,
      password: null,
      show_label: false
    }
  },
  computed: {
    ...mapGetters(['user', 'isLoggedIn', 'token'])
  },
  methods: {
    login() {
      this.$store.dispatch('getUser', {email: this.username, password: this.password})
      .then(() => {
        console.log('Успех');
        this.$router.push('/games')
      })
      .catch(err => {
         this.$toast.error(`Неверный логин или пароль!`, {
          duration: 4000,
          position: "top"
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  &__label {
    margin: 10px 0;
    text-align: center;
  }
  &__title {
    margin-bottom: 5px;
    display: block;
    font-size: 14px;
    color: #7F8095;
  }
}
</style>
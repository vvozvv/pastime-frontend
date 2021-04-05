<template>
  <header class="header">
    <a href="" class="header__logo"> <img src="@/assets/logo.png" alt="Logotype pastime.">pastime.</a>
    <div class="header__box">
      <div 
        v-show="isLoggedIn"
        class="header__col" 
      >
        <small class="header__text header__text--small">Баланс</small>
        <a href="" class="header__text header__coin">
          <svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23" cy="23" r="23" fill="#1E272F" /><path d="M32.07 14.296v-.001l-3.811-1.311-6.652 1.311v2.902l10.897 1.797 1.943-1.797a11.666 11.666 0 00-2.377-2.901zM32.07 31.705l-4.974-.946-5.49.946v2.902h2.787a11.56 11.56 0 007.616-2.848M21.607 28.803l7.847 1.136 4.993-1.136c.52-.898.922-1.872 1.187-2.901l-5.838-1.683-8.19 1.683v2.901z" fill="#E7A52E" /><path d="M35.634 20.098L32.07 17.97 21.607 20.1V23l11.424 2.063L36 23c0-1.002-.127-1.974-.366-2.902z" fill="#E7A52E" /><path d="M34.382 23c0-6.41-5.197-11.607-11.607-11.607-.394 0-.784.02-1.168.059v23.155h1.168c6.41 0 11.607-5.197 11.607-11.607z" fill="#E28424" /><path d="M32.07 14.295a11.562 11.562 0 00-7.677-2.902h-2.786v2.902h10.462zM21.607 20.098h14.027a11.535 11.535 0 00-1.187-2.901h-12.84v2.901zM21.607 25.902h14.027c.239-.928.366-1.9.366-2.902H21.607v2.902zM21.607 31.705h10.462c.94-.83 1.746-1.81 2.378-2.902h-12.84v2.902z" fill="#C85929" /><path d="M32.828 28.803H21.607v2.902h8.844a11.66 11.66 0 002.377-2.901zM34.382 23H21.607v2.902h12.409c.239-.928.366-1.9.366-2.902zM32.828 17.197H21.607v2.901h12.409a11.535 11.535 0 00-1.188-2.901zM22.775 11.393c-.394 0-.784.02-1.168.059v2.843h8.844a11.562 11.562 0 00-7.676-2.902z" fill="#B94029" /><path d="M21.607 34.607c6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607S10 16.59 10 23c0 6.41 5.197 11.607 11.607 11.607z" fill="#F6E266" /><path d="M13.903 31.68a11.64 11.64 0 001.91 1.38l3.184-21.372c-.776.178-1.521.434-2.229.76L13.903 31.68z" fill="#FBF4AF" /><path d="M21.607 11.393c-.211 0-.42.006-.629.017 6.118.327 10.978 5.39 10.978 11.59s-4.86 11.263-10.978 11.59c.208.01.418.017.629.017 6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607z" fill="#EAB14D" /><path d="M21.607 32.348a9.348 9.348 0 100-18.696 9.348 9.348 0 000 18.696z" fill="#E7A52E" /><path d="M21.607 13.652c-.234 0-.466.01-.695.026 4.838.356 8.652 4.393 8.652 9.322 0 4.929-3.814 8.966-8.652 9.322A9.348 9.348 0 0030.955 23a9.348 9.348 0 00-9.348-9.348z" fill="#E28424" /><path d="M14.323 28.859a9.4 9.4 0 001.855 1.751l2.454-16.474a9.311 9.311 0 00-2.285 1.136l-2.024 13.587z" fill="#EAB14D" /><path d="M21.892 17.85l1.765 2.711a.34.34 0 00.197.143l3.123.84a.34.34 0 01.177.544l-2.034 2.516a.34.34 0 00-.075.231l.166 3.23a.34.34 0 01-.462.336l-3.02-1.156a.34.34 0 00-.244 0l-3.021 1.156a.34.34 0 01-.462-.335l.166-3.23a.34.34 0 00-.075-.232l-2.033-2.516a.34.34 0 01.176-.543l3.124-.84a.34.34 0 00.197-.144l1.764-2.71a.34.34 0 01.571 0z" fill="#C85929" /><path d="M26.977 21.545l-3.123-.84a.34.34 0 01-.197-.144l-.149-.228c-.015 1.723-.263 4.496-1.484 7.025l2.725 1.043a.34.34 0 00.462-.335l-.166-3.23a.34.34 0 01.075-.232l2.034-2.516a.34.34 0 00-.177-.543z" fill="#B94029" /></svg>
          <span>{{ coin }}</span>
        </a>
      </div>
      <div 
        v-show="isLoggedIn"
        class="header__col" 
      >
        <small class="header__text header__text--small">Аккаунт</small>
        <router-link 
          :to="{ 
            name: 'Account', 
            params: { id: user }
          }" 
          class="header__text"
        >
          {{ user }}
        </router-link>
      </div>

      <router-link 
        v-show="!isLoggedIn"
        :to="{
          name: 'Auth', 
          params: {route: 'login'}
        }" 
        class="btn" 
      >
        Войти
      </router-link>
      <router-link 
        v-show="!isLoggedIn"
        :to="{
          name: 'Auth', 
          params: {route: 'register'}
        }" 
        class="btn" 
      >
        Регистрация
      </router-link>
      <button 
        v-show="isLoggedIn" 
        class="btn" 
        @click="logout"
      >
        Выйти
      </button>
    </div>    
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['user', 'isLoggedIn', 'coin', 'token', 'refreshToken',])
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  &__logo {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      margin-right: 10px;
    }
  }
}
</style>
<template>
  <div class="auth">
    <div class="auth__ball" />
    <div class="auth__content">
      <h1 class="auth__title"> pastime.</h1>
      <div class="auth__header">
        <button class="auth__btn" 
                :class="{ active: isActive('login') }"
                @click.prevent="setActive('login')"
        >
          Авторизация
        </button>
        <button class="auth__btn" 
                :class="{ active: isActive('register') }"
                @click.prevent="setActive('register')" 
        >
          Регистрация
        </button>
      </div>
      <div class="auth__tab" 
           :class="{ 'active': isActive('login') }"
      >
        <login />
      </div>
      <div class="auth__tab" 
           :class="{ 'active': isActive('register') }"
      >
        <register />
      </div>
    </div>
  </div>
</template>


<script>
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
export default {
  components: {
    Login,
    Register
  },
  props: {
    route: {
      type: String,
      default: 'login'
    }
  },
  data() {
    return {
      tab: true,
      activeMenu: 'login'
    }
  },
  mounted() {
    this.isActive(this.route),
    this.setActive(this.route)
  },
  methods: {
    isActive(activeMenu) {
      return this.activeMenu === activeMenu
    },
    setActive(activeMenu) {
      this.activeMenu = activeMenu
    }
  }  
}
</script>

<style lang="scss" scoped>
.auth {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  &__title {
    width: 100%;
    position: relative;
    z-index: 10;
    text-align: center;
    margin-bottom: 20px;
  }
  &__tab {
    display: none;
    position: relative;
    z-index: 5;
    width: 100%;
    &.active {
      display: block;
    }
  }
  &__header {
    position: relative;
    z-index: 5;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  &__ball {
    position: absolute;
    width: 400px;
    height: 400px;
    display: block;
    background: radial-gradient(50% 50% at 50% 50%, rgba(143, 124, 255, 0.07) 0%, rgba(143, 124, 255, 0.5) 100%);
    filter: blur(100px);
    z-index: 1;
  }
  &__content {
    width: 350px;
  }
  &__btn {
    width: 130px;
    height: 30px;
    background: transparent;
    border: none;
    color: #fff;
    background: rgba(#fff, .2);
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
    outline: none;
    &.active{
      background: rgba(#fff, .8);
      color: #111;
      font-weight: 600;
    }
  }
}
</style>
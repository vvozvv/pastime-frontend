<template>
  <div class="box">
    <loader :loader="loader" />
    <h1 class="box__title">Топ пользователей</h1>
    <ul class="user-list">
      <li 
        v-for="user in usersTop" 
        :key="user._id" 
        class="user-list__item"
      >
        <p class="user-list__name">{{ user.username }}</p>
        <p class="user-list__game">
          <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 23C17.851 23 23 17.851 23 11.5S17.851 0 11.5 0 0 5.149 0 11.5 5.149 23 11.5 23z" fill="#70E8A0" /><path d="M23 11.5H0C0 17.851 5.149 23 11.5 23S23 17.851 23 11.5z" fill="#00CC52" /><path d="M8.355 18.014a.673.673 0 01-.673-.674V5.66a.674.674 0 011.068-.546l8.086 5.84a.674.674 0 010 1.092l-8.086 5.84a.674.674 0 01-.395.128z" fill="#F9F9F9" /><path d="M7.682 11.5v5.84a.674.674 0 001.068.546l8.086-5.84a.674.674 0 00.28-.546H7.681z" fill="#E2DFF4" /></svg>          
          {{ user.operations.length }}
        </p>
        <div class="user-list__coin">
          <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.128 3.14v-.001l-2.785-.959-4.861.959v2.12l7.963 1.314 1.42-1.314a8.528 8.528 0 00-1.736-2.12zM16.128 15.861l-3.635-.691-4.011.691v2.12h2.036c2.13 0 4.076-.784 5.565-2.08M8.482 13.741l5.735.83 3.648-.83a8.43 8.43 0 00.868-2.12l-4.266-1.23-5.985 1.23v2.12z" fill="#151E25" /><path d="M18.733 7.38l-2.605-1.556L8.482 7.38V9.5l8.348 1.507L19 9.5c0-.732-.093-1.443-.267-2.12z" fill="#151E25" /><path d="M17.817 9.5a8.482 8.482 0 00-9.335-8.44v16.922h.854A8.482 8.482 0 0017.817 9.5z" fill="#1E272F" /><path d="M16.128 3.139a8.45 8.45 0 00-5.61-2.12H8.482v2.12h7.646zM8.482 7.38h10.25a8.432 8.432 0 00-.867-2.121H8.482v2.12zM8.482 11.62h10.25A8.5 8.5 0 0019 9.5H8.482v2.12zM8.482 15.861h7.646a8.518 8.518 0 001.737-2.12H8.482v2.12z" fill="#fff" /><path d="M16.682 13.741h-8.2v2.12h6.463a8.518 8.518 0 001.737-2.12zM17.817 9.5H8.482v2.12h9.068a8.5 8.5 0 00.267-2.12zM16.682 5.259h-8.2v2.12h9.068a8.428 8.428 0 00-.868-2.12zM9.336 1.018c-.289 0-.573.015-.854.043v2.078h6.463a8.449 8.449 0 00-5.61-2.12z" fill="#fff" /><path d="M8.482 17.982a8.482 8.482 0 100-16.964 8.482 8.482 0 000 16.964z" fill="#333F4A" /><path d="M2.852 15.843c.429.381.896.72 1.396 1.008L6.575 1.234a8.416 8.416 0 00-1.63.555L2.853 15.843z" fill="#526B7E" /><path d="M8.482 1.018c-.154 0-.307.005-.46.013a8.482 8.482 0 010 16.938 8.482 8.482 0 10.46-16.951z" fill="#324250" /><path d="M8.482 16.331a6.83 6.83 0 100-13.662 6.83 6.83 0 000 13.662z" fill="#151E25" /><path d="M8.482 2.67c-.17 0-.34.006-.508.018a6.831 6.831 0 010 13.624A6.83 6.83 0 108.482 2.67z" fill="#1E272F" /><path d="M3.16 13.781c.39.486.846.917 1.355 1.28L6.308 3.022c-.598.2-1.159.482-1.67.83l-1.479 9.93z" fill="#324250" /><path d="M8.69 5.737l1.29 1.981a.249.249 0 00.144.104l2.282.615a.249.249 0 01.13.396l-1.486 1.839a.248.248 0 00-.055.17l.121 2.36c.01.18-.17.31-.338.245l-2.207-.845a.249.249 0 00-.178 0l-2.208.845a.249.249 0 01-.337-.245l.121-2.36a.249.249 0 00-.055-.17L4.428 8.833a.249.249 0 01.13-.396l2.282-.615a.25.25 0 00.144-.104l1.29-1.981a.249.249 0 01.416 0z" fill="#fff" /><path d="M12.406 8.437l-2.282-.615a.25.25 0 01-.144-.104l-.109-.167c-.01 1.259-.192 3.285-1.084 5.134l1.991.762a.249.249 0 00.338-.245l-.121-2.36a.249.249 0 01.055-.17l1.485-1.839a.249.249 0 00-.129-.396z" fill="#fff" /></svg>
          <span>{{ formatPrice(user.coin) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Loader from './Loader.vue'

export default {
  components: { Loader },
  data() {
    return {
      loader: true
    }
  },
  computed: {
    ...mapGetters(['usersTop'])
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    toggleLoader() {
      this.loader = !this.loader
    },
    getUsers() {
      return this.$store.dispatch('getAllUsers')
      .then(() => {
        this.toggleLoader()
      })
    },
    formatPrice(value) {
      let val = (value/1).toFixed().replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
  },
 
}
</script>

<style lang="scss" scoped>
.user-list {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__name {
    width: 33%;
  }
  &__game {
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
  &__coin {
    padding: 10px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
}
</style>
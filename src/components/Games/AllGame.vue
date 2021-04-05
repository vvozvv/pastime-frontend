<template>
  <div class="box"> 
    <loader :loader="loader" />
    <div class="box__header">
      <h2 class="box__title">Игры</h2>

      <div class="box__attr">
        <div class="box__search">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" /></svg>
          <input v-model="search" type="text" placeholder="Поиск по играм">
        </div>
        <div class="box__box">
          <small class="box__title box__title--box">Сортировка</small>
          <select id="" name="" class="select" @change="changeSortType($event)">
            <option 
              v-for="(item, index) in sort" 
              :key="index" 
              :value="item.key"
            >
              {{ item.title }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="card">
      <div v-for="game in searchList" :key="game._id" class="card__item">
        <div class="card__header">
          <h3 class="card__title">{{ game.title }}</h3>
        </div>
        <div class="card__list">
          <div class="card__box">
            <small class="card__title card__title--box">Мин. ставка</small>
            <p class="card__num">
              <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.07 4.296v-.001l-3.811-1.311-6.652 1.311v2.902l10.896 1.797 1.944-1.797a11.667 11.667 0 00-2.377-2.901zM22.07 21.705l-4.974-.946-5.49.946v2.902h2.787a11.56 11.56 0 007.616-2.848M11.607 18.803l7.847 1.136 4.993-1.136c.52-.898.922-1.872 1.187-2.901l-5.838-1.683-8.19 1.683v2.902z" fill="#E7A52E" /><path d="M25.634 10.098L22.07 7.97 11.607 10.1V13l11.424 2.063L26 13c0-1.002-.127-1.974-.366-2.902z" fill="#E7A52E" /><path d="M24.382 13c0-6.41-5.197-11.607-11.607-11.607-.394 0-.784.02-1.168.059v23.155h1.168c6.41 0 11.607-5.197 11.607-11.607z" fill="#E28424" /><path d="M22.07 4.295a11.562 11.562 0 00-7.677-2.902h-2.786v2.902h10.462zM11.607 10.098h14.027a11.535 11.535 0 00-1.187-2.901h-12.84v2.901zM11.607 15.902h14.027c.239-.928.366-1.9.366-2.902H11.607v2.902zM11.607 21.705h10.462c.94-.83 1.746-1.81 2.378-2.902h-12.84v2.902z" fill="#C85929" /><path d="M22.828 18.803H11.607v2.902h8.844a11.66 11.66 0 002.377-2.901zM24.382 13H11.607v2.902h12.409c.239-.928.366-1.9.366-2.902zM22.828 7.197H11.607v2.901h12.409a11.535 11.535 0 00-1.188-2.901zM12.775 1.393c-.395 0-.784.02-1.168.059v2.843h8.844a11.562 11.562 0 00-7.676-2.902z" fill="#B94029" /><path d="M11.607 24.607c6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607S0 6.59 0 13c0 6.41 5.197 11.607 11.607 11.607z" fill="#F6E266" /><path d="M3.903 21.68c.587.522 1.226.985 1.91 1.38L8.997 1.687c-.776.178-1.521.435-2.229.76L3.903 21.68z" fill="#FBF4AF" /><path d="M11.607 1.393c-.211 0-.42.006-.629.017C17.096 1.737 21.956 6.8 21.956 13s-4.86 11.263-10.978 11.59c.208.01.418.017.629.017 6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607z" fill="#EAB14D" /><path d="M11.607 22.348a9.348 9.348 0 100-18.696 9.348 9.348 0 000 18.696z" fill="#E7A52E" /><path d="M11.607 3.652c-.234 0-.466.01-.695.026 4.838.356 8.652 4.393 8.652 9.322 0 4.929-3.814 8.966-8.652 9.322A9.348 9.348 0 0020.955 13a9.348 9.348 0 00-9.348-9.348z" fill="#E28424" /><path d="M4.323 18.859a9.401 9.401 0 001.855 1.751L8.632 4.136a9.312 9.312 0 00-2.284 1.136L4.322 18.859z" fill="#EAB14D" /><path d="M11.892 7.85l1.765 2.711a.34.34 0 00.197.143l3.123.84a.34.34 0 01.177.544l-2.033 2.516a.34.34 0 00-.076.231l.166 3.23a.34.34 0 01-.462.336l-3.02-1.156a.34.34 0 00-.244 0l-3.021 1.156a.34.34 0 01-.462-.335l.166-3.23a.34.34 0 00-.075-.232L6.06 12.088a.34.34 0 01.176-.543l3.124-.84a.34.34 0 00.197-.144l1.764-2.71a.34.34 0 01.571 0z" fill="#C85929" /><path d="M16.977 11.545l-3.123-.84a.34.34 0 01-.197-.144l-.149-.228c-.015 1.723-.263 4.496-1.484 7.025l2.725 1.043a.34.34 0 00.462-.335l-.166-3.23a.34.34 0 01.075-.232l2.034-2.516a.34.34 0 00-.177-.543z" fill="#B94029" /></svg>
              {{ game.minRate }}
            </p>
          </div>
          <div class="card__box">
            <small class="card__title card__title--box">Макс. ставка</small>
            <p class="card__num">
              <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.07 4.296v-.001l-3.811-1.311-6.652 1.311v2.902l10.896 1.797 1.944-1.797a11.667 11.667 0 00-2.377-2.901zM22.07 21.705l-4.974-.946-5.49.946v2.902h2.787a11.56 11.56 0 007.616-2.848M11.607 18.803l7.847 1.136 4.993-1.136c.52-.898.922-1.872 1.187-2.901l-5.838-1.683-8.19 1.683v2.902z" fill="#E7A52E" /><path d="M25.634 10.098L22.07 7.97 11.607 10.1V13l11.424 2.063L26 13c0-1.002-.127-1.974-.366-2.902z" fill="#E7A52E" /><path d="M24.382 13c0-6.41-5.197-11.607-11.607-11.607-.394 0-.784.02-1.168.059v23.155h1.168c6.41 0 11.607-5.197 11.607-11.607z" fill="#E28424" /><path d="M22.07 4.295a11.562 11.562 0 00-7.677-2.902h-2.786v2.902h10.462zM11.607 10.098h14.027a11.535 11.535 0 00-1.187-2.901h-12.84v2.901zM11.607 15.902h14.027c.239-.928.366-1.9.366-2.902H11.607v2.902zM11.607 21.705h10.462c.94-.83 1.746-1.81 2.378-2.902h-12.84v2.902z" fill="#C85929" /><path d="M22.828 18.803H11.607v2.902h8.844a11.66 11.66 0 002.377-2.901zM24.382 13H11.607v2.902h12.409c.239-.928.366-1.9.366-2.902zM22.828 7.197H11.607v2.901h12.409a11.535 11.535 0 00-1.188-2.901zM12.775 1.393c-.395 0-.784.02-1.168.059v2.843h8.844a11.562 11.562 0 00-7.676-2.902z" fill="#B94029" /><path d="M11.607 24.607c6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607S0 6.59 0 13c0 6.41 5.197 11.607 11.607 11.607z" fill="#F6E266" /><path d="M3.903 21.68c.587.522 1.226.985 1.91 1.38L8.997 1.687c-.776.178-1.521.435-2.229.76L3.903 21.68z" fill="#FBF4AF" /><path d="M11.607 1.393c-.211 0-.42.006-.629.017C17.096 1.737 21.956 6.8 21.956 13s-4.86 11.263-10.978 11.59c.208.01.418.017.629.017 6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607z" fill="#EAB14D" /><path d="M11.607 22.348a9.348 9.348 0 100-18.696 9.348 9.348 0 000 18.696z" fill="#E7A52E" /><path d="M11.607 3.652c-.234 0-.466.01-.695.026 4.838.356 8.652 4.393 8.652 9.322 0 4.929-3.814 8.966-8.652 9.322A9.348 9.348 0 0020.955 13a9.348 9.348 0 00-9.348-9.348z" fill="#E28424" /><path d="M4.323 18.859a9.401 9.401 0 001.855 1.751L8.632 4.136a9.312 9.312 0 00-2.284 1.136L4.322 18.859z" fill="#EAB14D" /><path d="M11.892 7.85l1.765 2.711a.34.34 0 00.197.143l3.123.84a.34.34 0 01.177.544l-2.033 2.516a.34.34 0 00-.076.231l.166 3.23a.34.34 0 01-.462.336l-3.02-1.156a.34.34 0 00-.244 0l-3.021 1.156a.34.34 0 01-.462-.335l.166-3.23a.34.34 0 00-.075-.232L6.06 12.088a.34.34 0 01.176-.543l3.124-.84a.34.34 0 00.197-.144l1.764-2.71a.34.34 0 01.571 0z" fill="#C85929" /><path d="M16.977 11.545l-3.123-.84a.34.34 0 01-.197-.144l-.149-.228c-.015 1.723-.263 4.496-1.484 7.025l2.725 1.043a.34.34 0 00.462-.335l-.166-3.23a.34.34 0 01.075-.232l2.034-2.516a.34.34 0 00-.177-.543z" fill="#B94029" /></svg>
              {{ game.maxRate }}
            </p>
          </div>
          <div class="card__box">
            <small class="card__title card__title--box">Всего игр</small>
            <p class="card__num">34</p>
          </div>
        </div>
        <div class="card__bottom">
          <div class="card__favorite">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
          <router-link :to="{path: `/${game.link}`}" class="btn btn--light">
            Играть
            <svg width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.875 19.125l11.25-11.25M7.875 7.875h11.25v11.25" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Loader from '../Loader.vue'
export default {
  components: {
    Loader,
  },
  data() {
    return {
      loader: true,
      search: null,
      currentSort: "NONE",
      games: [],
      sort: [
        {title: "Без сортировка", key: "NONE"},
        {title: "По минимальной ставке", key: "MIN"},
        {title: "По максимальной ставке", key: "MAX"},
      ]
    }
  },
  computed: {
    ...mapGetters(["activegames"]),
    searchList() {
      if (this.search) {
        return this.games.filter(game => {
          return game.title.toLowerCase().includes(this.search.toLowerCase())
        })
      } else {
        return this.activegames
      }
    }
  },
  watch: {
    activegames: function() {
      this.games = this.activegames
    }
  },
  created() {
    this.getActiveGame()
  },
  methods: {
    toggleLoader() {
      this.loader = !this.loader
    },
    getActiveGame() {
      this.$store.dispatch('getActiveGames')
      .then(() => {
        this.toggleLoader()
      })
    },
    changeSortType(event) {
      const item = event.target.value 
      let itemElement = this.sort.find(el => el.key === item)
      this.gameSort(itemElement.key)
    },
    sortByMinRate() {
      this.games = this.activegames.sort((a, b) => {
        return a.minRate - b.minRate
      })
    },
    sortByMaxRate() {
      this.games = this.activegames.sort((a,b) => {
        return a.maxRate - b.maxRate
      })
    },
    sortReset() {
      this.games = this.activegames.sort((a,b) => {
        return a - b
      })
    },
    gameSort(key) {
      if (key == "NONE") this.sortReset()
      if (key == "MIN") this.sortByMinRate()
      if (key == "MAX") this.sortByMaxRate()
      return this.activegames
    }
  },
}
</script>

<style lang="scss" scoped>
  select {
    background: transparent;
    border: none;
    color: #fff;
    font-family: inherit;
    outline: none;
    option {
      color: #000;
      background: rgba(#fff, .1);
    }
  }
  .card__num {
    display: flex;
    align-items: center;
    margin-top: 10px;
    svg {
      margin-right: 5px;
    }
  }
</style>
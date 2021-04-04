<template>
  <div class="box"> 
    <loader :loader="loader"></loader>
    <div class="box__header">
      <h2 class="box__title">Последние игры</h2>
    </div>
    <ul class="last-game">
        <li v-for="item in lastOperation" :key="item._id" class="last-game__item">
          <div class="last-game__icon"></div>
          <div class="last-game__box">
            <h3 class="last-game__username">{{getUsername(item.user_id)}}</h3>
            <!-- <h3 class="last-game__username">{{item.user_id}}</h3> -->
            <div class="last-game__footer">
              <small class="last-game__desc last-game__desc--dot">{{item.title}}</small>
              <small class="last-game__desc last-game__desc--win" v-if="item.result">+{{item.total}}</small>
              <small class="last-game__desc last-game__desc--lose" v-else>-{{item.total}}</small>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loader from '../Loader.vue'
export default {
  data() {
    return {
      loader: true
    }
  },
  components: {
    Loader
  },
  methods: {
    toggleLoader() {
      this.loader = !this.loader
    },
    getLastGames() {
      this.$store.dispatch('getLastOperation')
      .then(() => {
        this.toggleLoader()
      })
    },
    getUsername(el) {
      return Object.assign({}, ...el).username
    }
  },
  created() {
    this.getLastGames()
  },
  computed: {
    ...mapGetters(['lastOperation'])
  }
}
</script>

<style lang="scss" scoped>
.last-game {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &__item {
    display: flex;
    align-items: center;
  }
  &__icon {
    width: 40px;
    height: 40px;
    background: #8F7CFF;
    border-radius: 100%;
    margin-right: 10px;
  }
  &__desc {
    position: relative;
    &--lose {
      color: #E62929;
      font-weight: 500;
    }
    &--win {
      color: #64b043;
      font-weight: 500;
    }
    &--dot {
      padding-right: 20px;
      &::after {
        position: absolute;
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background: #fff;
        top: 5px;
        right: 7px;
      }
    }
  }
}
@media(max-width: 700px) {
  .last-game {
    flex-wrap: wrap;
    &__item {
      width: 50%;
      margin-bottom: 10px;
    }
  }
}
</style>
<template>
  <div class="admin">
    <div class="admin-header">
      <h1 class="admin-header__title">Список игр</h1>
      <button class="btn" @click.prevent="toggleTabs">{{ !addNew ? 'Добавить новую игру' : 'Закрыть' }}</button>
    </div>
    <ul v-if="!addNew" class="list game-list">
      <div class="game-list__header">
        <p class="game-list__box game-list__box--title">Название</p>
        <p class="game-list__box game-list__box--rate">ССылка</p>
        <p class="game-list__box game-list__box--rate">Min</p>
        <p class="game-list__box game-list__box--rate">Max</p>
        <p class="game-list__box switch">Активность</p>
      </div>
      <game-row 
        v-for="game in games" 
        :id="game._id"
        :key="game._id"
        :title="game.title"
        :link="game.link"
        :min-rate="game.minRate"
        :max-rate="game.maxRate"
        :description="game.description"
        :active="game.active"
      />
    </ul>
    <div v-else class="">
      <Form />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GameRow from './GameRow.vue'
import Form from './Form'
export default {
  components: {
    GameRow,
    Form
  },
  data() {
    return {
      addNew: false
    }
  },
  computed: {
    ...mapGetters(['games'])
  },
  mounted() {
    this.getGames()
  },
  methods: {
    getGames() {
      this.$store.dispatch('getGames')
    },
    toggleTabs() {
      this.addNew = !this.addNew
    }
  },
  
}
</script>

<style lang="scss" scoped>
::v-deep .game-list {
  $self: &;
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    &.active {
      background: #2B2F3B;
      .btn {
        background: #3f4452;
      }
    }
  }
  &__header {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    justify-content: space-between;
  }
  &__box {
    font-size: 12px;
    width: 150px;
    &--title {
      width: 40%;
    }
    &--rate {
      width: 15%;
      text-align: left;
    }
    .switch {
      width: 20%;
    }
  }
  &__buttons {
    display: flex;
    width: fit-content;
    .btn {
      &:first-child {
        margin-right: 5px;
      }
      padding: 0;
      width: 45px;
      svg {
        transform: scale(.9);
      }
    }
  }
  &__textarea {
    width: 100%;
    max-width: 100%;
    margin-top: 10px;
  }
  &__field {
    background: transparent;
    border: none;
    color: #fff;
    border-bottom: 1px solid #fff;
    width: 100%;
  }
}
.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
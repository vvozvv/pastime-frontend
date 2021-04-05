<template>
  <form action="" class="form form-game">
    <div class="form-game__col">
      <input v-model="title" type="text" class="form-controll" placeholder="Введите название игры">
      <input v-model="link" type="text" class="form-controll" placeholder="Url игры">
      <textarea v-model="description" name="" cols="20" rows="30" class="form-controll form-game__textarea" placeholder="Введите описание игры" />
    </div>
    <div class="form-game__col">
      <div class="form-game__row">
        <counter @rate="handleRateMin" />
        <counter @rate="handleRateMax" />
      </div>
      <div class="form-game__row">
        <p class="form-game__text">Сделать игру сразу активной?</p>
        <checkbox :edit="edit" :active="active" class="form-game__check" @checked="handleCheckbox" />
      </div>
      <button class="btn" @click.prevent="sendGame">Добавить</button>
    </div>
  </form>
</template>

<script>
import Counter from '../../Counter'
import Checkbox from '../../Checkbox'
export default {
  components: {
    Counter,
    Checkbox
  },
  data()  {
    return {
      minRate: 0,
      maxRate: 0,
      title: '',
      description: '',
      edit: false,
      active: false,
      link: null
    }
  },
  methods: {
    handleRateMin(rate) {
      this.minRate = rate
    },
    handleRateMax(rate) {
      this.maxRate = rate
    },
    handleCheckbox(active) {
      console.log(active);
      this.active = active
    },
    sendGame() {
      const game = {
        title: this.title,
        description: this.description,
        minRate: this.minRate,
        maxRate: this.maxRate,
        active: this.active,
        link: this.link
      }
      this.$store.dispatch('addGame', game)
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-game {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    &__row {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    &__check {
      margin-left: 30px;
    }
  }
  .form-game {
    &__textarea {
      height: 250px;
    }
  }
</style>
<template>
  <div class="form-game__box counter">
    <input type="string" step="50" placeholder="Минимальная ставка" v-model="thisRate" @input="sendRate" min="0" class="counter__rate">
    <div class="counter__controlls">
      <button class="counter__cont" @click.prevent="pluseRate">+</button>
      <button class="counter__cont" @click.prevent="minusRate">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thisRate: 0
    }
  },
  methods: {
    pluseRate() {
      this.thisRate += 50
      this.rate()
    },
    minusRate() {
      if (this.thisRate > 0)  {
        this.thisRate -= 50
        this.rate()
      }
    },
    rate() {
      this.$emit('rate', this.thisRate)
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  &__rate {
    width: 140px;
    background: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border: none;
    color: #ffffff;
    border-radius: 5px;
  }
  &__cont {
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 80%;
    background: rgba(#fff, .4);
    color: #212121;
    border-radius: 100%;
    margin-bottom: 4px;
    transition: .4s ease;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover {
      background: #fff;
    }
  }
  &__controlls {
    position: relative;
    left: -30px;
    top: 12px;
  }
}
</style>
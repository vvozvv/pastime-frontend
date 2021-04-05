<template>
  <div class="rate">
    <div class="rate__list">
      <button class="btn rate__btn rate__btn--1" @click="changeSum(10)">
        <span class="rate__num">10</span>
      </button>
      <button class="btn rate__btn rate__btn--2" @click="changeSum(50)">
        <span class="rate__num">20</span>
      </button>
      <button class="btn rate__btn rate__btn--3" @click="changeSum(100)">
        <span class="rate__num">100</span>
      </button>
      <button class="btn rate__btn rate__btn--4" @click="changeSum(200)">
        <span class="rate__num">200</span>
      </button>
    </div>
    <div class="rate__list" :class="{disabled: disabled}">
      <div class="rate__col">
        <p class="rate__title">Cтавка</p>
        <div class="rate__box">
          <svg width="26" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.07 3.296v-.001l-3.811-1.311-6.652 1.311v2.902l10.897 1.797 1.943-1.797a11.667 11.667 0 00-2.377-2.901zM22.07 20.705l-4.974-.946-5.49.946v2.902h2.787a11.56 11.56 0 007.616-2.848M11.607 17.803l7.847 1.136 4.993-1.136c.52-.898.922-1.872 1.187-2.901l-5.838-1.683-8.19 1.683v2.902z" fill="#E7A52E" /><path d="M25.634 9.098L22.07 6.97 11.607 9.1V12l11.424 2.063L26 12c0-1.002-.127-1.974-.366-2.902z" fill="#E7A52E" /><path d="M24.382 12c0-6.41-5.197-11.607-11.607-11.607-.395 0-.784.02-1.168.059v23.155h1.168c6.41 0 11.607-5.197 11.607-11.607z" fill="#E28424" /><path d="M22.07 3.295A11.562 11.562 0 0014.392.393h-2.786v2.902h10.462zM11.607 9.098h14.027a11.535 11.535 0 00-1.187-2.901h-12.84v2.901zM11.607 14.902h14.027c.239-.928.366-1.9.366-2.902H11.607v2.902zM11.607 20.705h10.462c.94-.83 1.746-1.81 2.378-2.902h-12.84v2.902z" fill="#C85929" /><path d="M22.828 17.803H11.607v2.902h8.844a11.66 11.66 0 002.377-2.901zM24.382 12H11.607v2.902h12.409c.239-.928.366-1.9.366-2.902zM22.828 6.197H11.607v2.901h12.409a11.535 11.535 0 00-1.188-2.901zM12.775.393c-.395 0-.784.02-1.168.059v2.843h8.844A11.562 11.562 0 0012.775.393z" fill="#B94029" /><path d="M11.607 23.607c6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607S0 5.59 0 12c0 6.41 5.197 11.607 11.607 11.607z" fill="#F6E266" /><path d="M3.903 20.68c.587.522 1.226.985 1.91 1.38L8.997.687c-.776.178-1.521.435-2.229.76L3.903 20.68z" fill="#FBF4AF" /><path d="M11.607.393c-.211 0-.42.006-.629.017C17.096.737 21.956 5.8 21.956 12s-4.86 11.263-10.978 11.59c.208.01.418.017.629.017 6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607z" fill="#EAB14D" /><path d="M11.607 21.348a9.348 9.348 0 100-18.696 9.348 9.348 0 000 18.696z" fill="#E7A52E" /><path d="M11.607 2.652c-.234 0-.466.01-.695.026 4.837.356 8.652 4.393 8.652 9.322 0 4.929-3.814 8.966-8.652 9.322a9.348 9.348 0 10.695-18.67z" fill="#E28424" /><path d="M4.323 17.859a9.401 9.401 0 001.855 1.751L8.632 3.136a9.312 9.312 0 00-2.285 1.136L4.323 17.859z" fill="#EAB14D" /><path d="M11.892 6.85l1.765 2.711a.34.34 0 00.197.143l3.123.84a.34.34 0 01.177.544l-2.033 2.516a.34.34 0 00-.075.231l.165 3.23a.34.34 0 01-.462.336l-3.02-1.156a.34.34 0 00-.244 0l-3.02 1.156a.34.34 0 01-.463-.335l.166-3.23a.34.34 0 00-.075-.232L6.06 11.088a.34.34 0 01.176-.543l3.124-.84a.34.34 0 00.197-.144l1.764-2.71a.34.34 0 01.571 0z" fill="#C85929" /><path d="M16.977 10.545l-3.123-.84a.34.34 0 01-.197-.144l-.149-.228c-.015 1.723-.263 4.496-1.484 7.025l2.725 1.043a.34.34 0 00.462-.335l-.166-3.23a.34.34 0 01.075-.232l2.034-2.516a.34.34 0 00-.177-.543z" fill="#B94029" /></svg>
          <div class="rate__inputbox">
            <input v-model="rate" type="text" class="rate__input">
            <div class="rate__controlls">
              <div class="rate__controll" @click="pluseRate">+</div>
              <div class="rate__controll" @click="minusRate">-</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rate__col">
        <p class="rate__title">Результат</p>
        <div class="rate__box">
          <svg width="26" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.07 3.296v-.001l-3.811-1.311-6.652 1.311v2.902l10.897 1.797 1.943-1.797a11.667 11.667 0 00-2.377-2.901zM22.07 20.705l-4.974-.946-5.49.946v2.902h2.787a11.56 11.56 0 007.616-2.848M11.607 17.803l7.847 1.136 4.993-1.136c.52-.898.922-1.872 1.187-2.901l-5.838-1.683-8.19 1.683v2.902z" fill="#E7A52E" /><path d="M25.634 9.098L22.07 6.97 11.607 9.1V12l11.424 2.063L26 12c0-1.002-.127-1.974-.366-2.902z" fill="#E7A52E" /><path d="M24.382 12c0-6.41-5.197-11.607-11.607-11.607-.395 0-.784.02-1.168.059v23.155h1.168c6.41 0 11.607-5.197 11.607-11.607z" fill="#E28424" /><path d="M22.07 3.295A11.562 11.562 0 0014.392.393h-2.786v2.902h10.462zM11.607 9.098h14.027a11.535 11.535 0 00-1.187-2.901h-12.84v2.901zM11.607 14.902h14.027c.239-.928.366-1.9.366-2.902H11.607v2.902zM11.607 20.705h10.462c.94-.83 1.746-1.81 2.378-2.902h-12.84v2.902z" fill="#C85929" /><path d="M22.828 17.803H11.607v2.902h8.844a11.66 11.66 0 002.377-2.901zM24.382 12H11.607v2.902h12.409c.239-.928.366-1.9.366-2.902zM22.828 6.197H11.607v2.901h12.409a11.535 11.535 0 00-1.188-2.901zM12.775.393c-.395 0-.784.02-1.168.059v2.843h8.844A11.562 11.562 0 0012.775.393z" fill="#B94029" /><path d="M11.607 23.607c6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607S0 5.59 0 12c0 6.41 5.197 11.607 11.607 11.607z" fill="#F6E266" /><path d="M3.903 20.68c.587.522 1.226.985 1.91 1.38L8.997.687c-.776.178-1.521.435-2.229.76L3.903 20.68z" fill="#FBF4AF" /><path d="M11.607.393c-.211 0-.42.006-.629.017C17.096.737 21.956 5.8 21.956 12s-4.86 11.263-10.978 11.59c.208.01.418.017.629.017 6.41 0 11.606-5.197 11.606-11.607 0-6.41-5.196-11.607-11.606-11.607z" fill="#EAB14D" /><path d="M11.607 21.348a9.348 9.348 0 100-18.696 9.348 9.348 0 000 18.696z" fill="#E7A52E" /><path d="M11.607 2.652c-.234 0-.466.01-.695.026 4.837.356 8.652 4.393 8.652 9.322 0 4.929-3.814 8.966-8.652 9.322a9.348 9.348 0 10.695-18.67z" fill="#E28424" /><path d="M4.323 17.859a9.401 9.401 0 001.855 1.751L8.632 3.136a9.312 9.312 0 00-2.285 1.136L4.323 17.859z" fill="#EAB14D" /><path d="M11.892 6.85l1.765 2.711a.34.34 0 00.197.143l3.123.84a.34.34 0 01.177.544l-2.033 2.516a.34.34 0 00-.075.231l.165 3.23a.34.34 0 01-.462.336l-3.02-1.156a.34.34 0 00-.244 0l-3.02 1.156a.34.34 0 01-.463-.335l.166-3.23a.34.34 0 00-.075-.232L6.06 11.088a.34.34 0 01.176-.543l3.124-.84a.34.34 0 00.197-.144l1.764-2.71a.34.34 0 01.571 0z" fill="#C85929" /><path d="M16.977 10.545l-3.123-.84a.34.34 0 01-.197-.144l-.149-.228c-.015 1.723-.263 4.496-1.484 7.025l2.725 1.043a.34.34 0 00.462-.335l-.166-3.23a.34.34 0 01.075-.232l2.034-2.516a.34.34 0 00-.177-.543z" fill="#B94029" /></svg>
          <p class="rate__win">{{ rateWin }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean
    }
  },
  data() {
    return {
      rate: 50,
    }
  },
  computed: {
    rateWin() {
      return this.rate * 2
    }
  },
  methods: {
    changeSum(num) {
      this.rate = num
      this.changedRateParent()
    },
    pluseRate() {
      this.rate += 10
      this.changedRateParent()
    },
    minusRate() {
      this.rate -= 10
      this.changedRateParent()
    },
    changedRateParent() {
      this.$emit('changedRateParent', this.rateWin)
    },
  },
}
</script>

<style lang="scss" scoped>
.rate {
  &__input {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    width: fit-content;
    width: 80px;
  }
  &__inputbox {
    display: flex;
  }
  &__controlls {
    position: relative;
    left: -30px;
  }
  &__controll {
    background: rgba(#fff, .15);
    width: 15px;
    height: 15px;
    font-size: 10px;
    font-weight: 500;
    border-radius: 100%;
    margin-bottom: 2px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    line-height: 100%;
  }
  &__box {
    display: flex;
    align-items: center;
    margin-top: 10px;
    svg {
      margin-right: 10px;
    }
  }
  &__title {
    color: #7F8095;
    font-size: 12px;
  }
  &__win {
    font-size: 20px;
    font-weight: 600;
  }
  &__col {
    background: #2B2F3B;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 50%;
    height: 100px;
  }
  &__num {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
    transition: .4s ease;
    &.disabled {
      pointer-events: none;
      opacity: .6;
    }
  }
  &__btn {
    position: relative;
    height: 40px;
    width: 40px;
    padding: 5px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 5px;
    outline: none;
    opacity: 0.3;
    &:hover {
      transform: none;
      opacity: .7;
    }
    &--1 {
      background-image: url(../assets/rate-bg-1.svg)
    }
    &--2 {
      background-image: url(../assets/rate-bg-2.svg)
    }
    &--3 {
      background-image: url(../assets/rate-bg-3.svg)
    }
    &--4 {
      background-image: url(../assets/rate-bg-4.svg)
    }
    &--5 {
      background-image: url(../assets/rate-bg-5.svg)
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
@media (max-width: 1000px) {
  .rate {
    &__col {
      padding: 15px;
      height: 80px;
      width: 100%;
    }
    &__title {
      font-size: 10px;
    }
    &__input {
      font-size: 14px;
      width: 60px;
    }
    &__controlls {
      left: -10px;
    }
    &__win {
      font-size: 14px;
    }
    &__btn {
      margin: 0 10px 0 0;
      width: 35px;
      height: 35px;
      font-size: 10px;
    }
  }
}
@media (max-width: 800px) {
.rate {
    &__btn {
      margin: 0 10px 0 0;
      width: 30px;
      height: 30px;
      font-size: 10px;
    }
  }
}
@media (max-width: 700px) {
  .rate {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;

  }
}
@media (max-width: 600px) {
   .rate {
    width: 100%;
    grid-template-columns: 1fr 2fr;
    &__list {
      flex-wrap: wrap;
    }
    &__col {
      width: 48%;
      margin-right: 5px;
      svg {
        display: none;
      }
    }
    &__win, &__input {
      font-size: 20px;
      line-height: 120%;
    }
  }
}
@media (max-width: 500px) {
  .rate {
    grid-template-columns: 1fr;
    grid-gap: 5px;
    &__list {
      justify-content: center;
    }
  }
  .timer {
    margin: auto;
  }
  .box-game {
    &__col {
      justify-content: center;
      text-align: center;
    }
  }
}
</style>
<template>
  <div class="box">
    <loader :loader="loader"></loader>
    <div class="box__head">
      <h1 class="box__title">21</h1>
    </div>
    <popup v-show="showPopup">
      <p class="popup__title">{{checkresult}}</p>
      <div class="popup__pay">
        <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.128 3.14v-.002l-2.785-.958-4.861.958v2.12l7.963 1.315 1.42-1.314a8.528 8.528 0 00-1.736-2.12zM16.128 15.861l-3.635-.692-4.011.692v2.12h2.036c2.13 0 4.076-.785 5.565-2.08M8.482 13.74l5.735.83 3.648-.83c.38-.656.674-1.368.868-2.12l-4.266-1.23-5.985 1.23v2.12z" fill="#151E25"/><path d="M18.733 7.38l-2.605-1.557L8.482 7.38V9.5l8.348 1.508L19 9.5c0-.733-.093-1.443-.267-2.12z" fill="#151E25"/><path d="M17.817 9.5a8.482 8.482 0 00-9.335-8.44v16.922h.854A8.482 8.482 0 0017.817 9.5z" fill="#1E272F"/><path d="M16.128 3.139a8.45 8.45 0 00-5.61-2.12H8.482v2.12h7.646zM8.482 7.38h10.25a8.432 8.432 0 00-.867-2.121H8.482v2.12zM8.482 11.62h10.25A8.5 8.5 0 0019 9.5H8.482v2.12zM8.482 15.861h7.646a8.52 8.52 0 001.737-2.12H8.482v2.12z" fill="#fff"/><path d="M16.682 13.74h-8.2v2.121h6.463a8.518 8.518 0 001.737-2.12zM17.817 9.5H8.482v2.12h9.068a8.5 8.5 0 00.267-2.12zM16.682 5.259h-8.2v2.12h9.068a8.428 8.428 0 00-.868-2.12zM9.336 1.018c-.289 0-.573.015-.854.043v2.078h6.463a8.449 8.449 0 00-5.61-2.12z" fill="#fff"/><path d="M8.482 17.982a8.482 8.482 0 100-16.964 8.482 8.482 0 000 16.964z" fill="#333F4A"/><path d="M2.852 15.843c.429.381.896.72 1.396 1.008L6.575 1.233a8.416 8.416 0 00-1.63.555L2.853 15.843z" fill="#526B7E"/><path d="M8.482 1.018c-.154 0-.307.004-.46.013a8.482 8.482 0 010 16.938 8.482 8.482 0 10.46-16.951z" fill="#324250"/><path d="M8.482 16.33a6.83 6.83 0 100-13.661 6.83 6.83 0 000 13.662z" fill="#151E25"/><path d="M8.482 2.669c-.17 0-.34.006-.508.019a6.831 6.831 0 010 13.624A6.83 6.83 0 108.482 2.67z" fill="#1E272F"/><path d="M3.16 13.781c.39.486.846.917 1.355 1.28L6.308 3.022c-.598.2-1.159.481-1.67.83L3.16 13.781z" fill="#324250"/><path d="M8.69 5.737l1.29 1.98a.249.249 0 00.144.105l2.282.614a.249.249 0 01.13.397l-1.486 1.839a.249.249 0 00-.055.169l.121 2.36c.01.18-.17.31-.338.246l-2.207-.845a.249.249 0 00-.178 0l-2.208.845a.249.249 0 01-.337-.245l.121-2.361a.249.249 0 00-.055-.17L4.428 8.834a.249.249 0 01.13-.397l2.282-.614a.25.25 0 00.144-.104l1.29-1.981a.249.249 0 01.416 0z" fill="#fff"/><path d="M12.406 8.437l-2.282-.614a.25.25 0 01-.144-.105l-.109-.167c-.01 1.259-.192 3.286-1.084 5.134l1.991.762a.249.249 0 00.338-.245l-.121-2.36a.249.249 0 01.055-.17l1.485-1.838a.249.249 0 00-.129-.397z" fill="#fff"/></svg>
        <span>{{rate}}</span>
      </div>
      <ul class="popup__list">
        <li class="popup__item">
          <p class="popup__subtitle">Ваши:</p>
          <p class="popup__val">{{userScore}}</p>
        </li>
        <li>
          <p class="popup__subtitle">Противник:</p>
          <p class="popup__val">{{computerScore}}</p>
        </li>
        <li>
          <p class="popup__subtitle">Время:</p>
          <p class="popup__val">{{time}}</p>
        </li>
      </ul>
      <div class="popup__btns">
        <button class="btn popup__btn popup__btn--icon" @click="restartGame">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8l6 4-6 4V8z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Начать заново</span>
        </button>
      </div>      
    </popup>

    <div class="box-game">
      <div class="box-game__col">
        <div class="twon">
          <div class="twon__box">
            <div class="twon__header">
              <p class="twon__text">Ваши карты</p>
              <p class="twon__score">{{userScore}}</p>
            </div>
            <ul class="twon__list">
              <li class="twon__item" v-show="!started">
                <p>А ты умный! Но так не работает</p>
                <div class="twon__back"><img src="@/assets/card-texture.png" alt=""></div>
              </li>

              <li class="twon__item" v-for="card in userCards" :key="card.id" :class="{'twon__item--open': card.open}">
                <div class="twon__front">
                  <div class="twon__suit twon__suit--top">
                    <span>{{card.rank}}</span>
                    {{card.suit}}
                  </div>
                  <div class="twon__num">{{card.rank}}</div>
                  <div class="twon__suit twon__suit--bottom">
                    <span>{{card.rank}}</span>
                    {{card.suit}}
                  </div>
                </div>
                <div class="twon__back">
                  <img src="@/assets/card-texture.png" alt="">
                </div>
              </li>
            </ul>
          </div>
          <div class="twon__box">
            <div class="twon__header">
              <p class="twon__text">Противник</p>
              <p class="twon__score">{{computerScore}}</p>
            </div>
            <ul class="twon__list">
              <li class="twon__item" v-show="!started">
                <div class="twon__back"><img src="@/assets/card-texture.png" alt=""></div>
              </li>
              <li class="twon__item" v-for="card in computerCards" :key="card.id" :class="{'twon__item--open': card.open}">
                <div class="twon__front">
                  <div class="twon__suit twon__suit--top">
                    <span>{{card.rank}}</span>
                    {{card.suit}}
                  </div>
                  <div class="twon__num">{{card.rank}}</div>
                  <div class="twon__suit twon__suit--bottom">
                    <span>{{card.rank}}</span>
                    {{card.suit}}
                  </div>
                </div>
                <div class="twon__back">
                  <img src="@/assets/card-texture.png" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="box-game__col box-game__col--description">
        <timer />
        <rate @changedRateParent="changeRate"></rate>

        <button class="btn box-game__btn start" v-show="!started" @click="startGame" v-if="isLoggedIn">Начать</button>
        <router-link :to="{name: 'Auth'}" class="btn box-game__btn start" v-else>Начать</router-link>

        <button class="btn box-game__btn" v-show="started && !endGame" @click="getRandomCard(0, true)">Еще</button>
        <button class="btn box-game__btn" v-show="!endGame && started" @click="finishGame">Закончить</button>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from '../Timer'
import Rate from '../RateBox'
import Popup from '../Popup'
import { mapGetters } from 'vuex'
import Loader from '../Loader.vue'

export default {
  props: {
    desc: {
      type: String,
    },
    cityid: {
      type: Number
    }
  },
  data() {
    return {
      started: false,
      userCards: [],
      computerCards: [],
      rate: 50,
      result: false,
      endGame: false,
      SoundOpenCard: require('@/assets/open-cart.mp3'),
      loader: false,
      form: {
        title: '21 игра',
        user_id: this.id,
        total: this.rate,
        result: this.result 
      }
    }
  },
  components: {
    Timer,
    Popup,
    Rate,
    Loader
  },
  methods: {
    toggleLoader() {
      this.loader = !this.loader
    },
    changeRate(val) {
      this.rate = val
    },
    generateCards() {
      this.$store.dispatch('generateCard')
    },
    getRandomCard(count = 0, touch = false) {
      for (let i = 0; i <= count; i++) {
        this.$store.dispatch('getRandomCard')
        if (touch) {
          this.userCards.push(this.twentyOneCurrentCard)
        } else {
          this.computerCards.push(this.twentyOneCurrentCard)
        }
      }
      
      this.addClassOpenAllOpenedCard()

      // setTimeout(() => {
      //   this.playSound(this.SoundOpenCard)
      // }, 350);
    },
    addClassOpenAllOpenedCard() {
      setTimeout(() => {
        this.userCards.map(card => card.open = true)
        this.computerCards.map(card => card.open = true)
      }, 500);
    },
    toggleStartGame() {
      this.started = !this.started
    },
    toggleEndGame() {
      this.endGame = !this.endGame
    },
    togglePopup() {
      this.$store.dispatch('showEndGamePopup')
    },
    takeComputerCards() {
      do {
       this.getRandomCard(0)
      } while (this.computerScore < 16);
    },
    startGame() {
      if (this.checkCoin) {
        this.started = !this.started
        this.getRandomCard(1, true)
        this.getRandomCard(0)
        this.$store.dispatch('startTimer')
      } else {
        this.$toast.error(`У вас не хватает монет`, {
          duration: 2000
        })
      }
      
    },
    finishGame() {
      if (!this.checkMinUserScore) {
        this.$toast.info(`Минимальный счет = 16`, {
          duration: 4000
        })
        return false
      }

      this.endGame = !this.endGame
      this.takeComputerCards()
      this.sendResultGame()
      this.$store.dispatch('resetTimer')
      
      setTimeout(() => {
        this.$store.dispatch('showEndGamePopup')
      }, 1500);
    },
    restartGame() {
      this.$store.dispatch('showEndGamePopup')
      this.$store.dispatch('stopTimer')
      this.userCards = []
      this.computerCards = []
      this.toggleEndGame()
      this.toggleStartGame()
      this.generateCards()
    },
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound)
        audio.play()
      }
    },
    sendResultGame() {
      this.result = this.checkresult == 'Ты победил!' ? true : false
      let form = {
        title: '21 очко',
        user_id: this.id,
        total: this.rate,
        result: this.result 
      }

      if (this.checkresult != 'Ничья!') {
        console.log('send');
        console.log(form);
        this.$store.dispatch('sendOperationResult', form)
      }
    }
  },
  mounted() {
    this.generateCards()
  },
  watch: {
    userScore: function() {
      if (this.userScore > 21) {
        setTimeout(() => {
          this.finishGame()
        }, 500);
      }
    }
  },
  computed: {
    ...mapGetters(['twentyOneCards', 'twentyOneCurrentCard', 'openedCards', 'showPopup', 'time', 'id', 'operationLoading', 'isLoggedIn', 'coin']),
    userScore() {
      let score = this.userCards.reduce((total, item) => total + item.value, 0)
      return score
    },
    computerScore() {
      let score = this.computerCards.reduce((total, item) => total + item.value, 0)
      return score
    },
    checkMinUserScore() {
      return this.userScore >= 16
    },
    checkCoin() {
      return (this.coin >= this.rate) ? true : false
    },
    checkresult() {
      const draw = (this.userScore == this.computerScore) ? true : false
      const draw2 = (this.userScore > 21 && this.computerScore > 21) ? true : false
      const win = (this.userScore <= 21 && this.computerScore > 21) ? true : false
      const win2 = (this.userScore <= 21 && this.computerScore < this.userScore) ? true : false
      const lose = (this.userScore > 21 && this.computerScore <= 21) ? true : false

      if ( draw || draw2  ) {
        return 'Ничья!'
      } else if ( win || win2 ) {
        return 'Ты победил!'
      } else if (lose) {
        return 'Ты проиграл!'
      } else {
        return 'Ты проиграл!'
      }
    } 
  }
}
</script>

<style lang="scss" scoped>
.twon {
  $self: &;
  &__header {
    display: flex;
    align-items: center;
  }
  &__list {
    margin: 20px 0;
    display: flex;
    align-items: center;
    max-width: 100%;
  }
  &__item {
    margin-right: 10px;
    position: relative;
    height: 200px;
    width: 150px;
    transition: .4s ease;
    font-size: 24px;
    font-weight: 800;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.15));
    &:hover {
      transform: translateY(-5px);
      opacity: .99;
    }
    &--open {
      #{$self}__front {
        transform: rotateY(360deg);
      }
      #{$self}__back {
        transform: rotateY(180deg);
      }
    }
    @for $i from 3 through 8 {
      &:nth-child(#{$i}) { 
        margin-left: -100px; 
      }
    }
  }
  &__score {
    margin-left: 10px;
    padding: 5px 10px;
    background: #fff;
    border-radius: 5px;
    color: #000;
    font-weight: 700;
  }
  &__num {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__suit {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 16px;
      margin-right: 5px;
    }
    &--top {
      top: 20px;
      left: 20px; 
    }
    &--bottom {
      bottom: 20px;
      right: 20px;
      transform: rotate(180deg);
    }
  }

  &__front,
  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    backface-visibility: hidden;
    border-radius: 10px;
    background: #fff;
  }
  &__front {
    transform: rotateY(180deg);
    padding: 20px;
    color: #000;
  }

  .red {
    color: #FF0000;
  }

  .black {
    color: #000;
  }

}
.box-game {
  &__col {
    width: 70%;
    order: 1;
    &--description {
      width: 30%;
      order: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      height: fit-content;
    }
  }
  &__btn {
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
  }
}
@media(max-width: 800px) {
  .twon {
    &__item {
      height: 130px;
      width: 100px;
      overflow: hidden;
    }
    &__back {
      img {
        width:  100%;
        object-fit: scale-down;
      }
    }
    &__front {
      padding: 10px;
    }
    &__item {
      padding: 10px;
      @for $i from 3 through 8 {
        &:nth-child(#{$i}) { 
          margin-left: -80px; 
        }
      }
    }
    &__suit {
      font-size: 12px;
      span {
        font-size: 12px;
      }
      &--top {
        top: 10px;
        left: 10px;
      }
      &--bottom {
        bottom: 10px;
        right: 10px;
      }
    }
  }
}
@media(max-width: 700px) {
  .box-game {
    &__col {
      width: 100%;
      max-width: 100%;
      flex-wrap: wrap;
      .timer {
        width: fit-content;
      }
    }
  }
  .twon {
    display: flex;
    &__box {
      width: 50%;
    }
    &__score {
      padding: 2px 5px;
      font-size: 12px;
    }
    &__text {
      font-size: 12px;
    }
  }
}
</style>
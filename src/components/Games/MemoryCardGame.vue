<template>
  <div class="box">
    <popup v-show="showPopup">
      <p class="popup__title">{{ titleGame }}</p>
      <div class="popup__pay">
        <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.128 3.14v-.002l-2.785-.958-4.861.958v2.12l7.963 1.315 1.42-1.314a8.528 8.528 0 00-1.736-2.12zM16.128 15.861l-3.635-.692-4.011.692v2.12h2.036c2.13 0 4.076-.785 5.565-2.08M8.482 13.74l5.735.83 3.648-.83c.38-.656.674-1.368.868-2.12l-4.266-1.23-5.985 1.23v2.12z" fill="#151E25" /><path d="M18.733 7.38l-2.605-1.557L8.482 7.38V9.5l8.348 1.508L19 9.5c0-.733-.093-1.443-.267-2.12z" fill="#151E25" /><path d="M17.817 9.5a8.482 8.482 0 00-9.335-8.44v16.922h.854A8.482 8.482 0 0017.817 9.5z" fill="#1E272F" /><path d="M16.128 3.139a8.45 8.45 0 00-5.61-2.12H8.482v2.12h7.646zM8.482 7.38h10.25a8.432 8.432 0 00-.867-2.121H8.482v2.12zM8.482 11.62h10.25A8.5 8.5 0 0019 9.5H8.482v2.12zM8.482 15.861h7.646a8.52 8.52 0 001.737-2.12H8.482v2.12z" fill="#fff" /><path d="M16.682 13.74h-8.2v2.121h6.463a8.518 8.518 0 001.737-2.12zM17.817 9.5H8.482v2.12h9.068a8.5 8.5 0 00.267-2.12zM16.682 5.259h-8.2v2.12h9.068a8.428 8.428 0 00-.868-2.12zM9.336 1.018c-.289 0-.573.015-.854.043v2.078h6.463a8.449 8.449 0 00-5.61-2.12z" fill="#fff" /><path d="M8.482 17.982a8.482 8.482 0 100-16.964 8.482 8.482 0 000 16.964z" fill="#333F4A" /><path d="M2.852 15.843c.429.381.896.72 1.396 1.008L6.575 1.233a8.416 8.416 0 00-1.63.555L2.853 15.843z" fill="#526B7E" /><path d="M8.482 1.018c-.154 0-.307.004-.46.013a8.482 8.482 0 010 16.938 8.482 8.482 0 10.46-16.951z" fill="#324250" /><path d="M8.482 16.33a6.83 6.83 0 100-13.661 6.83 6.83 0 000 13.662z" fill="#151E25" /><path d="M8.482 2.669c-.17 0-.34.006-.508.019a6.831 6.831 0 010 13.624A6.83 6.83 0 108.482 2.67z" fill="#1E272F" /><path d="M3.16 13.781c.39.486.846.917 1.355 1.28L6.308 3.022c-.598.2-1.159.481-1.67.83L3.16 13.781z" fill="#324250" /><path d="M8.69 5.737l1.29 1.98a.249.249 0 00.144.105l2.282.614a.249.249 0 01.13.397l-1.486 1.839a.249.249 0 00-.055.169l.121 2.36c.01.18-.17.31-.338.246l-2.207-.845a.249.249 0 00-.178 0l-2.208.845a.249.249 0 01-.337-.245l.121-2.361a.249.249 0 00-.055-.17L4.428 8.834a.249.249 0 01.13-.397l2.282-.614a.25.25 0 00.144-.104l1.29-1.981a.249.249 0 01.416 0z" fill="#fff" /><path d="M12.406 8.437l-2.282-.614a.25.25 0 01-.144-.105l-.109-.167c-.01 1.259-.192 3.286-1.084 5.134l1.991.762a.249.249 0 00.338-.245l-.121-2.36a.249.249 0 01.055-.17l1.485-1.838a.249.249 0 00-.129-.397z" fill="#fff" /></svg>
        <span>{{ rate }}</span>
      </div>
      <ul class="popup__list">
        <li class="popup__item">
          <p class="popup__subtitle">Отгадано:</p>
          <p class="popup__val">{{ turn }}/{{ cards.length / 2 }}</p>
        </li>
        <li class="popup__item">
          <p class="popup__subtitle">Ходов:</p>
          <p class="popup__val">{{ turn }}</p>
        </li>
        <li class="popup__item">
          <p class="popup__subtitle">Время:</p>
          <p class="popup__val">{{ diffTime }}</p>
        </li>
      </ul>
      <div class="popup__btns">
        <button class="btn popup__btn popup__btn--icon" @click="restartGame">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 8l6 4-6 4V8z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          <span>Начать заново</span>
        </button>
        <button class="btn popup__btn popup__btn--close" @click="restartGame">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
      </div>
      
    </popup>
    <div class="box__head">
      <h1 class="box__title box__title--fitcontent">Запомни карту</h1>
      <div class="favorite">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </div>
    </div>  
    <div id="box-game" class="box-game">
      <div class="box-game__col" :class="{'box-game__col--full': fullWidthColumnsGame}">
        <ul class="memory-card-list">
          <li v-for="(card, index) in cards" 
              :key="index" class="memory-card-list__item" 
              :class="{
                'memory-card-list__item--open': card.flipped,
                'memory-card-list__item--show': card.found
              }" 
              @click="flipCard(card)"
          >
            <div class="memory-card-list__front" />
            <div class="memory-card-list__back">
              <img :src="cardImage(card.image)" alt="" class="memory-card-list__image">
            </div>              
          </li>
        </ul>
      </div>
      <div class="box-game__col box-game__col--description">
        <div class="box-game__row">
          <timer />
          <div class="box-game__container box-game__container--outer">
            {{ moves }}
          </div>
          <div class="box-game__container box-game__container--outer">
            {{ turn }} / {{ cards.length / 2 }}
          </div>
        </div>
        <rate :disabled="started" @changedRateParent="changeRate" />
        <button v-show="!started" class="btn" @click="shuffle">Перемешать</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Timer from '../Timer'
import Popup from '../Popup'
import Rate from '../RateBox'
export default {
  components: {
    Timer,
    Popup,
    Rate
  },
  data() {
    return {
      started: false,
      moves: 0,
      turn: 0,
      rate: 50,
      fullWidthColumnsGame: false,
    }
  },
  computed: {
    ...mapGetters(['cards', 'time', 'showPopup', 'diffTime', 'id', 'isLoggedIn']),
    cardCouple() {
      return this.cards.length / 2
    },
    flippedCard() {
      return this.cards.filter(card => card.flipped)
    },
    titleGame() {
      return (this.turn == this.cardCouple) ? 'Ты спралился' : 'Ты проиграл :('
    }
  },
  watch: {
    turn: function() {
      if (this.turn == this.cardCouple) {
        this.finishGame()
      }
    },
    time: function() {
      if (this.time == "00:00") {
        this.finishGame()
      }
    },
  },
  created() {
    window.addEventListener('beforeunload', (event) => {
      if (this.started) {
        this.finishGame()
      }      
    });
    
    window.addEventListener('resize', () => {
      let boxGame = document.getElementById('box-game')
      let boxWidth = boxGame.offsetWidth
      if (boxWidth <= 900) {
        this.fullWidthColumnsGame = true
      }
    })
  },
  mounted() {
    this.cloneCards(),
    this.shuffle()
  },
  methods: {
    changeRate(val) {
      this.rate = val
    },
    shuffle() {
      this.$store.dispatch('shuffleDeck').then(() => {
        this.$toast.success(`Карты перемешаны!`, {
          duration: 2000,
        })
      })
    },
    cloneCards() {
      this.$store.dispatch('cloneCards')
    },
    cardImage(img) {
      return require(`@/assets/${img}`)
    },
    flipCard(card) {
      if (card.found || card.flipped) return;

      if (!this.isLoggedIn) {
        this.$router.push('/auth')
        return false
      }

      if (!this.started) {
        this.startGame()
      }

      if (this.flippedCard.length == 0) {
        card.flipped = !card.flipped
      } else if (this.flippedCard.length == 1) {
        card.flipped = !card.flipped
        this.checkFlippedCard()
      }
    },
    checkFlippedCard() {
      this.moves++
      if (this.flippedCard[0].id == this.flippedCard[1].id) {
        this.flippedCard.map(card => card.found = true)
        this.turn++
        this.clearFlippedCard()
      } else {
        this.clearFlippedCard()
      }
    },
    clearFlippedCard() {
      setTimeout(() => {
        this.cards.map(card => card.flipped = false)
      }, 1000)
    },
    clearFoundCard() {
      setTimeout(() => {
        this.cards.map(card => card.found = false)
      }, 500)
    },
    startGame() {
      this.started = !this.started
      this.$store.dispatch('startCountdown', 0.5)
    },
    restartGame() {
      this.moves = 0
      this.turn = 0
      
      this.clearFlippedCard()
      this.clearFoundCard()
      this.$store.dispatch('showEndGamePopup')
    },
    finishGame() {
      this.started = !this.started
      this.$store.dispatch('showEndGamePopup')
      this.$store.dispatch('differentTime', 0.5)
      this.$store.dispatch('stopTimer')
      this.shuffle()
      this.sendOperation()
    },  
    sendOperation() {
      let form = {
        title: 'Запомни карты',
        user_id: this.id,
        total: this.rate,
        result: false 
      }
      if (this.turn == this.cardCouple && this.time != "00:00") {
        form.result = true
        this.$store.dispatch('sendOperationResult', form)
        .then(() => {
          this.shuffle()
        })
      } else {
        this.$store.dispatch('sendOperationResult', form)
        .then(() => {
          this.shuffle()
        })
      }
    }
  },
}
</script>

<style lang="scss">
.box-game {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &__col {
    width: 70%;
    max-width: 70%;
    &--description {
      width: 30%;
      max-width: 30%;
      padding-left: 50px;
    }
  }
  &__row {
    display: flex;
    margin-bottom: 15px;
  }
  &__container {
    padding: 15px;
    background: #2B2F3B;
    width: fit-content;
    border-radius: 5px;
    font-size: 18px;
    white-space: nowrap;
    height: fit-content;
    &--outer {
      margin-left: 10px;
    }
  }
}
.memory-card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  $self: &;
  &.disabled {
    pointer-events: none;
    opacity: 0.7;
  }
  &__item {
    padding: 20px;
    border-radius: 10px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    &--open, &--show {
      #{$self}__front {
        transform: rotateY(180deg);
      }
      #{$self}__back {
        transform: rotateY(360deg);
      }
    }
  }
  &__image {
    max-width: 100%;
    max-height: 100%;
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
    background: #2B2F3B;
  }
  &__back {
    transform: rotateY(180deg);
    padding: 20px;
  }
  &__front {
    background: #8f7cff;
  }
}
@media(max-width: 1000px) {
  .box-game {
    &__col {
      width: 100%;
      max-width: 100%;
      order: 2;
      &--description {
        width: 100%;
        max-width: 100%;
        order: 1;
        padding-left: 0;
        display: flex;
        align-items: center;
        .btn {
          margin-left: 20px;
          margin-bottom: 15px;
        }
      }
    }
  }
  .memory-card-list {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  }
}
@media(max-width: 800px) {
  .memory-card-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media(max-width: 600px) {
  .memory-card-list {
    grid-template-columns: repeat(4, 1fr);
    &__item {
      height: 80px;
    }
  }
}
</style>
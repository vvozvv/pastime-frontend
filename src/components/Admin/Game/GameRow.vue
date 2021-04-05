<template>
  <li class="list__item game-list__item" :class="{ 'active': edit }">
    <div class="game-list__box game-list__box--title">
      <p v-if="!edit">{{ gameTitle }}</p>
      <input v-else v-model="gameTitle" type="text" class="game-list__field">
    </div>
    <div class="game-list__box game-list__box--rate">
      <p v-if="!edit">{{ linkGame }}</p>
      <input v-else v-model="linkGame" type="text" class="game-list__field">
    </div>
    <div class="game-list__box game-list__box--rate">
      <p v-if="!edit">{{ minRateTitle }}</p>
      <input v-else v-model="minRateTitle" type="text" class="game-list__field">
    </div>
    <div class="game-list__box game-list__box--rate">
      <p v-if="!edit">{{ maxRateTitle }}</p>
      <input v-else v-model="maxRateTitle" type="text" class="game-list__field">
    </div>
    <div class="switch">
      <input :id="id" v-model="activeGame" type="checkbox" class="switch__input" :disabled="!edit">
      <label :for="id" class="switch__label" :disabled="!edit" />
    </div>
    <div class="game-list__buttons">
      <button v-if="!edit" class="btn" @click.prevent="toggleEdit">
        <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.923 1.484A1.89 1.89 0 0111.197 1c.478 0 .937.174 1.275.484.338.31.528.73.528 1.168 0 .439-.19.859-.528 1.169l-8.073 7.4L1 12l.85-3.116 8.073-7.4z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
      <button v-else class="btn" @click.prevent="editGame()">
        <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.042 16.625H3.958a1.583 1.583 0 01-1.583-1.583V3.958a1.583 1.583 0 011.583-1.583h8.709l3.958 3.958v8.709a1.584 1.584 0 01-1.583 1.583z" stroke="#68DEA6" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.458 16.625v-6.333H5.542v6.333M5.542 2.375v3.958h6.333" stroke="#68DEA6" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
      <button class="btn" @click.="delete">
        <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.375 4.75h14.25M6.333 4.75V3.167a1.583 1.583 0 011.584-1.584h3.166a1.584 1.584 0 011.584 1.584V4.75m2.375 0v11.083a1.584 1.584 0 01-1.584 1.584H5.542a1.583 1.583 0 01-1.584-1.584V4.75h11.084zM7.917 8.708v4.75M11.083 8.708v4.75" stroke="#FF6E30" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
    </div>
    <textarea v-if="edit" id="" v-model="descriptionTitle" name="" cols="30" rows="10" class="form-controll game-list__textarea" />
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Не найдено"
    },
    minRate: {
      type: Number,
      required: true,
      default: 0
    },
    maxRate: {
      type: Number,
      required: true,
      default: 0
    },
    description: {
      type: String,
      required: true,
      default: "Не найдено"
    },
    id: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      edit: false,
      gameTitle: this.title,
      minRateTitle: this.minRate,
      maxRateTitle: this.maxRate,
      descriptionTitle: this.description,
      activeGame: this.active,
      idGame: this.id,
      linkGame: this.link
    }
  },
  methods: {
    delete() {
      this.$store.dispatch('deleteGame', this.idGame)
    },
    editGame() {
      const changedGame = {
        title: this.gameTitle,
        minRate: this.minRateTitle,
        maxRate: this.maxRateTitle,
        description: this.descriptionTitle,
        active: this.activeGame,
        link: this.linkGame,
        idGame: this.id
      }
      this.$store.dispatch('updateGame', changedGame)
      .then(() => {
        this.toggleEdit()
      })
    },
    toggleEdit() {
      this.edit = !this.edit
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
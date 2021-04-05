<template>
  <div class="">
    <h2>Меню</h2>
    <!-- <router-link :to="{name: 'admin-menu-form'}">Добавить элемент</router-link> -->

    <ul v-if="fullMenu">      
      <menu-row 
        v-for="item in fullMenu" 
        :id="item.id"
        :key="item._id"
        :title="item.title"
        :url="item.url"
        :active="item.active"
      />
    </ul>
    <div v-else class="">
      <p>Пункты меню отсутсвуют</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import MenuRow from './MenuRow.vue'

export default {
  components: {
    MenuRow
  },
  computed: {
    ...mapGetters(['fullMenu'])
  },
  created() {
    this.getAllMenu()
  },
  methods: {
    getAllMenu() {
      this.$store.dispatch('getAllMenu')
    }
  }
}
</script>
<template>
  <div class="">
    <h2>Меню</h2>
    <!-- <router-link :to="{name: 'admin-menu-form'}">Добавить элемент</router-link> -->

    <ul v-if="fullMenu">      
      <menu-row 
        v-for="item in fullMenu" 
        :key="item._id"
        :title='item.title'
        :url='item.url'
        :active='item.active'
        :_id='item._id'
      ></menu-row>
    </ul>
    <div class="" v-else>
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
  methods: {
    getAllMenu() {
      this.$store.dispatch('getAllMenu')
    }
  },
  created() {
    this.getAllMenu()
  },
  computed: {
    ...mapGetters(['fullMenu'])
  }
}
</script>
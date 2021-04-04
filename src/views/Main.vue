<template>
  <div class="home">
    <the-header />
    <section class="content" 
            :class="{hide: !toggleSidebar}"
    >
      <sidebar />
      <div class="content__box">
        <router-view name="stat" />
        <router-view />
        <router-view name="lastGames" />
        <the-footer /> 
      </div>
    </section>
    <mobile-header />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import Sidebar from '../components/TheSidebar'
import MobileHeader  from '../components/MobileHeader' 
import { mapGetters } from 'vuex'
export default {
  components: {
    TheHeader,
    TheFooter,
    Sidebar,
    MobileHeader
  },
  computed: {
    ...mapGetters(['toggleSidebar'])
  }
}
</script>

<style lang="scss" scoped>
  .home {
    position: relative;
  }
  .content {
    transition: .4s ease;
    &.hide {
      grid-template-columns: 50px 1fr;
      grid-gap: 30px;
    }
    &__box {
      transition: .4s ease;
    }
  }
  .box {
    position: relative;
  }
  @media(max-width: 700px) {
    .content {
      grid-template-columns: 1fr;
      &.hide {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
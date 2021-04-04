<template>
  <div>
    <the-header />
    <section class="content">
      <sidebar />
      <div class="content__box">
        <router-view />
        <router-view name="adminMenuForm" />
        
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import Sidebar from '../components/Admin/TheSidebar'
export default {
  components: {
    TheHeader,
    Sidebar
  }
}
</script>
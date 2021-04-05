<template>
  <nav class="content__nav nav">
    <ul class="nav__list">
      <li 
        :class="{active: !toggleSidebar}"
        class="nav__item hide" 
        @click="hidePanel" 
      >
        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.667 18.333L18.333 1.667M1.667 1.667h16.666v16.666" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </li>
      <li 
        v-for="item in activeMenu" 
        :key="item._id"
        class="nav__item" 
      >
        <router-link 
          :to="item.url" 
          class="nav__link"
        >
          <svg v-if="item.url == '/games'" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)" fill="#fff"><path d="M24.987 15.646c-.063-1.433-.312-3.02-.685-4.516-.374-1.432-.841-2.77-1.402-3.798-2.18-3.83-4.546-3.239-7.38-2.491-.903.218-1.868.467-2.864.56h-.312c-.996-.093-1.961-.342-2.864-.56-2.834-.717-5.2-1.34-7.38 2.522C1.54 8.39 1.04 9.729.699 11.162c-.374 1.494-.623 3.082-.686 4.515-.062 1.588.094 2.74.436 3.55.343.747.841 1.214 1.495 1.4.592.157 1.277.094 1.993-.217 1.214-.498 2.616-1.557 3.986-2.834.965-.934 2.771-1.401 4.577-1.401s3.612.467 4.577 1.401c1.37 1.277 2.772 2.336 3.986 2.834.716.28 1.401.373 1.993.218.623-.187 1.152-.623 1.495-1.433.342-.778.498-1.93.436-3.55zm-1.495 3.113c-.187.436-.436.686-.747.779-.343.093-.779.031-1.277-.156-1.09-.436-2.367-1.401-3.612-2.584-1.183-1.183-3.27-1.775-5.356-1.775s-4.173.591-5.387 1.712c-1.277 1.184-2.553 2.18-3.612 2.585-.498.187-.934.28-1.277.156-.311-.094-.56-.343-.747-.779-.25-.591-.374-1.557-.311-2.99.062-1.338.28-2.864.653-4.296.343-1.34.779-2.585 1.308-3.519C4.84 4.81 6.833 5.308 9.2 5.93c.966.25 1.962.499 3.052.592h.467c1.121-.093 2.117-.343 3.083-.592 2.366-.591 4.36-1.12 6.072 1.962.53.934.965 2.149 1.308 3.519.342 1.432.591 2.927.653 4.297.063 1.432-.062 2.398-.342 3.051z" /><path d="M9.635 9.574c-.311-.28-.685-.499-1.12-.53a1.772 1.772 0 00-.499-1.09l-.031-.03a1.764 1.764 0 00-1.277-.53c-.498 0-.965.218-1.276.53a1.81 1.81 0 00-.53 1.12c-.436.031-.81.218-1.12.498l-.032.032c-.342.342-.53.778-.53 1.276s.219.966.53 1.277c.311.311.685.498 1.152.53.031.435.218.84.53 1.12.342.343.778.53 1.276.53s.966-.218 1.277-.53c.28-.311.498-.685.53-1.12a1.66 1.66 0 001.12-.53c.343-.343.53-.779.53-1.277 0-.498-.218-.965-.53-1.276zm-.778 1.743a.634.634 0 01-.467.187h-.436a.591.591 0 00-.592.592v.405a.634.634 0 01-.187.467.634.634 0 01-.467.187.634.634 0 01-.467-.187.634.634 0 01-.187-.467v-.436a.591.591 0 00-.591-.592h-.436a.634.634 0 01-.467-.187.63.63 0 01-.187-.436c0-.186.062-.342.187-.467l.03-.03a.744.744 0 01.437-.157h.436c.311 0 .591-.249.591-.591v-.436c0-.187.063-.343.187-.467a.634.634 0 01.467-.187c.187 0 .343.062.467.187l.031.03c.094.125.156.281.156.437v.436c0 .311.25.591.592.591h.436c.187 0 .342.063.467.187.124.125.187.28.187.467a.634.634 0 01-.187.467zM17.918 9.73a1.09 1.09 0 100-2.18 1.09 1.09 0 000 2.18zM17.918 14.151a1.09 1.09 0 100-2.18 1.09 1.09 0 000 2.18zM15.707 11.94a1.09 1.09 0 100-2.18 1.09 1.09 0 000 2.18zM20.129 11.94a1.09 1.09 0 100-2.18 1.09 1.09 0 000 2.18z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h25v25H0z" /></clipPath></defs></svg>
          <svg v-if="item.url == '/favorite'" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" /></svg>
          <svg v-if="item.url == '/top'" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" /></svg>
          <span 
            v-show="toggleSidebar"
          >
            {{ item.title }}
          </span>
        </router-link>
      </li>

      <!-- <li class="nav__item">
        <a href="" class="nav__link">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Ежедневная награда
        </a>
      </li> -->
    </ul>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      hide: false
    }
  },
  computed: {
    ...mapGetters(['activeMenu', 'toggleSidebar'])
  },
  created() {
    this.getMenu(),
    this.hidePanel()
  },
  methods: {
    getMenu() {
      this.$store.dispatch('getACtiveList')
    },
    hidePanel() {
      this.$store.dispatch('toggleSidebarPanel')
    }
  },
  
  
}
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    &.hide {
      width: 50px;
      height: 50px;
      background: rgba(#fff, .1);
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .1s ease;
      opacity: .2;
      cursor: pointer;
      &.active {
        opacity: .4;
        svg {
          transform: rotate(45deg);
        }
      }
      &:hover {
        opacity: 1;
      }
      svg {
        margin-right: 0;
        transform: rotate(-135deg);
        transition: .3s ease;
      }
    }
  }
}
 @media(max-width: 700px) {
    * {
      display: none;
    }
  }
  
</style>
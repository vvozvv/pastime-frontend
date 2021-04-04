<template>
  <div class="loader" v-show="loader">
    <!-- <img src="https://opt-1289301.ssl.1c-bitrix-cdn.ru/images/spacer.gif?16010731323650" alt=""> -->
    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <path fill="#8F7CFF" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
      <animateTransform attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
</template>
<script>
export default {
  props: ['loader'],
  date() {
    return {
      loader: this.props.loader
    }
  },
  methods: {
    toggleLoader() {
      
    }
  }
}
</script>
<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(52, 58, 74, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  z-index: 10;
}

</style>
<template>
  <div class="popup-bg">
    <div class="popup">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.popup-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(#1B1E27, .85);
  z-index: 10;
  backdrop-filter: blur(2px);
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.popup {
  padding: 40px;
  background: #fff;
  color: #1B1E27;
  width: 380px;
  text-align: center;
  position: relative;
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 40px;
  }
  &__item {
    text-align: center;
  }
  &__loader {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(#fff, .9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__val {
    font-size: 24px;
    letter-spacing: -1px;
    font-weight: 700;
  }
  &__subtitle {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 300;
  }
  &__title {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 20px;
    color: #8F7CFF;
  }
  &__btn {
    &--icon {
      background: #8F7CFF;
      svg {
        margin-right: 10px;
      }
    }
    &--close {
      background: rgba(#FF917C, .4);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      padding: 10px;
    }
  }
  &__btns {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__pay {
    background: #8F7CFF;
    border-radius: 30px;
    padding: 10px 20px;
    width: fit-content;
    display: flex;
    align-items: center;
    margin: auto;
    margin-bottom: 20px;
    svg {
      margin-right: 10px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  }
}
</style>
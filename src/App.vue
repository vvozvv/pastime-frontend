<template>
  <div class="app">
    <router-view />
    <router-view name="single-game" />
  </div>
</template>

<script>
import MobileHeader  from './components/MobileHeader' 
export default {
  component: {
    MobileHeader
  }
}
</script>

<style lang="scss">
$main-font: 14px;

$color-accent: #8F7CFF;
$color-main-black: #05070F;
$color-gray-text: #7F8095;
$color-gray-text-sub: #3F3F3F;


$bg-block: rgba(#343A4A, .5);
$bg-card: #2B2F3B;

$ff: 'Inter', sans-serif;

$border-radius-main: 3px;
$border-radius-large: 10px;

.btn {
  color: #ffffff;
  background: $bg-card;
  width: fit-content;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 45px;
  border: none;
  cursor: pointer;
  font-family: $ff;
  transition: .2s ease;
  &:hover {
    opacity: 0.6;
    transform: translateY(1px);
  }
  &--light {
    background: rgba(#fff, .05);
  }
  &--accent {
    background: $color-accent;
    color: #fff;
    font-weight: 500;
  }
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-size: 14px;
  background: $color-main-black;
  font-family: $ff;
  color: #fff;
}
a {
  color: #fff;
  text-decoration: none;
}
input {
  outline: none;
  font-family: $ff;
}
input:-webkit-autofill{
   -webkit-animation-name: autofill !important;
    -webkit-animation-fill-mode: both !important;
}
li, ul {
  list-style-type: none;
}

.app {
  padding: 40px;
  max-width: 1500px;
  margin: auto;
}
.form-controll {
  display: block;
  width: 100%;
  max-width: 350px;
  height: 55px;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: .3s ease-in;
  background: rgba(#fff, .2);
  color: #ffffff;
  &:focus {
    background: rgba(#fff, .1);
    outline: none;
  }
  &:hover {
    background: rgba(#fff, .2);
  }
  &::placeholder {
    color: $color-gray-text;
  }
  
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  &__logo {
    font-size: 30px;
    font-weight: 800;
  }
  &__box {
    display: flex;
  }
  &__col {
    margin-right: 40px;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &__coin {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
      left: -90%;
    }
  }
  &__text {
    font-size: 20px;
    color: #ffffff;
    &--small {
      font-size: 12px;
      color: $color-gray-text-sub;
    }
  }
}

.content {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.box {
  background: $bg-block;
  padding: 30px;
  border-radius: $border-radius-large;
  margin-bottom: 20px;
  &__title {
    color: #ffffff;
    font-size: 26px;
    line-height: 120%;
    width: 100%;
    &--fitcontent {
      width: fit-content;
    }
    &--box {
      font-size: 12px;
      color: $color-gray-text;
      display: block;
      margin-bottom: 5px;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__head {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  &__box {
    display: flex;
    flex-direction: column;
  }
  &__attr {
    display: flex;
  }
  &__search {
    display: flex;
    align-items: center;
    input {
      background: transparent;
      border: none;
      font-family: inherit;
      color: #ffffff;
    }
    svg {
      margin-right: 10px;
    }
  }
  .favorite {
    margin-left: 20px;
  }
}
.card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  &__item {
    background: $bg-card;
    padding: 30px;
    border-radius: 10px;
  }
  &__bottom,
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__header {
    justify-content: flex-start;
  }
  &__title {
    text-align: left;
    color: #ffffff;
    font-size: 20px;
    &--box {
      color: $color-gray-text;
      padding: 0;
      font-size: 12px;
    }
  }
  &__list {
    padding: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  &__num {
    font-size: 26px;
    color: #ffffff;
    font-weight: 500;
  }
}
.nav {
  margin-top: 100px;
  &__item {
    margin-bottom: 10px;
    padding: 10px;
    width: 300px;
    border-radius: 10px;
    &.active {
      background: $bg-block;
    }
    svg {
      margin-right: 15px;
    }
  }
  &__link {
    display: flex;
    align-items: center;
  }
}
.form {
  &__box {
    margin-bottom: 10px;
  }
  .btn {
    width: 100%;
    border-radius: 5px;
  }
}
.switch{
  $self: &;
  width: 60px;
	&__input {
    height: 0;
    width: 0;
    visibility: hidden;
    &:checked + #{$self}__label {
      background: #bada55;
    }
    &:checked + #{$self}__label:after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }
  }
  &__label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 20px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
    top: -7px;
    &:disabled {
      filter: grayscale(1);
    }
    &:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 5px;
      width: 15px;
      height: 15px;
      background: #fff;
      border-radius: 90px;
      transition: 0.3s;
    }
    &:active:after {
      width: 20px;
    }
  }
}
.list {
  &__item {
    padding: 5px 10px;
    background: $bg-block;
    margin-bottom: 10px;
    border-radius: $border-radius-main;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media(max-width: 1180px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}
@media(max-width: 900px) {
  .card {
    grid-template-columns: 1fr;
  }
}
@media(max-width: 700px) {
  .box {
    &__attr {
      width: 100%;
      align-items: flex-end;
    }
    &__header {
      flex-wrap: wrap;
    }
    &__title {
      &--box {
        font-size: 10px;
      }
    }
  }
  .header {
    padding: 0 20px;
    &__col {
      &:nth-child(2) {
        display: none;
      }
    }
    &__logo {
      font-size: 20px;
    }
    &__coin {
      font-size: 16px;
      svg {
        transform: scale(0.7);
      }
    }
  }
  .app {
    padding: 20px 0 80px 0;
  }
  .btn {
    font-size: 12px;
  }
}
</style>

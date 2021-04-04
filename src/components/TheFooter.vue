<template>
  <footer class="footer">
    <div class="footer__list">
      <div class="footer__row">
        <div class="footer__box footer__box--outer">
          <p class="footer__title">Связаться</p>
          <a href="mailto:" class="footer__val">info@gameboy.ru</a>
        </div>
        <div class="footer__box">
          <p class="footer__title">Связаться</p>
          <a href="mailto:" class="footer__val">info@gameboy.ru</a>
        </div>
      </div>
      <div class="footer__box">
        <p class="footer__title">Мы в</p>
        <ul class="social">
          <li class="social__item">
            <a href="" class="social__link">INST</a>
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.667 18.333L18.333 1.667M1.667 1.667h16.666v16.666" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </li>
          <li class="social__item">
            <a href="" class="social__link">VK</a>
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.667 18.333L18.333 1.667M1.667 1.667h16.666v16.666" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 100px;
  &__list {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-size: 14px;
    color: #7F8095;
    margin-bottom: 10px;
  }
  &__val {
    font-size: 22px;
    font-weight: 600;
    transition: .4s ease;
    &:hover {
      opacity: .6;
    }
  }
  &__row {
    display: flex;
  }
  &__box {
    &--outer {
      margin-right: 20px;
    }
  }
}
.social {
  display: flex;
  &__item {
    display: flex;
    align-items: center;
    transition: .2s ease;
    margin-right: 20px;
    &:hover {
      svg {
        transform: rotate(45deg);
        opacity: .4;
      }
    }
  }
  &__link {
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    transition: .2s ease;
  }
  svg {
    transition: .2s ease;
  }
}
@media(max-width: 900px)  {
  .footer {
    &__val {
      font-size: 20px;
    }
  }
  .social {
    &__link {
      font-size: 16px;
    }
  }
}

@media(max-width: 700px)  {
  .footer {
    margin-top: 50px;
    padding: 20px;
    &__row {
      width: 100%;
      margin-bottom: 30px;
    }
    &__list {
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__box {
      width: 45%;
    }
  }
}
</style>
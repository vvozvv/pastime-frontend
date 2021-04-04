<template>
  <div>
    <form class="login form" @submit.prevent="login" :class="{focused:focused}">
      <div class="form__box">
        <label class="form__title">Почта</label>
        <input required v-model="email" type="text" placeholder="yourmail@mail.ru" class="form-controll" :class="isEmailValid" autocomplete="off" />
      </div>
      <div class="form__box">
        <label class="form__title">Пароль</label>
        <input required :class="{valid: valid_password}" v-model="password" type="password" placeholder="Пароль" class="form-controll" @input="checkPassword" autocomplete="off" />
      </div>
      <div class="form__box">
        <label class="form__title">Повторите пароль</label>
        <input required :class="{valid: valid_password}" v-model="passwordConfirm" type="password" placeholder="Повторите пароль" class="form-controll" @input="checkPassword" autocomplete="off" />
      </div>
      <div class="form__box">
        <label class="form__title">Никнейм</label>
        <input required v-model="username" type="text" placeholder="superplayer" class="form-controll" :class="isUsernameValid" />
      </div>
      <ul class="form__list"> 
        <li class="form__item" :class="{ is_valid: contains_eight_characters }">8 символов</li>
        <li class="form__item" :class="{ is_valid: contains_number }">Используйте цифры</li>
        <li class="form__item" :class="{ is_valid: contains_uppercase }">Используйте заглавные буквы</li>
        <li class="form__item" :class="{ is_valid: contains_special_character }">Используйте специальные символы</li>
        <li class="form__item" :class="{ is_valid: confirm_password }">Пароли не совпадают</li>
      </ul>
      <button type="submit" class="btn btn--accent">Зарегистрироваться</button>
   </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      password: '',
      username: '',
      passwordConfirm: false,
      password_length: 0,
      contains_eight_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_special_character: false,
      valid_password: false,
      confirm_password: false,
      error: []
    }
  },
  methods: {
    ...mapActions([
      'registerUser',
    ]),
    login() {
      if (this.checkCompleteForm) {
        this.registerUser({email: this.username, password: this.password, username: this.username})
        .then(() => {
          this.$router.push('/games')
        })
        .catch((e) => {
          this.$toast.error(`Пользователь с таким никнеймом уже есть!`, {
            duration: 4000
          })
        })
      } else {
        this.$toast.warning(`Форма не валидна. Заполните верно!`, {
          duration: 4000
        })
      }
    },
    
    checkPassword() {
      this.password_length = this.password.length;
			const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
			
      this.contains_eight_characters = (this.password_length > 8) ? true : false;			
      this.contains_number = /\d/.test(this.password);
      this.contains_uppercase = /[A-Z]/.test(this.password);
			this.contains_special_character = format.test(this.password);
      this.confirm_password = (this.password === this.passwordConfirm) ? true : false
      
      if (this.contains_eight_characters === true &&
					this.contains_special_character === true &&
					this.contains_uppercase === true &&
					this.confirm_password === true &&
					this.contains_number === true) {
						this.valid_password = true;			
      } else {
        this.valid_password = false;
      }
    }
  },
  watch: {
    passwordConfirm: function() {
      if (this.password === this.passwordConfirm) {
        this.error = []
      } else {
        console.log('Пароли не совпадают');
      }
    }
  },
  computed: {
    isEmailValid: function() {
      return (this.email == "")? "" : (this.reg.test(this.email)) ? 'valid' : 'error';
    },
    isUsernameValid: function() {
      return (this.username.length > 5) ? 'valid' : 'error';
    },
    checkCompleteForm: function() {
      if (this.valid_password == true && this.isEmailValid == 'valid' && this.isUsernameValid == 'valid') {
        return true
      } else {
        return false
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__title {
    margin-bottom: 5px;
    display: block;
    font-size: 14px;
    color: #7F8095;
  }
  &__item {
    color: #7F8095;
    list-style-type: disc;
    left: 20px;
    position: relative;
    &.is_valid {
      display: none;
    }
  }
  .form-controll {
      border: 1px solid #E62929;
      color: #fff;
      &::placeholder {
        color: #7F8095;
      }
      &:-webkit-autofill{
        box-shadow:inset 0 0 0 1000px #514F6D;
      }
    &.valid {
      border: 1px solid green;
    }
  }
  .btn {
    margin-top: 10px;
  }
}
</style>
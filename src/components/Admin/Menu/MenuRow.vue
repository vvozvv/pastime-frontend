<template>
  <li class="list__item table-row">
    <template v-if="edit">
      <p>{{itemTitle}}</p>
      <p>{{itemUrl}}</p>
    </template>
    <template v-else>
      <input type="text" :name="itemId" :placeholder="itemTitle" v-model="itemTitle" class="table-row__input">
      <input type="text" :name="itemUrl" :placeholder="itemUrl" v-model="itemUrl" class="table-row__input">
    </template>  
    

    <div class="switch">
      <input type="checkbox" id="switch" class="switch__input" :checked='checked' :disabled="edit"/>
      <label for="switch" class="switch__label" :disabled="edit"></label>
    </div>
    <div class="table-row__btn">
      <button class="btn" v-if="edit" @click="toggleEdit">Изменить</button>
      <button class="btn" v-else @click.prevent="changeItemMenu">Сохранить</button>
      <button class="btn" @click.prevent="removeItem(itemId)">Удалить</button>
    </div>
  </li>
</template>
<script>
export default {
  props: ['title', 'url', 'active', '_id'],
  data() {
    return {
      itemId: this._id,
      itemTitle: this.title, 
      itemUrl: this.url,
      checked: this.active,
      edit: true
    }
  },
  methods: {
    changeMenu() {
      this.checked = !this.checked
      this.changeItemMenu()
      console.log(this.checked);
    },
    removeItem(id) {
      if (confirm('Точно хотите удалить?')) {
        this.$store.dispatch('removeItem', id)
      } else {
        return false
      } 
    },
    changeItemMenu() {
      this.toggleCheked()
      this.toggleEdit()
      if (confirm('ВЫ точно хотите изменить элемент?')) {
        const itemMenu = {
          title: this.itemTitle,
          url: this.itemUrl,
          active: this.checked,
          _id: this.itemId
        }
        this.$store.dispatch('changeItemMenu', itemMenu)
      } else {
        return false
      }
    },
    toggleCheked() {
      this.checked = !this.checked
    },
    toggleEdit() {
      this.edit = !this.edit
    }
  },
}
</script>

<style lang="scss" scoped>
.table-row {
  &__input {
    background: transparent;
    border: none;
    color: #fff;
    border-bottom: 1px solid #f9f9f9;
    padding: 5px;
  }
  &__btn {
    display: flex;
  }
}
</style>
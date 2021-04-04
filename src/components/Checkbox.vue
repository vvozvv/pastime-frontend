<template>
  <div class="switch">
    <input type="checkbox" id="switch" class="switch__input" :checked='checkedComp' :disabled="editComp" @change="handleCheckbox"/>
    <label for="switch" class="switch__label" :disabled="editComp" @click.prevent="toggleCheckbox"></label>
  </div>
</template>

<script>
export default {
  props: ['active', 'edit'],
  data() {
    return {
      checkedComp: this.active,
      editComp: this.edit
    }
  },
  methods: {
    toggleCheckbox() {
      this.checkedComp = !this.checkedComp
      this.handleCheckbox()
    },
    handleCheckbox() {
      this.$emit('checked', this.checkedComp)
    }
  }
}
</script>
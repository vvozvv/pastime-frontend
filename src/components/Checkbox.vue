<template>
  <div class="switch">
    <input id="switch" type="checkbox" class="switch__input" :checked="checkedComp" :disabled="editComp" @change="handleCheckbox">
    <label for="switch" class="switch__label" :disabled="editComp" @click.prevent="toggleCheckbox" />
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    edit: Boolean,
  },
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
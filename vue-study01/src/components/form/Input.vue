<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ""
    },
    value1:{
      type: String,
      default: '1'
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);

      this.$parent.$emit('validate');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

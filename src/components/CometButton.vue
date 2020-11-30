<template>
  <main v-on:click="emitClick">
    <slot>Click me</slot>
  </main>
</template>

<script>
export default {
  name: "CometButton",
  methods: {
    emitClick: function() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped lang="scss">
main {
  padding: 5px;
  cursor: pointer;
  border: 1px solid #dddddd;
  user-select: none;

  &:hover {
    background-color: #d7d7d7;
    box-shadow: 3px 3px 10px grey;
  }

  &:active {
    box-shadow: 3px 3px 5px grey;
  }
}
</style>

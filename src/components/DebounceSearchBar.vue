<template>
  <input @input="debounceSearch" placeholder="Buscar libro" />
</template>

<script>
import { debounce } from "debounce";

export default {
  name: "DebounceSearchBar",
  methods: {
    debounceSearch: debounce(function (e) {
      this.$emit("search", e.target.value)
    }, 300),
  },
}
</script>

<style scoped lang="scss">
</style>

<template>
  <tr>
    <td>{{ book.title }}</td>
    <td>{{ book.author }}</td>
    <td>{{ book.isbn }}</td>
    <td><comet-button v-on:click="removeBookFromStore(book)">-</comet-button></td>
  </tr>
</template>

<script>
import CometButton from "./CometButton.vue"


export default {
  components: { CometButton },
  name: "ListBook",
  props: {
    book: {},
  },
  methods: {
    removeBookFromStore: function(book) {
      this.$store.dispatch("removeBook", book);
    }
  }
}
</script>

<style scoped lang="scss">
</style>

<template>
  <div class="about">
    <h1>Biblioteca</h1>

    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <list-book v-for="book in books" :key="book.isbn" :book="book" />
    </table>
  </div>
</template>

<script>
import ListBook from "@/components/ListBook.vue";

export default {
  name: "Home",
  components: { ListBook },
  computed: {
    books() {
      return this.$store.getters.books
    }
  },
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  background-color: #eaeaea;

  th {
    border-bottom: 1px solid black;
  }
}
</style>

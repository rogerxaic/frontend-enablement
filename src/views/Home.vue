<template>
  <div class="home">
    <book-searcher />
  </div>
</template>

<script>
import BookSearcher from '../components/BookSearcher.vue';

export default {
  name: "Home",
  components: {
    BookSearcher,
  }
};
</script>
<style lang="scss" scoped>
.home {
  margin: 0 20px;
}
</style>

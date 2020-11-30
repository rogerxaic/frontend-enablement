<template>
  <div class="search">
      <debounce-search-bar @search="search" />

      <div class="search-results">
        <div
          class="search-result"
          v-for="book in books"
          :book="book"
          :key="book.isbn"
        >
          <span>
            {{ book.title }} por <span class="author">{{ book.author }}</span>
          </span>
          <comet-button class="add-book" v-on:click="addBookToStore(book)"> + </comet-button>
        </div>
      </div>
      <div v-if="searching">
        Loading...
      </div>
    </div>
</template>

<script>
import DebounceSearchBar from "@/components/DebounceSearchBar.vue";
import CometButton from "@/components/CometButton.vue";
import {search} from "@/services/book-service"

export default {
  name: "BookSearcher",
  components: {
    DebounceSearchBar,
    CometButton,
  },
  data() {
    return {
      searchResults: [],
      searching: false,
    }
  },
  methods: {
    search: async function(searchTerm) {
      this.searchResults = []
      this.searching = true;
      this.searchResults = await search(searchTerm)
      this.searching = false;
    },
    addBookToStore: function(book) {
      this.$store.dispatch('addBook', book)
      this.searchResults = []
    }
  },
  computed: {
    books() {
      return this.searchResults.slice(0, 5);
    }
  },
}
</script>

<style scoped lang="scss">
.search {
  $height: 45px;

  input {
    box-sizing: border-box;

    padding: 0 15px;
    width: 100%;
    height: $height;
    font-size: 20pt;
  }

  .search-result {
    background-color: #f2f2f2;

    border-bottom: 1px solid black;

    height: $height;
    padding: 0 15px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .author {
      font-style: italic;
    }

    .add-book {
      margin-left: 20px;
    }

    &:hover {
      background-color: #eaeaea;
    }
  }
}
</style>

import { createStore } from "vuex";

export default createStore({
  state: {
    books: [],
  },
  getters: {
    books: (state) => state.books,
  },
  mutations: {
    addBook(state, book) {
      state.books = [...state.books.filter(b => b.isbn !== book.isbn), book]
    },
    removeBook(state, book) {
      state.books = [...state.books.filter(b => b.isbn !== book.isbn)]
    }
  },
  actions: {
    async addBook(context, book) {
      context.commit("addBook", book);
    },
    removeBook(context, book) {
      context.commit("removeBook", book)
    }
  },
  modules: {},
});

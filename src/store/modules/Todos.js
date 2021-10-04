const state = {
  todos: [
    {
      title: "First",
      isDone: false,
      id: 0,
    },
    {
      title: "Second",
      isDone: false,
      id: 1,
    },
    {
      title: "Third",
      isDone: false,
      id: 2,
    },
  ],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  setTodo({ commit }, id) {
    commit("toggleTodo", id);
  },
};

const mutations = {
  toggleTodo: (state, id) => (state.todos[id].isDone = !state.todos[id].isDone),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

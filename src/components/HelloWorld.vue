<template>
  <div class="hello">
    <div
      class="todo"
      v-for="(todo, idx) in allTodos"
      :key="idx"
      v-html="todo.title"
      @click="setTodo(todo.id)"
    ></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
    computed: {
      ...mapGetters(["allTodos"]),
    },
    methods: {
      ...mapActions(["setTodo"]),
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

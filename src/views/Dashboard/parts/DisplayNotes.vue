<template>
  <section class="display-notes">
    <note
      v-for="(data, idx) in notes"
      :key="idx"
      :title="data.title"
      :description="data.description"
      :color="data.color"
    />
  </section>
</template>

<script>
  import { getNotes } from "@/services/notes";

  import Note from "./Note.vue";
  export default {
    name: "DisplayNotes",
    components: {
      Note,
    },
    data() {
      return {
        notes: [],
      };
    },
    created() {
      const id = localStorage.getItem("id");
      getNotes(id)
        .then((data) => {
          console.log(data.data);
          this.notes = data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    props: {
      newnote: {
        type: Object,
        // default: {},
      },
    },
    watch: {
      newnote() {
        this.notes = [...this.notes, this.newnote];
      },
    },
  };
</script>

<style scoped lang="scss">
  .display-notes {
    // background: #ccc;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    padding: 0 1rem;
  }
</style>

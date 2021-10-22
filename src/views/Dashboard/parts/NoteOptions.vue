<template>
  <aside class="note-options">
    <button class="reminder icon">
      <i class="bi bi-bell"></i>
    </button>
    <button class="add-user icon">
      <i class="bi bi-person-plus"></i>
    </button>
    <button class="color icon">
      <i class="bi bi-palette"></i>
    </button>
    <button class="gallery icon">
      <i class="bi bi-image"></i>
    </button>
    <button @click="archiveNote()" class="archive icon">
      <i class="bi bi-archive"></i>
    </button>
    <button class="more icon">
      <i class="bi bi-three-dots-vertical"></i>
    </button>
  </aside>
</template>

<script>
  // service
  import { setArchiveNote } from "@/services/notes";

  export default {
    name: "NoteOptions",
    props: {
      archiveid: {
        type: String,
      },
    },
    methods: {
      archiveNote() {
        if (this.archiveid) {
          console.log(this.archiveid);
          setArchiveNote(this.archiveid)
            .then(() => {
              this.$emit("removearchivednote");
            })
            .catch((err) => {
              console.error(err);
            });
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .note-options {
    display: flex;
    gap: 1rem;
    align-items: center;

    button.icon {
      background: inherit;
      border: none;
      outline: none;
      padding: 6px;
      border-radius: 1000px;

      &:hover {
        // background: #f9f9f9;
        cursor: pointer;
      }
    }
  }
</style>

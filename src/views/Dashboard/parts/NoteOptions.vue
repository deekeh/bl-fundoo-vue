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
    <button @click="deleteNote()" class="more icon">
      <i class="bi bi-three-dots-vertical"></i>
    </button>
    <form class="color-palette">
      <!-- <div v-for="(color, idx) in colors" :key="idx" class="color-item">
        <input type="radio" :name="color" :id="color" />
        <label :for="color"></label>
      </div> -->
      <palette-color
        v-for="(color, idx) in colors"
        :key="idx"
        :color="`#${color}`"
        v-on:selectedcolor="(c) => $emit('selectedcolor', c)"
      />
    </form>
  </aside>
</template>

<script>
  // service
  import { setArchiveNote, setDeleteNote } from "@/services/notes";

  import PaletteColor from "./PaletteColor.vue";

  export default {
    name: "NoteOptions",
    props: {
      archiveid: {
        type: String,
      },
    },
    components: {
      PaletteColor,
    },
    data() {
      return {
        colors: [
          "fff",
          "F28B82",
          "FBBC04",
          "FFF475",
          "CCFF90",
          "A7FFEB",
          "CBF0F8",
          "AECBFA",
          "D7AEFB",
          "FDCFE8",
          "E6C9A8",
          "E8EAED",
        ],
      };
    },
    methods: {
      archiveNote() {
        if (this.archiveid) {
          setArchiveNote(this.archiveid)
            .then(() => {
              this.$emit("removearchivednote");
            })
            .catch((err) => {
              console.error(err);
            });
        }
      },
      deleteNote() {
        if (this.archiveid) {
          setDeleteNote(this.archiveid)
            .then(() => {
              this.$emit("removedeletednote");
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
  // animation mixin
  // @mixin hovershow() {

  // }
  .note-options {
    display: flex;
    gap: 1rem;
    align-items: center;
    position: relative;
    @media screen and (max-width: 576px) {
      gap: normal;
    }

    .color-palette {
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 0 4px #777;
      position: absolute;
      left: 5.5rem;
      bottom: 1.5rem;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
      padding: 4px;

      opacity: 0;
      visibility: hidden;
      transition: opacity 150ms linear, visibility 150ms linear;
    }
    button.color:hover ~ form.color-palette,
    form.color-palette:hover {
      opacity: 1;
      visibility: visible;
      // display: none;
      // background: #f00;
    }

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

<template>
  <section class="add-note-outer">
    <form @submit.prevent="submitNote()" class="add-note">
      <div class="top">
        <input
          type="text"
          name="title"
          v-model="title"
          class="title"
          placeholder="Title"
        />
        <button class="pin">
          <i class="bi bi-pin"></i>
        </button>
      </div>
      <div class="bottom">
        <textarea
          name="note-decription"
          id="note-description"
          placeholder="Take a note..."
          v-model="description"
        ></textarea>
        <footer class="bottom-footer">
          <note-options v-on:selectedcolor="(c) => setNoteColor(c)" />
          <div class="right">
            <button type="submit" class="close">Close</button>
          </div>
        </footer>
      </div>
    </form>
  </section>
</template>

<script>
  // service
  import { addNote } from "@/services/notes";

  import NoteOptions from "./NoteOptions.vue";
  export default {
    name: "AddNote",
    components: {
      NoteOptions,
    },
    data() {
      return {
        title: "",
        description: "",
        color: "#fff",
      };
    },
    methods: {
      submitNote() {
        const body = {
          title: this.title,
          description: this.description,
          color: this.color,
        };
        // console.log(body);
        addNote(body)
          .then((res) => {
            // console.log(res);

            // reset all values
            this.title = "";
            this.description = "";
            this.color = "#fff";

            // emit that the note is added to display in all notes section
            this.$emit("note-added", res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      },
      setNoteColor(c) {
        this.color = c;
        // console.log(this.color);
      },
    },
  };
</script>

<style scoped lang="scss">
  section.add-note-outer {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      padding: 0 1rem;
    }

    .add-note {
      border-radius: 8px;
      box-shadow: 0 0 8px #777;
      padding: 0.5rem;
      width: calc(min(600px, 100%));
      @media screen and (min-width: 576.1px) and (max-width: 1024px) {
        width: 100%;
      }

      display: flex;
      flex-direction: column;
      gap: 1rem;

      .top {
        display: none;
        input.title {
          border: none;
          outline: none;
        }
        button.pin {
          background: inherit;
          border: none;
          outline: none;
          padding: 0.5rem;
          border-radius: 1000px;

          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            cursor: pointer;
            background: #eee;
          }
        }
      }

      .bottom {
        textarea {
          resize: none;
          width: 100%;
          border: none;
          outline: none;
          transition: height 1s linear;
          margin-top: 4px;
        }

        .bottom-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .right {
            button {
              background: inherit;
              border: none;
              border-radius: 4px;
              outline: none;
              padding: 0.8rem 1.5rem;
              &:hover {
                background: #f9f9f9;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    &:focus-within {
      .add-note {
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          input.title {
            width: 100%;
          }
        }
        .bottom {
          textarea {
            height: 100px;
          }
        }
      }
    }
  }
</style>

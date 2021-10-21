<template>
  <section class="add-note-outer">
    <div class="add-note">
      <div class="top">
        <input type="text" name="title" class="title" placeholder="Title" />
        <button class="pin">
          <i class="bi bi-pin"></i>
        </button>
      </div>
      <div class="bottom">
        <textarea
          name="note-decription"
          id="note-description"
          placeholder="Take a note..."
        ></textarea>
        <footer class="bottom-footer">
          <note-options />
          <div class="right">
            <button class="close">Close</button>
          </div>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
  import NoteOptions from "./NoteOptions.vue";
  export default {
    name: "AddNote",
    components: {
      NoteOptions,
    },
  };
</script>

<style scoped lang="scss">
  section.add-note-outer {
    display: flex;
    justify-content: center;

    .add-note {
      border-radius: 8px;
      box-shadow: 0 0 8px #777;
      padding: 0.5rem;
      width: calc(min(600px, 100%));

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

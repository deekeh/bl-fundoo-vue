<template>
  <section
    class="note"
    :style="{
      '--bg-color': color,
    }"
  >
    <button class="select-note">
      <i class="bi bi-check2"></i>
    </button>
    <div class="data">
      <h2 class="title" v-html="title"></h2>
      <p class="description" v-html="description"></p>
    </div>
    <div v-if="showoptions" class="note-options-outer">
      <note-options />
    </div>
  </section>
</template>

<script>
  import NoteOptions from "./NoteOptions.vue";
  export default {
    name: "Note",
    components: {
      NoteOptions,
    },
    props: {
      title: {
        type: String,
        default: "Empty title",
      },
      description: {
        type: String,
        default: "Empty description",
      },
      color: {
        type: String,
        default: "#fff",
      },
      showoptions: {
        type: Boolean,
        default: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  // hiding animations
  $animation-speed: 200ms;
  @mixin hide-animation() {
    visibility: hidden;
    opacity: 0;
    transition: visibility $animation-speed linear,
      opacity $animation-speed linear;
  }
  @mixin show-animation() {
    visibility: visible;
    opacity: 1;
  }

  .note {
    background: var(--bg-color);
    border: solid 1px #e0e0e0;
    border-radius: 8px;
    position: relative;
    padding: 1rem;

    width: 267px;

    button.select-note {
      &:hover {
        cursor: pointer;
      }
      border: none;
      outline: none;
      border-radius: 1000px;
      background: #333;
      // padding: 4px;

      height: 1.2rem;
      width: 1.2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: -0.6rem;
      left: -0.6rem;

      i {
        color: #fff;
      }
    }

    .note-options-outer,
    button.select-note {
      @include hide-animation();
    }
    &:hover {
      .note-options-outer,
      .select-note {
        @include show-animation();
      }
    }

    .data {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .title,
      .description {
        font-size: 1rem;
      }

      .title {
        font-weight: 600;
      }

      .description {
        margin-bottom: 1rem;
        display: inline;
      }
    }
  }
</style>

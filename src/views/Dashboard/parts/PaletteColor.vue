<template>
  <div
    class="color-item"
    :style="{
      '--bg-color': `${color}`,
      '--border-color': `${color === '#fff' ? '#ddd' : color}`,
    }"
    @click="$emit('selectedcolor', color)"
  >
    <input
      type="radio"
      name="color"
      :id="color.split('#')[1]"
      v-model="radioSelected"
    />
    <label :for="color.split('#')[1]"></label>
  </div>
</template>

<script>
  export default {
    name: "PaletteColor",
    props: {
      color: {
        type: String,
        default: "#fff",
      },
    },
    // created() {
    //   console.log(this.color);
    // },
    data() {
      return {
        radioSelected: "",
      };
    },
    watch: {
      radioSelected() {
        // console.log(this.color);
        this.$emit("selectedcolor", this.color);
      },
    },
  };
</script>

<style scoped lang="scss">
  .color-item {
    label::before {
      border: solid 1px var(--border-color);
      content: "";
      display: inline-block;
      height: 1.1rem;
      width: 1.1rem;
      // padding: 0.1rem;
      background: var(--bg-color);
      border-radius: 1000px;

      // display: inline-flex;
      // justify-content: center;
      // align-items: center;
      // font-size: 0.8rem;
      // line-height: 1;
      // margin: 0;
      // padding: 0;
    }
    input[type="radio"] {
      // display: none;

      &:checked {
        display: inline;
      }

      &:checked ~ label::before {
        border-color: #333;
        background: #f00;
      }
    }

    &:hover {
      label::before {
        cursor: pointer;
        border: solid 1px #000;
      }
    }
  }
</style>

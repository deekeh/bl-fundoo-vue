<template>
  <section
    @click="close"
    class="toast"
    :class="[tState ? 'visible' : '', theme]"
  >
    {{ toastmessage }}
    <!-- <button class="close" @click="close">
      x
    </button> -->
  </section>
</template>

<script type="module" src="./Toast.js"></script>

<style scoped lang="scss">
  @import "./Toast";
</style>

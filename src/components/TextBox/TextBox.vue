<template>
  <div class="text-box-container">
    <input type="text" id="txt" :name="name" :placeholder="placeholder" />
    <label for="txt" v-if="label" v-html="label"></label>
  </div>
</template>

<script type="module" src="./TextBox.js"></script>

<style lang="scss">
  @import "./TextBox";
</style>
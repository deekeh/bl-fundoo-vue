<template>
  <div class="text-box">
    <div
      class="text-box-container"
      :style="{
        '--theme': color,
      }"
    >
      <input
        :type="type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        v-model="value"
        :class="[error ? 'error' : '']"
        @input="$emit('update:value', value)"
      />
      <label
        :for="name"
        v-if="label"
        v-html="label"
        :class="[error ? 'error' : '']"
      ></label>
    </div>
    <small
      class="error-text"
      :class="[error ? 'is-visible' : '']"
      v-html="error ? `${exclamation}${error}` : '&nbsp;'"
    ></small>
  </div>
</template>

<script type="module" src="./TextBox.js"></script>

<style lang="scss">
  @import "./TextBox";
</style>

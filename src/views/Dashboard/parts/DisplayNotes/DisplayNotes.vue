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

<script type="module" src="./DisplayNotes.js"></script>

<style scoped lang="scss">
  @import "./DisplayNotes";
</style>

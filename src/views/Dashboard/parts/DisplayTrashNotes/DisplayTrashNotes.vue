<template>
  <section class="display-trash-notes">
    <note
      v-for="(data, idx) in notes"
      :key="idx"
      :title="data.title"
      :description="data.description"
      :color="data.color"
      :showoptions="false"
    />
  </section>
</template>

<script type="module" src="./DisplayTrashNotes.js"></script>

<style scoped lang="scss">
  @import "./DisplayTrashNotes.scss";
</style>

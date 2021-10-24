<template>
  <section class="display-notes">
    <edit-note
      v-if="editStatus"
      :title="editingNote.title"
      :description="editingNote.description"
      :color="editingNote.color"
      :noteid="editingNote.noteid"
      v-on:editnotesubmitted="n => toggleEditNote(n)"
    />
    <note
      v-for="(data, idx) in notes"
      :key="idx"
      :title="data.title"
      :description="data.description"
      :color="data.color"
      :noteid="data._id"
      v-on:removearchivednote="(noteid) => removeNote(noteid)"
      v-on:removedeletednote="(noteid) => removeNote(noteid)"
      v-on:noteselected="(n) => toggleEditNote(n)"
    />
  </section>
</template>

<script type="module" src="./DisplayNotes.js"></script>

<style scoped lang="scss">
  @import "./DisplayNotes";
</style>

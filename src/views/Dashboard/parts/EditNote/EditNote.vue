<template>
  <section class="edit-note">
    <div class="overlay" @click="submitEditNote()"></div>
    <form @submit.prevent="submitEditNote()" class="edit-note-box">
      <input type="text" name="title" v-model="nTitle" />
      <textarea
        name="description"
        id="description"
        v-model="nDescription"
      ></textarea>
      <footer class="note-footer">
        <note-options v-on:selectedcolor="(c) => setSelectedColor(c)" />
        <button type="submit" class="submit-button">Close</button>
      </footer>
    </form>
  </section>
</template>

<script type="module" src="./EditNote.js"></script>

<style scoped lang="scss">
  @import "./EditNote";
</style>

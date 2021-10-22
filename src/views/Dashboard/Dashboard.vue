<template>
  <section id="dashboard">
    <navbar v-on:toggle-sidebar="sidebarState = !sidebarState" />
    <div class="main" :class="[sidebarState ? 'sidebar-toggled' : '']">
      <sidebar
        v-on:tabchange="(tabName) => tabChange(tabName)"
        :sidebartoggled="sidebarState"
      />
      <div class="notes">
        <template v-if="tabName === 'notes'">
          <add-note v-on:note-added="(e) => addNewNote(e)" />
          <display-notes :newnote="newNote" />
        </template>
        <template v-else-if="tabName === 'archive'">
          <display-archived-notes />
        </template>
        <template v-else-if="tabName === 'trash'">
          <display-trash-notes />
        </template>
      </div>
    </div>
  </section>
</template>

<script type="module" src="./Dashboard.js"></script>

<style lang="scss">
  @import "./Dashboard";
</style>

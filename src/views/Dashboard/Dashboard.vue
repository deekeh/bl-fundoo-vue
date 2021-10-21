<template>
  <section id="dashboard">
    <navbar v-on:toggle-sidebar="sidebarState = !sidebarState" />
    <div class="main" :class="[sidebarState ? 'sidebar-toggled' : '']">
      <sidebar :sidebartoggled="sidebarState" />
      <div class="notes">
        <add-note />
        <display-notes />
      </div>
    </div>
  </section>
</template>

<script type="module" src="./Dashboard.js"></script>

<style lang="scss">
  @import "./Dashboard";
</style>

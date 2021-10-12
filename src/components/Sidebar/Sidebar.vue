<template>
  <aside class="sidebar" :class="[sidebartoggled ? 'toggled' : '']">
    <div class="sidebar-item active">
      <i class="bi bi-lightbulb"></i>
      <span class="text">
        Notes
      </span>
    </div>
    <div class="sidebar-item">
      <i class="bi bi-bell"></i>
      <span class="text">
        Reminders
      </span>
    </div>
    <div class="sidebar-item">
      <i class="bi bi-pencil"></i>
      <span class="text">
        Edit Labels
      </span>
    </div>
    <div class="sidebar-item">
      <i class="bi bi-archive"></i>
      <span class="text">
        Archive
      </span>
    </div>
    <div class="sidebar-item">
      <i class="bi bi-trash"></i>
      <span class="text">
        Trash
      </span>
    </div>
  </aside>
</template>

<script type="module" src="./Sidebar.js"></script>

<style scoped lang="scss">
  @import "./Sidebar";
</style>

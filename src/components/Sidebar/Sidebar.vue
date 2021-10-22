<template>
  <aside class="sidebar" :class="[sidebartoggled ? 'toggled' : '']">
    <div
      @click="tabChange('notes')"
      class="sidebar-item"
      :class="[tabName === 'notes' ? 'active' : '']"
    >
      <i class="bi bi-lightbulb"></i>
      <span class="text">
        Notes
      </span>
    </div>
    <div @click="tabChange('reminders')" class="sidebar-item" :class="[tabName === 'reminders' ? 'active' : '']">
      <i class="bi bi-bell"></i>
      <span class="text">
        Reminders
      </span>
    </div>
    <div @click="tabChange('edit')" class="sidebar-item" :class="[tabName === 'edit' ? 'active' : '']">
      <i class="bi bi-pencil"></i>
      <span class="text">
        Edit Labels
      </span>
    </div>
    <div @click="tabChange('archive')" class="sidebar-item" :class="[tabName === 'archive' ? 'active' : '']">
      <i class="bi bi-archive"></i>
      <span class="text">
        Archive
      </span>
    </div>
    <div @click="tabChange('trash')" class="sidebar-item" :class="[tabName === 'trash' ? 'active' : '']">
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

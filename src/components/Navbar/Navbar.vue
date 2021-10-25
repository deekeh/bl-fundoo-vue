<template>
  <nav id="navbar">
    <div class="account-popup" v-if="showLogout">
      <div class="pfp">
        <div class="pfp-inner" title="Go to account settings">
          <i class="bi bi-person-fill"></i>
        </div>
      </div>
      <!-- <div class="user-name">
        User Lastname
      </div> -->
      <div class="logout">
        <button type="button" @click="logout" class="logout-button">
          Logout
        </button>
      </div>
    </div>
    <div class="left">
      <button
        type="button"
        @click="$emit('toggle-sidebar')"
        class="toggle-sidebar"
      >
        <i class="bi bi-list"></i>
      </button>
      <img
        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
        alt="Notes Logo"
        class="logo"
      />
      <h1 class="heading">
        Keep
      </h1>
    </div>
    <label class="search-box">
      <i class="bi bi-search search-icon"></i>
      <input type="text" placeholder="Search" />
      <i class="bi bi-x cross-icon"></i>
    </label>
    <div class="right">
      <div class="refresh icon">
        <i class="bi bi-arrow-clockwise"></i>
      </div>
      <div class="list-view icon">
        <i class="bi bi-view-stacked"></i>
      </div>
      <div class="settings icon">
        <i class="bi bi-gear"></i>
      </div>
      <div class="apps icon">
        <i class="bi bi-grid-3x3-gap-fill"></i>
      </div>
      <div @click="showLogout = !showLogout" class="user-account icon">
        <i class="bi bi-person-fill"></i>
      </div>
    </div>
  </nav>
</template>

<script type="module" src="./Navbar.js"></script>

<style scoped lang="scss">
  @import "./Navbar";
</style>

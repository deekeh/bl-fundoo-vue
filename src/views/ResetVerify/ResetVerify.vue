<template>
  <section id="reset-verify">
    <form @submit.prevent="resetVerify()" class="verify-container">
      <logo />
      <h1 class="heading">
        Reset your password
      </h1>
      <h2 class="subheading">
        Enter new password
      </h2>

      <text-box
        type="password"
        name="new-password"
        label="New Password"
        v-model:value="newPassword"
        :error="v$.newPassword.$error ? v$.newPassword.$errors[0].$message : ''"
      />

      <button type="submit">Next</button>
    </form>
  </section>
</template>

<script type="module" src="./ResetVerify.js"></script>

<style scoped lang="scss">
  @import "./ResetVerify";
</style>

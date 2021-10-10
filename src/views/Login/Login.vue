<template>
  <section id="login">
    <div class="login-container">
      <form @submit.prevent="login" action="" class="box">
        <logo class="text-center" />
        <h1 class="heading text-center">
          Sign in
        </h1>
        <h2 class="subheading text-center">
          Use your Fundoo Account
        </h2>
        <text-box
          v-model:value="email"
          name="email"
          label="Email or phone"
          :error="v$.email.$error ? v$.email.$errors[0].$message : ''"
        />
        <text-box
          v-model:value="password"
          name="password"
          label="Password"
          type="password"
          :error="v$.password.$error ? v$.password.$errors[0].$message : ''"
        />
        <router-link :to="{ name: 'Reset' }">
          Forgot email?
        </router-link>
        <div class="not-your-computer">
          Not your computer? Use Guest mode to sign in privately.
          <div>
            <a href="#">Learn more</a>
          </div>
        </div>

        <div class="next-box">
          <router-link :to="{ name: 'Register' }">Create account</router-link>
          <button type="submit" class="next">Next</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script type="module" src="./Login.js"></script>

<style lang="scss">
  @import "./Login";
</style>

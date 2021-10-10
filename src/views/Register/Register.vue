<template>
  <section id="register">
    <div class="register-container">
      <form @submit.prevent="() => register()" class="left box">
        <logo class="logo" />
        <h1 class="heading">
          Create your Fundoo Account
        </h1>
        <text-box
          v-model:value="firstname"
          name="firstname"
          label="First Name"
          :error="v$.firstname.$error ? v$.firstname.$errors[0].$message : ''"
        />
        <text-box
          v-model:value="lastname"
          name="lastname"
          label="Last Name"
          :error="v$.lastname.$error ? v$.lastname.$errors[0].$message : ''"
        />

        <div class="email-box">
          <text-box
            v-model:value="email"
            type="text"
            name="email"
            label="Username"
            :error="v$.email.$error ? v$.email.$errors[0].$message : ''"
          />
        </div>

        <div class="current-email">
          <a href="#">
            Use my current email address instead
          </a>
        </div>

        <text-box
          v-model:value="password"
          name="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :error="v$.password.$error ? v$.password.$errors[0].$message : ''"
        />
        <text-box
          v-model:value="confirmPassword"
          name="confirm"
          label="Confirm"
          :type="showPassword ? 'text' : 'password'"
          :error="v$.confirmPassword.$error ? v$.confirmPassword.$errors[0].$message : ''"
        />

        <div class="show-password">
          <input
            v-model="showPassword"
            type="checkbox"
            name="show-check"
            id="show-check"
            class="show-check"
          />
          <label for="show-check">Show password</label>
        </div>

        <div class="sign-in-box">
          <router-link :to="{ name: 'Login' }" class="sign-in">
            Sign in instead
          </router-link>
        </div>
        <div class="next-box">
          <button type="submit" class="next">Next</button>
        </div>
      </form>
      <div class="right">
        <register-side />
        <p class="one-account">
          One Account. All of Fundoo working for you.
        </p>
      </div>
    </div>
  </section>
</template>

<script type="module" src="./Register.js"></script>

<style lang="scss">
  @import "./Register";
</style>

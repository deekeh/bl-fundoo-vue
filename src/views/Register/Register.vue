<template>
  <section id="register">
    <div class="register-container">
      <form action="" class="left box">
        <logo class="logo" />
        <h1 class="heading">
          Create your Google Account
        </h1>
        <text-box name="firstname" label="First Name" />
        <text-box name="lastname" label="Last Name" />

        <div class="email-box">
          <text-box type="email" name="email" label="Username" />
        </div>

        <div class="current-email">
          <a href="#">
            Use my current email address instead
          </a>
        </div>

        <text-box name="password" label="Password" type="password" />
        <text-box name="confirm" label="Confirm" type="password" />

        <div class="show-password">
          <input
            type="checkbox"
            name="show-check"
            id="show-check"
            class="show-check"
          />
          <label for="show-check">Show password</label>
        </div>

        <div class="sign-in-box">
          <a href="#" class="sign-in">
            Sign in instead
          </a>
        </div>
        <div class="next-box">
          <button class="next">Next</button>
        </div>
      </form>
      <div class="right">
        <register-side />
        <p class="one-account">
          One Account. All of Google working for you.
        </p>
      </div>
    </div>
  </section>
</template>

<script type="module" src="./Register.js"></script>

<style lang="scss">
  @import "./Register";
</style>

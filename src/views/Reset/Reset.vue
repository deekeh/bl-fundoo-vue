<template>
  <section id="reset">
    <toast
      v-on:toastdisabled="toastVisibility = false"
      :toastvisibility="toastVisibility"
      :toastmessage="toastMessage"
      :theme="toastTheme"
    />
    <form @submit.prevent="reset" action="" class="reset-container">
      <logo class="text-center" />
      <h1 class="heading text-center">
        Find your email
      </h1>
      <h2 class="subheading text-center">
        Enter your phone number or recovery email
      </h2>
      <text-box
        name="email"
        type="text"
        label="Phone number or email"
        class="textbx"
        v-model:value="email"
        :error="v$.email.$error ? v$.email.$errors[0].$message : ''"
      />

      <div class="next-box">
        <button type="submit" class="next">Next</button>
      </div>
    </form>
  </section>
</template>

<script type="module" src="./Reset.js"></script>

<style lang="scss">
  @import "./Reset";
</style>

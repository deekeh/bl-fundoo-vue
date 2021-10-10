import TextBox from "@/components/TextBox/TextBox.vue";

// svg
import Logo from "@/components/svg/Logo.vue";
import RegisterSide from "@/components/svg/RegisterSide.vue";

import useVuelidate from "@vuelidate/core";
import {
  sameAs,
  email,
  required,
  helpers,
  minLength,
} from "@vuelidate/validators";

export default {
  name: "Register",
  components: {
    Logo,
    RegisterSide,
    TextBox,
  },
  data() {
    return {
      v$: useVuelidate(),
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
    };
  },
  validations: {
    firstname: {
      required: helpers.withMessage("Email required", required),
    },
    lastname: {
      required: helpers.withMessage("Email required", required),
    },
    email: {
      required: helpers.withMessage("Email required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    password: {
      required: helpers.withMessage("Password required", required),
      minLength: helpers.withMessage(
        "Password should be at least 8 characters long",
        minLength(8)
      ),
      sameAs: helpers.withMessage(
        "Passwords should match",
        sameAs("confirmPassword")
      ),
    },
    confirmPassword: {
      required: helpers.withMessage("Confirmation required", required),
    },
  },
  methods: {
    register() {
      // console.log(e.target);
      this.v$.$validate();
      console.log(this.v$.firstname);
    },
  },
};

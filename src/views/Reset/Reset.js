import TextBox from "@/components/TextBox/TextBox.vue";

// svg
import Logo from "@/components/svg/Logo.vue";

// vuelidate
import useVuelidate from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";

export default {
  name: "Reset",
  components: {
    Logo,
    TextBox,
  },
  data() {
    return {
      v$: useVuelidate(),
      email: "",
    };
  },
  validations: {
    email: {
      required: helpers.withMessage("Email required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
  },
  methods: {
    reset() {
      this.v$.$validate();
      console.log("reset done", this.email);
    },
  },
};

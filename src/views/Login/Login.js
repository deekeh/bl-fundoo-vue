import TextBox from "@/components/TextBox/TextBox.vue";

// svg
import Logo from "@/components/svg/Logo.vue";

// vuelidate
import useVuelidate from "@vuelidate/core";
import { email, required, minLength, helpers } from "@vuelidate/validators";

import axios from "axios";

export default {
  name: "Login",
  components: {
    TextBox,
    Logo,
  },
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: "",
    };
  },
  validations: {
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
    },
  },
  methods: {
    login() {
      this.v$.$validate();
      if (!this.v$.error) {
        const data = {
          email: this.email,
          password: this.password,
        };
        axios
          .post("/u/login", data)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  },
};

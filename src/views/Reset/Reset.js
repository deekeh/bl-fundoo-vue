import TextBox from "@/components/TextBox/TextBox.vue";

// svg
import Logo from "@/components/svg/Logo.vue";

// vuelidate
import useVuelidate from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";

import axios from "axios";

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
      if (!this.v$.$error) {
        // const data = {
        //   email: this.email,
        // };
        // console.log(data);
        axios
          .post(`/u/reset?email=${this.email}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  },
};

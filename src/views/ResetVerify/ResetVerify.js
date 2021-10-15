// svg
import Logo from "@/components/svg/Logo.vue";

import TextBox from "@/components/TextBox/TextBox.vue";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, required } from "@vuelidate/validators";

// service
import { resetVerify } from "@/services/auth";

export default {
  name: "ResetVerify",
  components: {
    Logo,
    TextBox,
  },
  data() {
    return {
      v$: useVuelidate(),
      newPassword: "",
    };
  },
  validations: {
    newPassword: {
      required: helpers.withMessage("Password required", required),
      minLength: helpers.withMessage("Weak password", minLength(8)),
    },
  },
  methods: {
    resetVerify() {
      console.log(this.$route.params.token);
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log(this.v$);
        resetVerify(this.$route.params.token, this.newPassword)
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          console.error(err);
        });
        // axios
        //   .post(`/u/reset/verify/${this.$route.params.token}`, {
        //     password: this.newPassword,
        //   })
      }
    },
  },
};

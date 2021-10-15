import TextBox from "@/components/TextBox/TextBox.vue";
import Toast from "@/components/Toast/Toast.vue";

// svg
import Logo from "@/components/svg/Logo.vue";

// vuelidate
import useVuelidate from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";

// service
import { reset } from "@/services/auth";

export default {
  name: "Reset",
  components: {
    Logo,
    TextBox,
    Toast,
  },
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      toastVisibility: false,
      toastMessage: "",
      toastTheme: "",
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
        reset(this.email)
          .then(() => {
            // console.log(res);
            this.toastMessage = "Email has been sent successfully";
            this.toastVisibility = true;
            this.toastTheme = "theme-success";
          })
          .catch((err) => {
            console.error(err);
            this.toastMessage = "Email not found";
            this.toastVisibility = true;
            this.toastTheme = "theme-danger";
          });
      }
    },
  },
};

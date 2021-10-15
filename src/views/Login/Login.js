import TextBox from "@/components/TextBox/TextBox.vue";
import Toast from "@/components/Toast/Toast.vue";

// svg
import Logo from "@/components/svg/Logo.vue";

// vuelidate
import useVuelidate from "@vuelidate/core";
import { email, required, minLength, helpers } from "@vuelidate/validators";

// service
import { login } from "@/services/auth";

export default {
  name: "Login",
  components: {
    TextBox,
    Logo,
    Toast,
  },
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: "",

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
        login(data)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            this.$router.push({ name: "Dashboard" });
          })
          .catch((err) => {
            console.error(err.toJSON());
            this.toastMessage = "Invalid credentials";
            this.toastVisibility = true;
            this.toastTheme = "theme-danger";
          });
      }
    },
  },
};

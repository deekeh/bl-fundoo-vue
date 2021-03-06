import TextBox from "@/components/TextBox/TextBox.vue";
import Toast from "@/components/Toast/Toast.vue";

// svg
import Logo from "@/components/svg/Logo.vue";
import RegisterSide from "@/components/svg/RegisterSide.vue";

// vuelidate
import useVuelidate from "@vuelidate/core";
import {
  // sameAs,
  email,
  required,
  helpers,
  minLength,
} from "@vuelidate/validators";

// service
import { register } from "@/services/auth";

export default {
  name: "Register",
  components: {
    Logo,
    RegisterSide,
    TextBox,
    Toast,
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

      toastVisibility: false,
      toastMessage: "",
      toastTheme: "",
    };
  },
  validations: {
    firstname: {
      required: helpers.withMessage("First name required", required),
    },
    lastname: {
      required: helpers.withMessage("Last name required", required),
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
    },
    confirmPassword: {
      required: helpers.withMessage("Confirmation required", required),
      // sameAs: helpers.withMessage("Passwords should match", sameAs("password")),
    },
  },
  methods: {
    register() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const data = {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          password: this.password,
        };
        console.log(data);
        register(data)
          .then((res) => {
            this.$router.push({ name: "Login" });
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
            this.toastMessage = "Email ID already registered";
            this.toastVisibility = true;
            this.toastTheme = "theme-danger";
          });
      }
    },
  },
};

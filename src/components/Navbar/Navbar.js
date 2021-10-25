export default {
  name: "Navbar",
  data() {
    return {
      showLogout: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "Login" });
    },
  },
};

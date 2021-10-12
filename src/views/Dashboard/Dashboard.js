import Navbar from "@/components/Navbar/Navbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      sidebarState: true,
    };
  },
  created() {
    if (!localStorage.getItem("token")) this.$router.push({ name: "Login" });
  },
};

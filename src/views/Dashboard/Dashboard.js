import Navbar from "@/components/Navbar/Navbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";

// internal components
import AddNote from "./parts/AddNote.vue";
import DisplayNotes from "./parts/DisplayNotes.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    Sidebar,
    AddNote,
    DisplayNotes,
  },
  data() {
    return {
      sidebarState: true,
      newNote: {},
    };
  },
  created() {
    if (!localStorage.getItem("token")) this.$router.push({ name: "Login" });
  },
  methods: {
    addNewNote(e) {
      this.newNote = e;
    },
  },
};

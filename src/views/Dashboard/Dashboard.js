import Navbar from "@/components/Navbar/Navbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";

// internal components
import AddNote from "./parts/AddNote.vue";
import DisplayNotes from "./parts/DisplayNotes/DisplayNotes.vue";
import DisplayArchivedNotes from "./parts/DisplayArchivedNotes/DisplayArchivedNotes.vue";
import DisplayTrashNotes from "./parts/DisplayTrashNotes/DisplayTrashNotes.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    Sidebar,
    AddNote,
    DisplayNotes,
    DisplayArchivedNotes,
    DisplayTrashNotes,
  },
  data() {
    return {
      sidebarState: true,
      newNote: {},
      tabName: "notes",
    };
  },
  created() {
    if (!localStorage.getItem("token")) this.$router.push({ name: "Login" });
  },
  methods: {
    addNewNote(e) {
      this.newNote = e;
    },
    tabChange(tabName) {
      this.tabName = tabName;
    },
  },
};

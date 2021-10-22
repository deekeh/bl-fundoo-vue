import Note from "../Note.vue";

// service
import { getArchivedNotes } from "@/services/notes";

export default {
  name: "DisplayArchivedNotes",
  components: {
    Note,
  },
  data() {
    return {
      notes: [],
    };
  },
  created() {
    getArchivedNotes()
      .then((res) => {
        this.notes = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

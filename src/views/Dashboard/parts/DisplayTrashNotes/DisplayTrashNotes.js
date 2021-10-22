import Note from "../Note.vue";

// service
import { getDeletedNotes } from "@/services/notes";

export default {
  name: "DisplayTrashNotes",
  components: {
    Note,
  },
  data() {
    return {
      notes: [],
    };
  },
  created() {
    getDeletedNotes()
      .then((data) => {
        console.log(data.data);
        this.notes = data.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

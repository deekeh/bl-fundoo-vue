import { getNotes } from "@/services/notes";

import Note from "../Note.vue";
export default {
  name: "DisplayNotes",
  components: {
    Note,
  },
  data() {
    return {
      notes: [],
    };
  },
  created() {
    const id = localStorage.getItem("id");
    getNotes(id)
      .then((data) => {
        console.log(data.data);
        this.notes = data.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  props: {
    newnote: {
      type: Object,
      // default: {},
    },
  },
  watch: {
    newnote() {
      this.notes = [...this.notes, this.newnote];
    },
  },
};

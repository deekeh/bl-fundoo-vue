import { getNotes } from "@/services/notes";

import Note from "../Note.vue";
import EditNote from "../EditNote/EditNote.vue";

export default {
  name: "DisplayNotes",
  components: {
    Note,
    EditNote,
  },
  data() {
    return {
      notes: [],
      editStatus: false,
      editingNote: {},
    };
  },
  created() {
    const id = localStorage.getItem("id");
    getNotes(id)
      .then((data) => {
        console.log(data.data);

        this.notes = [];
        data.data.forEach((d) => {
          if (!d.isArchived && !d.isDeleted) this.notes = [...this.notes, d];
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  props: {
    newnote: {
      type: Object,
    },
  },
  watch: {
    newnote() {
      this.notes = [...this.notes, this.newnote];
    },
  },
  methods: {
    removeNote(id) {
      this.editStatus = false;
      this.notes = this.notes.filter((n) => n._id !== id);
    },
    toggleEditNote(n) {
      console.log(this.notes[0], n);
      if (this.editStatus)
        this.notes.forEach((nt, idx) => {
          if (nt._id === n.id) {
            // updating the note data on UI
            this.notes[idx] = {
              ...this.notes[idx],
              title: n.title,
              description: n.description,
              color: n.color,
            };
            console.log(this.notes[idx]);
          }
        });
      this.editStatus = !this.editStatus;
      this.editingNote = n;
    },
  },
};

import NoteOptions from "../NoteOptions.vue";

// service
import { editNote } from "@/services/notes";

export default {
  name: "EditNote",
  props: {
    title: {
      type: String,
      default: "Empty title",
    },
    description: {
      type: String,
      default: "Empty description",
    },
    color: {
      type: String,
      default: "#fff",
    },
    noteid: {
      type: String,
      default: "",
    },
  },
  components: {
    NoteOptions,
  },
  created() {
    this.nTitle = this.title;
    this.nDescription = this.description;
    this.nColor = this.color;
  },
  data() {
    return {
      nTitle: "",
      nDescription: "",
      nColor: "#fff",
    };
  },
  methods: {
    setSelectedColor(c) {
      this.nColor = c;
    },
    submitEditNote() {
      const formData = {
        title: this.nTitle,
        description: this.nDescription,
        color: this.nColor,
        id: this.noteid,
      };
      editNote(formData)
        .then(() => {
          // console.log(res);
          this.$emit("editnotesubmitted", formData);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};

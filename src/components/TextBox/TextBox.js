export default {
  name: "TextBox",
  props: {
    color: {
      type: String,
      default: "#1A73E8",
    },
    error: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "name",
    },
    placeholder: {
      type: String,
      default: " ",
    },
  },
  data() {
    return {
      value: "",
    };
  },
};

export default {
  name: "Sidebar",
  props: {
    sidebartoggled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      tabName: "notes",
    };
  },
  methods: {
    tabChange(tabName) {
      this.tabName = tabName;
      this.$emit("tabchange", tabName);
    },
  },
};

export default {
  name: "Toast",
  // data() {
  //   return {
  //     tState: true,
  //   };
  // },
  props: {
    toastvisibility: {
      type: Boolean,
      default: false,
    },
    toastmessage: {
      type: String,
      default: "Done",
    },
    theme: {
      type: String,
      default: "",
    },
  },
  mounted() {
    setTimeout(function() {
      this.toastvisibility = false;
    }, 2000);
  },
  methods: {
    close() {
      this.tState = false;
      this.$emit("toastdisabled");
      // console.log(this.tState);
    },
  },
};

export default {
  name: "Toast",
  data() {
    return {
      tState: true,
    };
  },
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
  created() {
    this.tState = this.toastvisibility;
  },
  // mounted() {
  //   setTimeout(function() {
  //     this.toastvisibility = false;
  //   }, 2000);
  // },
  watch: {
    toastvisibility() {
      this.tState = this.toastvisibility;
    },
    tState() {
      if (this.tState == true) {
        setTimeout(
          function() {
            // this.tState = false;
            this.$emit("toastdisabled");
          }.bind(this),
          this.toastmessage.split(" ").length * 500 + 2000 // set the delay in auto-hide of notification depending on number of words in the message
        );
      }
    },
  },
  methods: {
    close() {
      // this.tState = false;
      this.$emit("toastdisabled");
    },
  },
};

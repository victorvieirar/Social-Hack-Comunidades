import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["schedule", "prizes"]),
  },
};

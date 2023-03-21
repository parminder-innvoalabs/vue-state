<template>
  <div>{{ user_id }}</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("app", ["init"]),
    ...mapActions("news", ["getUserId"]),
    getNewsData() {
      this.$store.getters.client.get(`/News/`).then((response) => {
        this.userData = response.data;
      });
    },
  },
  created() {
    this.getNewsData();
    this.init();
    this.getUserId();
  },
  computed: {
    ...mapGetters("app", ["user_id"]),
  },
};
</script>

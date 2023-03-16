<template>
  <div class="container">
    <h1>{{ countValue }}</h1>
    <a @click="count()">Increase</a>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      countValue: this.$store.state.a.count,
    };
  },
  computed() {
    mapState({
      a: (state) => state.a.count,
      b: (state) => state.b.subModule.count,
    });
  },
  methods: {
    count() {
      console.log("count", this.$store.state.a.count);
      this.$store.commit("a/increment");
      console.log(this.$store.state.a.count);
      this.countValue = this.$store.state.a.count;
    },
  },
};
</script>

<style scoped>
.container {
  justify-items: center;
}
</style>

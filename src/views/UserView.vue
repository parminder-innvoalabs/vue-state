<template>
  <v-container>
    <div class="mt-7">
      <DataTable :userData="userData" />
    </div>
  </v-container>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
export default {
  name: "UserV",
  components: {
    DataTable,
  },
  mounted() {
    this.$store.dispatch("getUserDetails");
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
  },
};
</script>

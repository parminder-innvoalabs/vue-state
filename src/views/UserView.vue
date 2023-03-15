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
  name: "UserView",
  components: {
    DataTable,
  },
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    getUserDetails() {
      this.$store.getters.client.get(`/users/`).then((response) => {
        this.userData = response.data;
      });
    },
  },
  mounted() {
    this.getUserDetails();
  },
};
</script>

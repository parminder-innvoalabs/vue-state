<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Username</th>
          <th class="text-left">Email</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Website</th>
          <th class="text-left">Company name</th>
          <th class="text-left">Company bs</th>
          <th class="text-left">City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userData" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.website }}</td>
          <td>{{ item.company.name }}</td>
          <td>{{ item.company.bs }}</td>
          <td>{{ item.address.city }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: ["userData"],
};
</script>

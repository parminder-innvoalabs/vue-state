<template>
  <div>
    <p>{{ myDate | toISOString }}</p>
    <p>{{ myDate | formatDate(null, "YYYY-MM-DD") }}</p>
    <p>{{ myDate | diffForHumans }}</p>
  </div>
</template>

<script>
import dateMixin from "../mixins/date";
export default {
  data() {
    return { myDate: "2022-03-25T09:46:18.202684Z" };
  },
  mixins: [dateMixin],
};
</script>

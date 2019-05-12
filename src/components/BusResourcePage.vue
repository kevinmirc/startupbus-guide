<template>
  <BusResourceList :id="id" :resource="resource" :key="resource + id"></BusResourceList>
</template>
<script>
import BusResourceList from './BusResourceList';

export default {
  components: { BusResourceList },
  props: {
    id: {
      type: String,
      required: true,
    },
    resource: {
      type: String,
      required: true,
      enum: ['sponsors', 'locations', 'personnel', 'schedule'],
    },
  },
};
</script>
<style lang="css" scoped>

</style>

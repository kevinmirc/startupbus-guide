<template>
  <BusResourceList resource="sponsors" :id="id"></BusResourceList>
</template>
<script>
import BusResourceList from './BusResourceList';

export default {
  components: { BusResourceList },
  props: {
    id: { type: String, required: true },
  },
};
</script>
<style lang="css" scoped>

</style>

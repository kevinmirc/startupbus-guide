<template>
  <div class="col s12">
    <p class="row valign-wrapper">
      <i style="padding-right: 4px" class="red-text material-icons">error</i> {{ message }}</p>
  </div>
</template>
<script>
export default {
  props: {
    message: { type: String, required: true },
  },
};
</script>
<style lang="css" scoped>

</style>
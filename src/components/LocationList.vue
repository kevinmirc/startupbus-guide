<template>
  <ul class="collection with-header z-depth-1">
    <li class="collection-item avatar" v-for="location in locations" :key="location.id">
      <i class="material-icons circle teal lighten-2">{{ location.fields.Icon }}</i>
      <span class="title">{{ location.fields.Name }}</span>
      <small v-if="location.fields.Address">
        <p>{{ location.fields.Address }}</p>
      </small>
      <br>
      <small v-if="location.fields.Description">
        <p>{{ location.fields.Description }}</p>
      </small>
      <br>
      <small v-if="location.fields['Link URL']">
        <p><a target="_blank" :href="location.fields['Link URL']">{{ location.fields['Link Title'] }}</a></p>
      </small>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    locations: { type: Array, required: true },
  },
};
</script>
<style lang="css" scoped>

</style>

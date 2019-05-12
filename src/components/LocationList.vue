<template>
  <ul class="collection with-header z-depth-1" v-show="locations.length">
    <li class="collection-item avatar" v-for="location in locations" :key="location.id">
      <i class="material-icons circle teal lighten-2">{{ location.fields.Icon }}</i>
      <span class="title">{{ location.fields.Name }}</span>

      <p class="small-text" v-if="location.fields.Address">{{ location.fields.Address }}</p>

      <br>

      <p class="small-text" v-if="location.fields.Description">{{ location.fields.Description }}</p>

      <br>

      <p class="small-text" v-if="location.fields.Description">
        <a target="_blank" :href="location.fields['Link URL']">
          {{ location.fields['Link Title'] }}
        </a>
      </p>

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

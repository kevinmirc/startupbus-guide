<template>
  <div class="row bus-detail-page">
    <ErrorMessage v-if="error" :message="error"></ErrorMessage>
    <SponsorCardsList v-if="resource === 'sponsors'" :sponsors="resourceItems"></SponsorCardsList>
    <LocationList v-if="resource === 'locations'" :locations="resourceItems"></LocationList>
    <PersonnelList v-if="resource === 'personnel'" :personnel="resourceItems"></PersonnelList>
  </div>
</template>
<script>
import startupBus from '../services/startupBus';
import ErrorMessage from './ErrorMessage';
import SponsorCardsList from './SponsorCardsList';
import LocationList from './LocationList';
import PersonnelList from './PersonnelList';

export default {
  components: { SponsorCardsList, LocationList, PersonnelList },
  props: {
    /**
     * id {string} The Acronym for the bus (for Florida it's FL).
     */
    id: { type: String, required: true },
    /**
     * resource {string} sponsors | locations | personnel | schedule
     */
    resource: { type: String, required: true, enum: ['sponsors', 'locations', 'personnel', 'schedule'] },
  },
  data() {
    return {
      loading: false,
      resourceItems: [],
      error: null,
    }
  },
  created() {
    const vm = this;
    vm.loading = true;
    
    return startupBus.getResourceListForBus(this.resource, this.id)
      .then((resourceItems) => {
        console.log('resourceItems', resourceItems);
        vm.resourceItems = resourceItems;
      })
      .catch(() => {
        vm.error = `Failed to get ${resource}`;
      })
      .finally(() => {
        vm.loading = false;
      });
  }
};
</script>
<style lang="css" scoped>

</style>
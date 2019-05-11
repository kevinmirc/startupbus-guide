<template>
  <div class="col s12 center-align z-depth-1 full-height">
    <div class="">
      <div class="icon-link">
        <router-link :to="{ name: 'Bus Schedule', params: { id } }">
          <i class="material-icons">access_time</i>
        </router-link>
      </div>
    </div>
    <div class="">
      <div class="icon-link">
        <router-link :to="{ name: 'Bus Personnel', params: { id } }">
          <i class="material-icons">people</i>
        </router-link>
      </div>
    </div>
    <div class="">
      <div class="icon-link">
        <router-link :to="{ name: 'Bus Locations', params: { id } }">
          <i class="material-icons">location_on</i>
        </router-link>
      </div>
    </div>
    <div class="">
      <div class="icon-link">
        <router-link :to="{ name: 'Bus Sponsors', params: { id } }">
          <i class="material-icons">favorite</i>
        </router-link>
      </div>
    </div>
    <div class="">
      <div class="icon-link">
        <router-link :to="{ name: 'Bus Payments', params: { id } }">
          <i class="material-icons">payment</i>
        </router-link>
      </div>
    </div>
    <div class="">
      <div class="icon-link">
        <router-link :to="{ name: 'Bus Info', params: { id } }">
          <i class="material-icons">info</i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { type: String, required: true },
  },
};
</script>
<style lang="css" scoped>
.icon-link {
  padding: 4px;
  margin: 10px 4px;
}
</style>
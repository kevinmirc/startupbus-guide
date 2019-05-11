<template>
    <div class="col s6">
      <router-link :to="{ name: 'Bus Page', params: { id: bus.fields.Acronym } }">
        <div class="card">
          <div class="card-content">
            <span class="card-title">{{ bus.fields.Acronym }}</span>
          </div>
        </div>
      </router-link>
    </div>
</template>
<script>
export default {
  props: {
    bus: { type: Object, required: true },
  },
};
</script>
<style lang="css" scoped>
.bus-card {
  /*width: 120px;*/
  /*height: 120px;*/
  /*margin: 8px;*/
}
</style>

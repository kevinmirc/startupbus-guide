<template>
  <div>
    <div
      class="row valign-wrapper header"
      style="margin-bottom: 0px; height: 48px;"
      :style="{ backgroundColor: backgroundColor, opacity: 0.8 }">
      <div class="col s10">
        <span>{{ pageTitle }}</span>
      </div>
      <div class="col s2 center-align">
        <span>
          <router-link :to="{ name: 'Buses' }">
            <i class="material-icons white-text">directions_bus</i>
          </router-link>
        </span>
      </div>
    </div>

    <div v-if="$store.state.loading" class="progress" style="margin: 0; margin-top: -4px;">
      <div class="indeterminate"></div>        
    </div>

  </div>
</template>
<script>
export default {
  computed: {
    pageTitle() {
      const vm = this;
      const route = vm.$route;
      let appendix = '';

      if (route && route.params && route.params.id) {
        appendix = ` - ${route.params.id}`;
      }

      return `StartupBus Survival Guide${appendix}`;
    },
    backgroundColor() {
      const currentSelectedBus = this.$route.params.id;
      if (currentSelectedBus) {
        const buses = this.$store.state.buses
        if (buses.length) {
          const targetBus = buses.find(b => b.fields.Acronym === currentSelectedBus);
          return targetBus.fields.Color;
        }
      }

      return '#41bcc4';
    },
  },
};
</script>
<style lang="css" scoped>
.header {
  background: #41bcc4;
  color: rgba(255,255,255,1);
  font-size: 16px;
  justify-content: space-between;
  /*width: 100%;*/
}
</style>
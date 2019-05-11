<template>
  <div class="row valign-wrapper header" style="margin-bottom: 0px; height: 48px;">
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

      return `Startup Bus Survival Guide${appendix}`;
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
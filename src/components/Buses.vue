<template>
  <div class="row full-height scroll">  
    <div v-if="buses.length" class="col s12">
      <BusCard v-for="bus in buses" :bus="bus" :key="bus.id"></BusCard>  
    </div>
  </div>
</template>
<script>
import startupBus from '../services/StartupBus';
import BusCard from './BusCard';

export default {
  components: { BusCard },
  data() {
    return {
      buses: [],
      error: null,
    };
  },
  created() {
    const vm = this;
    vm.$store.state.loading = true;
    return startupBus.getBuses()
      .then((buses) => {
        vm.buses = buses;
        vm.error = null;
      })
      .catch((error) => {
        vm.error = 'Failed to get Busess';
      })
      .finally(() => {
        vm.$set(vm.$store.state, 'loading', false);
      });
  },
};
</script>

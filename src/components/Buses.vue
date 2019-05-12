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
    this.$store.state.loading = true;
    return startupBus.getBuses()
      .then((buses) => {
        this.buses = buses;
        this.error = null;
      })
      .catch((error) => {
        this.error = 'Failed to get Busess';
      })
      .finally(() => {
        this.$store.state.loading = false;
      });
  },
};
</script>

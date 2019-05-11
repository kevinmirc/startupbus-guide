<template>
  <div class="row">
    <div v-show="loading">
      <div class="progress">
        <div class="indeterminate"></div>        
      </div>
    </div>        
    <div v-if="!loading" class="col s12">
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
      loading: true,
      error: null,
    };
  },
  created() {
    return startupBus.getBuses()
      .then((buses) => {
        this.buses = buses;
        this.error = null;
      })
      .catch((error) => {
        this.error = 'Failed to get Busess';
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<template>
  <div class="full-height" id="app">
    <BusPageHeader></BusPageHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import BusPageHeader from './BusPageHeader';

export default {
  components: { BusPageHeader },
};
</script>

<style lang="css">
html, body {
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

#app {
  overflow: hidden;
}

.full-height {
  height: 100%;
  margin: 0;
  padding: 0;
}

.scroll {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.bus-detail-page {
  padding: 0 8px;
}

.extend-bottom {
  margin-bottom: 38px;
}

.small-text {
  font-size: 75%;
}
</style>

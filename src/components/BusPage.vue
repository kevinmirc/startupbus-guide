<template>
  <div class="full-height">
    <div class="row full-height">
      <div class="col s10 full-height scroll">
        <router-view></router-view>
      </div>
      <div class="col s2 full-height" style="margin: 0; padding: 0;">
        <RightNavigation :id="id"></RightNavigation>
      </div>      
    </div>
  </div>
</template>
<script>
import RightNavigation from './RightNavigation';
import BusPageHeader from './BusPageHeader';

export default {
  components: { RightNavigation, BusPageHeader },
  props: { id: { type: String, required: true } },
};
</script>

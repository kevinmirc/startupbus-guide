<template>
  <div class="col s6" style="margin: 0;">
    <router-link :to="{ name: 'Bus Page', params: { id: bus.fields.Acronym } }">
      <div class="card">
        <div class="card-image" style="min-height: 98px" :style="{
            backgroundImage: buildBgCssValueForBus(bus),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8,
            color: 'rgba(255,255,255, 1)',
          }">
          <div class="card-overlay" :style="{ backgroundColor: bus.fields.Color, opacity: 0.8 }"></div>
          <span class="card-title">{{ bus.fields.Acronym }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { thumbnail } from '../services/filters';

export default {
  props: {
    bus: { type: Object, required: true },
  },
  methods: {
    buildBgCssValueForBus(bus) {
      const urlString = thumbnail(bus.fields['Background Image']);
      return `url(${urlString})`;
    }
  }
};
</script>
<style lang="css" scoped>
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
  height: 100%;
  width: 100%;
}
</style>

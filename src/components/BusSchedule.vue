<template>
  <div class="row bus-detail-page">
    <ErrorMessage v-if="error" :message="error"></ErrorMessage>
    <ul class="collection">
      <li class="collection-item avatar">
      </li>
    </ul>
  </div>
</template>
<script>
import ErrorMessage from './ErrorMessage';

export default {
  components: { ErrorMessage },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      error: null,
    };
  },
};
</script>
<style lang="css" scoped>

</style>


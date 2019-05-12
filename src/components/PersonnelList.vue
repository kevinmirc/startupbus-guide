<template>
  <ul class="collection with-header z-depth-1" v-show="personnel.length">
    <li class="collection-item avatar" v-for="person in personnel" :key="person.id">
      <img v-if="person.fields.Headshot" class="circle" :src="person.fields.Headshot | thumbnail"></img>
      <i
        v-else
        class="material-icons circle"
        :style="{ backgroundColor: person.fields['Icon Color'] || 'rgb(137, 226, 255)' }">person</i>
      <span class="title">{{ person.fields.Name }}</span>
      <p> {{  person.fields.Role }} </p>
      <small v-if="person.fields.City">
        <p>{{ person.fields.City }}</p>
      </small>
      <small v-if="person.fields.Phone">
        <p>{{ person.fields.Phone }}</p>
      </small>
      <small v-if="person.fields.Email">
        <p>{{ person.fields.Email }}</p>
      </small>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    personnel: { type: Array, required: true },
  },
};
</script>
<style lang="css" scoped>
  
</style>

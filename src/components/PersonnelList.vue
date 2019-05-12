<template>
  <ul class="collection with-header z-depth-1" v-show="personnel.length">
    <li class="collection-item avatar" v-for="person in personnel" :key="person.id">
      <img v-if="person.fields.Headshot" class="circle" :src="person.fields.Headshot | thumbnail"></img>
      <i
        v-else
        class="material-icons circle"
        :style="{ backgroundColor: person.fields['Icon Color'] || 'rgb(137, 226, 255)' }">person</i>
      
      <span class="title">{{ person.fields.Name }}</span>
      
      <p class="small-text"> {{  person.fields.Role }} </p>

      <br>

      <p class="small-text" v-if="person.fields.City">{{ person.fields.City }}</p>
      <p class="small-text" v-if="person.fields.Phone">{{ person.fields.Phone }}</p>
      <p class="small-text" v-if="person.fields.Email">{{ person.fields.Email }}</p>
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

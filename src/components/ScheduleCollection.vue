<template>
  <div class="extend-bottom">
    <ul
      class="collection with-header z-depth-1"
      v-show="scheduleItems.length"
      v-for="(collection, groupName) in groupedScheduleItems" :key="groupName">
      
      <li class="collection-header">{{ groupName }}</li>
      
      <li class="collection-item" v-for="item in collection" :key="item.id">
        <span class="title valign-wrapper">
          {{ item.fields.Description }}
          <i
            class="material-icons teal-text lighten-2"
            style="font-size: 14px; padding-left: 4px;"
            v-for="icon in item.fields.Icon">
            {{ icon }}
          </i>
        </span>

        <p class="small-text">{{ item.fields['Start Time'] }} - {{ item.fields['End Time'] }}</p>

        <br>

        <p class="small-text" v-if="item.fields['Location Name']">{{ item.fields['Location Name'] }}</p>
        <p class="small-text" v-if="item.fields.Address">{{ item.fields.Address }}</p>

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    scheduleItems: { type: Array, required: true },
  },
  computed: {
    groupedScheduleItems() {
      const groupedItems = {};
      
      this.scheduleItems.forEach(i => {
        const group = i.fields['Date Description'];
        const target = groupedItems[group];
        
        if (!target) {
          groupedItems[group] = [];
        }

        groupedItems[group].push(i);
      });

      return groupedItems;
    },
  },
};
</script>
<style lang="css" scoped>
p {
  margin: 0px 0;
}

li {
  padding: 8px 0;
}
</style>


import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from './router';
import store from './store';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.filter('thumbnail', function (airtableRecordField) {
  if (airtableRecordField && airtableRecordField.length) {
    return airtableRecordField[0].thumbnails.large.url;
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

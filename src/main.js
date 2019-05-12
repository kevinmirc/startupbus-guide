import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from './router';
import store from './store';
import { thumbnail } from './services/filters';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.filter('thumbnail', thumbnail);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

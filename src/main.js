import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
//import Red from './components/Red.vue';
//import Yellow from './components/Yellow.vue';
//import Green from './components/Green.vue';
import TrafficManager from './components/TrafficManager.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes =  [
  { path: '/', redirect: '/1'},
  { path: '/1', component: TrafficManager},
  { path: '/2', component: TrafficManager},
  { path: '/3', component: TrafficManager}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)

});

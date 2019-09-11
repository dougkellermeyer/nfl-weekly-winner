import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import Games from './components/Games.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login},
  { path: '/games', component: Games}
];

const router = new VueRouter({
  routes: routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router: router
}).$mount('#app')

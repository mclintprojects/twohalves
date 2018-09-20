import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueSocketIO from 'vue-socket.io';

Vue.use(VueSocketIO, 'https://twohalves.glitch.me');

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');

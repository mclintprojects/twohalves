import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

const SocketInstance = io('https://twohalves.glitch.me');
Vue.use(VueSocketIO, SocketInstance);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');

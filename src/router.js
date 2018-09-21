import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Chat from './views/Chat.vue';
import DateLeft from './views/DateLeft.vue';
import Mutuals from './views/Mutuals.vue';
import Stats from './views/Stats.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/chat',
			name: 'chat',
			component: Chat
		},
		{
			path: '/date-left',
			name: 'date-left',
			component: DateLeft
		},
		{
			path: '/mutuals',
			name: 'mutuals',
			component: Mutuals
		},
		{
			path: '/stats',
			name: 'stats',
			component: Stats
		}
	]
});

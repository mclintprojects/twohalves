import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		identifier: '',
		chatId: '',
		username: ''
	},
	getters: {
		identifier: state => state.identifier,
		chatId: state => state.chatId,
		username: state => state.username
	},
	mutations: {
		setIdentifier: (state, identifier) => (state.identifier = identifier),
		setChatId: (state, chatId) => (state.chatId = chatId),
		setUsername: (state, username) => (state.username = username)
	},
	actions: {
		setIdentifier: ({ commit }, identifier) =>
			commit('setIdentifier', identifier),
		setChatId: ({ commit }, chatId) => commit('setChatId', chatId),
		setUsername: ({commit}, username) => commit('setUsername', username)
	}
});

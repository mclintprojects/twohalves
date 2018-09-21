import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		identifier: '',
		chatId: '',
		username: '',
		otherUsername: ''
	},
	getters: {
		identifier: state => state.identifier,
		chatId: state => state.chatId,
		username: state => state.username,
		otherUsername: state => state.otherUsername
	},
	mutations: {
		setIdentifier: (state, identifier) => (state.identifier = identifier),
		setChatId: (state, chatId) => (state.chatId = chatId),
		setUsername: (state, username) => (state.username = username),
		setOtherUsername: (state, username) => (state.otherUsername = username)
	},
	actions: {
		setIdentifier: ({ commit }, identifier) =>
			commit('setIdentifier', identifier),
		setChatId: ({ commit }, chatId) => commit('setChatId', chatId),
		setUsername: ({commit}, username) => commit('setUsername', username),
		setOtherUsername: ({commit}, username) => commit('setOtherUsername', username)
	}
});

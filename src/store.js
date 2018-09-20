import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		identifier: '',
		chatId: ''
	},
	getters: {
		identifier: state => state.identifier,
		chatId: state => state.chatId
	},
	mutations: {
		setIdentifier: (state, identifier) => (state.identifier = identifier),
		setChatId: (state, chatId) => (state.chatId = chatId)
	},
	actions: {
		setIdentifier: ({ commit }, identifier) =>
			commit('setIdentifier', identifier),
		setChatId: ({ commit }, chatId) => commit('setChatId', chatId)
	}
});

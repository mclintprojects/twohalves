<template>
    <div class="app">
        <div id="other-half-left-screen" v-if="!isLoading">
            <img src="https://image.flaticon.com/icons/svg/555/555706.svg" />
            <h3>Oops.. your other half left the date.</h3>

            <button @click="findNextDate" class="btn">Goto next date</button>
        </div>
        <div v-if="isLoading" style="margin: auto;">
			<p class="findingLoader">Finding your other half...</p>
		</div>
    </div>
</template>

<script>
import randomstr from 'random-string';

export default {
	data() {
		return {
			isLoading: false
		};
	},
	computed: {
		id() {
			return this.$store.getters.identifier;
		},
		username() {
			return this.$store.getters.username;
		}
	},
	sockets: {
		found_other_half(data) {
			if (this.id == data.occupant1 || this.id == data.occupant2) {
				this.$store.dispatch('setChatId', data.chatId);
				this.$router.push({ name: 'chat' });
			}
		}
	},
	methods: {
		findNextDate() {
			this.isLoading = true;
			const id = randomstr({ length: 10 });
			this.$store.dispatch('setIdentifier', id);
			this.$socket.emit('finding_other_half', {
				identifier: id,
				username: this.username
			});
		},
		notifyUserIsLeaving(event) {
			this.$socket.emit('half_is_leaving_chat');
		}
	},
	created() {
		window.addEventListener('beforeunload', this.notifyUserIsLeaving);
	}
};
</script>

<style lang="scss">
#other-half-left-screen {
	display: flex;
	flex-direction: column;
	align-items: center;

	button {
		margin-top: 24px;
	}
}

@media screen and (max-width: 567px) {
	#other-half-left-screen {
		img {
			width: 144px;
		}

		h3 {
			font-size: 14px;
		}
	}
}
</style>

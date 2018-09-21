<template>
    <div class="app">
        <div id="chat-container" v-if="!isLoading">
            <div id="chat-header">
                <p id="countdown-text" :class="{'one-min-to-go': oneMinToGo}">{{timeRemaining}}</p>
                <button class="btn btn-small">View your mutuals</button>
            </div>
            <div id="messages-container">
                <div v-for="(msg, index) in messages" :key="index" class="chat-bubble" :class="{incoming: !isOutgoing(msg.senderId), outgoing: isOutgoing(msg.senderId)}">
                    <p>{{msg.content}}</p>
                </div>
            </div>
            <div id="input-container">
                <textarea v-model="message" @keyup.enter="sendMessage" placeholder="Type something to send.." rows="3" />
                <button @click="sendMessage" class="btn">Send</button>
            </div>
        </div>
        <div v-if="isLoading" style="margin: auto;">
			<p class="findingLoader">Finding your other half...</p>
		</div>
    </div>
</template>

<script>
import randomstr from 'random-string';
import { setTimeout, clearInterval } from 'timers';

export default {
	data() {
		return {
			isLoading: false,
			timeSecs: 0,
			messages: [],
			message: '',
			timer: null,
			outgoingTone: new Audio(
				'https://res.cloudinary.com/mclint-cdn/video/upload/v1537476327/twohalves/pull-out.mp3'
			),
			incomingTone: new Audio(
				'https://res.cloudinary.com/mclint-cdn/video/upload/v1537476327/twohalves/communication-channel.mp3'
			)
		};
	},
	computed: {
		timeRemaining() {
			if (this.timeSecs == 0) return '';
			else {
				const mins = Math.floor(this.timeSecs / 60);
				const secs = this.timeSecs - mins * 60;

				return `0${mins}:${secs <= 9 ? `0${secs}` : secs}`;
			}
		},
		chatId() {
			return this.$store.getters.chatId;
		},
		id() {
			return this.$store.getters.identifier;
		},
		oneMinToGo() {
			return this.timeSecs <= 60;
		}
	},
	sockets: {
		half_disconnected(data) {
			if (this.chatId == data.chatId) this.$router.push({ name: 'date-left' });
		},
		found_other_half(data) {
			if (this.id == data.occupant1 || this.id == data.occupant2) {
				this.isLoading = false;
				this.$store.dispatch('setChatId', data.chatId);
				this.initializeChat();
			}
		}
	},
	methods: {
		initializeChat() {
			this.$socket.on(this.chatId, this.readIncomingMessage);
			this.timeSecs = 10 * 60;
			this.timer = setInterval(this.updateTime, 1000);
			this.messages = [];
			this.message = '';
		},
		readIncomingMessage(data) {
			if (this.id != data.senderId) {
				this.messages.push({
					content: data.message,
					senderId: data.senderId
				});

				this.incomingTone.play();
			}
		},
		updateTime() {
			if (this.timeSecs <= 0) {
				this.isLoading = true;
				window.clearInterval(this.timer);
				this.findNextDate();
			} else this.timeSecs = this.timeSecs - 1;
		},
		sendMessage() {
			if (this.message.length > 0) {
				this.$socket.emit('send_message', {
					chatId: this.chatId,
					senderId: this.id,
					message: this.message
				});

				this.messages.push({
					content: this.message,
					senderId: this.id
				});
				this.message = '';
				this.outgoingTone.play();
			}
		},
		isOutgoing(senderId) {
			if (this.id == senderId) return true;
			return false;
		},
		findNextDate() {
			const id = randomstr({ length: 10 });
			this.$store.dispatch('setIdentifier', id);
			this.$socket.emit('half_is_going_on_next_date', { identifier: id });
		}
	},
	created() {
		if (this.chatId) this.initializeChat();
	},
	destroyed() {
		this.$socket.emit('half_is_leaving_chat');
	}
};
</script>

<style lang="scss">
#chat-container {
	width: 30%;
	background: white;
	border-radius: 10px;
	border: 1px solid rgb(218, 218, 218);

    #chat-header{
        display: flex;
        padding: 16px;
        width: calc(100% -32px);
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(218, 218, 218);

        #countdown-text {
            font-size: 40px;
        }

        button{
        }
    }

	#messages-container {
		height: 40vh;
		margin-bottom: 16px;
		background: white;
		padding: 16px;
		overflow-y: scroll;
	}

	#input-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 16px 16px 10px 16px;
		border-top: 1px solid rgb(218, 218, 218);

		textarea {
			background: transparent;
			border: 0px solid transparent;
			font-size: 16px;
			width: 100%;
			font-family: 'Poppins', Arial, Helvetica, sans-serif;
			resize: none;

			&:disabled {
				cursor: not-allowed;
			}
		}

		button {
			margin: auto;
			margin-top: 16px;
		}
	}
}

.one-min-to-go {
	color: rgb(255, 71, 80);
}

.chat-bubble {
	width: 100%;
	display: flex;
	margin-bottom: 16px;

	p {
		width: 60%;
		background: white;
		padding: 16px;
		font-size: 13px;
		color: rgba(0, 0, 0, 0.54);
	}
}

.outgoing {
	justify-content: flex-end;
	p {
		border-radius: 10px 0px 10px 10px;
		background: #f25151;
	}
}

.incoming {
	justify-content: flex-start;
	p {
		border-radius: 0px 10px 10px 10px;
		background: #d5dbe3;
	}
}

@media screen and (max-width: 768px) {
	#chat-container {
		width: 100%;
		box-shadow: none;
		border: none;

		#messages-container {
			height: 50vh;
		}
	}
}
</style>

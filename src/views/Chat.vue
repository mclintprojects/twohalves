<template>
    <div class="app">
        <div id="chat-container">
            <p id="countdown-text">{{timeRemaining}}</p>
            <div id="messages-container">
                <div v-for="(msg, index) in messages" :key="index" class="chat-bubble" :class="{incoming: !isOutgoing(msg.senderId), outgoing: isOutgoing(msg.senderId)}">
                    <p>{{msg.content}}</p>
                </div>
            </div>
            <div id="input-container">
                <textarea v-model="message" @keyup.enter="sendMessage" placeholder="Type something to send.." rows="3" />
                <img @click="sendMessage" src="img/baseline-send-24px.svg" alt="send_message"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			timeSecs: 7 * 60,
			messages: [],
			message: ''
		};
	},
	computed: {
		timeRemaining() {
			const mins = Math.floor(this.timeSecs / 60);
			const secs = this.timeSecs - mins * 60;

			return `0${mins}:${secs <= 9 ? `0${secs}` : secs}`;
		},
		chatId() {
			return this.$store.getters.chatId;
		},
		id() {
			return this.$store.getters.identifier;
		}
	},
	sockets: {
		half_disconnected() {
			this.$router.push({ name: 'date-left' });
		}
	},
	methods: {
		readMessage(data) {
			if (this.id != data.senderId) {
				this.messages.push({
					content: data.message,
					senderId: data.senderId
				});
			}
		},
		updateTime() {
			this.timeSecs = this.timeSecs - 1;
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
			}
		},
		isOutgoing(senderId) {
			if (this.id == senderId) return true;
			return false;
		}
	},
	created() {
		if (this.chatId) {
			this.$socket.on(this.chatId, this.readMessage);
			setInterval(this.updateTime, 1000);
		}
	},
	destroyed() {
		this.$socket.emit('half_is_leaving_chat', { chatId: this.chatId });
	}
};
</script>

<style lang="scss">
#chat-container {
	width: 20%;
	background: white;
	border-radius: 10px;
	border: 1px solid rgb(218, 218, 218);

	#countdown-text {
		margin: auto;
		text-align: center;
		font-size: 40px;
		border-radius: 10px;
		margin-top: 10px;
	}

	#messages-container {
		height: 66vh;
		margin-bottom: 16px;
		background: white;
		padding: 16px;
		overflow-y: wrap;
	}

	#input-container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: calc(100% - 32px);
		padding: 16px 16px 10px 16px;
		border-top: 1px solid rgb(218, 218, 218);

		textarea {
			background: transparent;
			border: 0px solid transparent;
			font-size: 16px;
			width: 90%;
			font-family: 'Poppins', Arial, Helvetica, sans-serif;
			resize: none;
		}

		img {
			&:hover {
				cursor: pointer;
			}
		}
	}
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
		height: 100vh;
		box-shadow: none;
		border-radius: 0px;

		#messages-container {
			height: 75vh;
		}
	}
}
</style>

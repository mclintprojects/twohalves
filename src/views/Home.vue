<template>
  <div class="home">
    <h1>Hello world</h1>
  </div>
</template>

<script>
import axios from 'axios';
import io from 'socket.io-client';

export default {
	data() {
		return {
			socket: io('https://twohalves.glitch.me')
		};
	},
	async created() {
		try {
			this.socket.emit('SEND_MESSAGE', { content: 'Hi' });
		} catch (err) {}
	}
};
</script>

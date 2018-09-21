<template>
    <div class="app">
        <div id="content">
            <div class="stat">
                <h1>{{stats.total}}</h1>
                <p>Currently connected users</p>
            </div>
            <div class="stat">
                <h1>{{stats.chatting}}</h1>
                <p>Currently chatting users</p>
            </div>
            <div class="stat">
                <h1>{{stats.convos}}</h1>
                <p>Conversations ongoing</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			stats: {
				total: 0,
				chatting: 0,
				convos: 0
			}
		};
	},
	sockets: {
		stat_changed() {
			this.getStats();
		}
	},
	methods: {
		async getStats() {
			try {
				const response = await axios.get('https://twohalves.glitch.me/stats');
				this.stats = response.data;
			} catch (err) {}
		}
	},
	created() {
		this.getStats();
	}
};
</script>

<style lang="scss">
.stat {
	text-align: center;
	margin-bottom: 16px;
	h1 {
		font-size: 50px;
	}
}
</style>

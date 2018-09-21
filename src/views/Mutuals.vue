<template>
    <div id="app">
        <div id="content">
            <h3>Mutual interests ({{mutuals.length}})</h3>
            <img v-if="isLoading" class="loader" src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg" alt="loading-icon">
            <div class="mutual" v-for="(mutual, index) in mutuals" :key="index">
                <div class="number"><p>{{index + 1}}</p></div>
                <p>{{mutual.interestedIn}}</p>
                <button @click="openTwitterProfile(mutual.interestedIn)" class="btn btn-small">View Twitter profile</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			isLoading: false,
			mutuals: []
		};
	},
	methods: {
		openTwitterProfile(username) {
			window.open(`https://mobile.twitter.com/${username}`, '_blank');
		}
	},
	async created() {
		try {
			this.isLoading = true;
			const username = localStorage.getItem('username') || 'default';
			const response = await axios.get(
				`https://twohalves.glitch.me/mutuals?username=${username}`
			);

			if (response.status == 200) {
				this.isLoading = false;
				this.mutuals = response.data.mutualInterests;
			}
		} catch (err) {
			this.isLoading = false;
			console.log(err);
		}
	}
};
</script>

<style lang="scss">
#content {
	padding: 16px;

	h3 {
		margin-bottom: 24px;
	}

	.mutual {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16px;

		.number {
			display: flex;
			justify-content: center;
			align-items: center;
			background: tomato;
			padding: 8px;
			border-radius: 50%;
			width: 24px;
			height: 24px;
			text-align: center;

			p {
				font-weight: bold;
			}

			+ p {
				font-weight: bold;
			}
		}
	}
}
</style>

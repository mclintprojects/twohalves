<template>
    <div id="app">
        <div id="content">
            <div class="mutual">
                <p>{{mutual.interestedIn}}</p>
                <button @click="openTwitterProfile" class="btn btn-small">View Twitter profile</button>
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
		openTwitterProfile() {}
	},
	created() {
		try {
			this.isLoading;
			const response = axios.get(
				`https://twohalves.glitch.me/mutual?username=${
					this.$route.params.username
				}`
			);
			if (response.status == 200) {
				this.isLoading = false;
				this.mutuals = response.data.mutualInterests;
			}
		} catch (err) {
			this.isLoading = false;
		}
	}
};
</script>

<style>
</style>

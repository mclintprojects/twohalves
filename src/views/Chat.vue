<template>
    <div id="chat-container">
        <p id="countdown-text">{{timeRemaining}}</p>
    </div>
</template>

<script>
export default {
	data() {
		return {
			timeSecs: 7 * 3600
		};
	},
	computed: {
		timeRemaining() {
			const mins = Math.floor(this.timeSecs / 3600);
			const secs = this.timeSecs % 3600;

			return `${mins.toFixed(2)}:${secs.toFixed(2)}`;
		}
	}
};
</script>

<style>
</style>

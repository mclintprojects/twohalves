<template>
	<div id="app">
		<div id="content">
			<h1 id="app-title">Two Halves</h1>
			<p>Find your other half in 7 mins.</p>

			<h1>How does it work?</h1>
			<p>Two Halves is an ephemeral speed dating app. You'll be matched with a stranger (irrespective of gender) and have seven (7) minutes to get to know them.</p>
			<br>
			<p>After each date, you'll both be asked to 'thumbs up" or "thumbs down" your date. A thumbs up from both parties will resume the chat and it\d last indefinitely. You can use that time to get to know your new friend, potential romantic partner/hookup better and exchange contact information.</p>
			<br>
			<p>A thumbs down from either party will cause the chat to disappear forever and you'll then be matched with another stranger.</p>
			<button id="btn-get-started" class="btn">Get started</button>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
	background-color: #ffffff;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%2351cc32' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23f6e312' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%2300c286' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23ffb81e' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%2300b0c8' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23ff8c41' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%230098e8' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ff6461' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%230078db' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23f2477d' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%237a52aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23c63e93' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
}

#app {
	display: flex;
	align-items: center;
	height: 100vh;
}

#content {
	width: 40%;
	margin: auto;
	z-index: 1000;

	#app-title {
		color: #00c286;
		font-size: 30px;
		text-transform: lowercase;
		text-shadow: 0px 3px #ffb81e, 0px 6px #0098e8;

		+ p {
			color: rgba(0, 0, 0, 0.54);
			font-size: 16px;
			margin-top: 8px;
			margin-bottom: 40px;

			+ h1 {
				font-size: 25px;
				margin-bottom: 8px;
			}
		}
	}

	h1 {
		color: rgba(0, 0, 0, 0.54);
	}

	p {
		color: rgba(0, 0, 0, 0.8);
	}

	h1:last-child {
		margin-top: 16px;
	}

	#btn-get-started {
		margin-top: 24px;
		background: #f6e312;
	}
}
</style>



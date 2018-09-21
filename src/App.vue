<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
	created(){
		this.$store.dispatch('setUsername', localStorage.getItem('username'));
	}
}
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Muli', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	min-height: 100vh;
}

.app {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.btn {
	color: white;
	background: #2c3e50;
	border: 0px solid transparent;
	border-radius: 30px;
	padding: 16px 24px;
	text-transform: uppercase;
	font-size: 12px;

	&:hover {
		background: #1d2b38 !important;
		cursor: pointer;
	}
}

.btn-small{
	padding: 10px;
	font-size: 10px;
}

.findingLoader {
	font-size: 18px;
	animation: findingAnim 2s infinite;
}

.input {
	border: 1px solid #2c3e50;
	border-radius: 30px;
	background: white;
	padding: 16px;
}

@keyframes findingAnim {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}
</style>

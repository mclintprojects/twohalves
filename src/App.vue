<template>
  <div>
    <router-view />
  </div>
</template>

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
</style>

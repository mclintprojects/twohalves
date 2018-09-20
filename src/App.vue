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
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	min-height: 100vh;
}

.btn {
	color: white;
	background: white;
	border: 0px solid transparent;
	border-radius: 30px;
	box-shadow: 0px 4px 4px rgba(177, 177, 177, 0.37);
	padding: 16px 24px;
	text-transform: uppercase;
	font-size: 12px;

	&:hover {
		background: rgb(236, 236, 236);
		cursor: pointer;
	}
}
</style>

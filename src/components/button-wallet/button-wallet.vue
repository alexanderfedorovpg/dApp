<template>
	<button class="button-wallet">Connect wallet</button>
</template>

<style lang="scss">
.button-wallet {
	font-weight:    500;
	font-size:      11px;
	line-height:    130%;
	text-transform: uppercase;
	color:          #fff;
	background:     transparent;
	border:         2px solid #9751f3;
	border-radius:  8px;
	padding:        15px 28px;


	&:hover {
		border:     2px solid transparent;
		background: linear-gradient(115.21deg, #eb14d5 15.77%, #9751f3 83.77%);
		box-shadow: 0 5px 40px rgba(235, 20, 213, 0.5);
	}
}
</style>

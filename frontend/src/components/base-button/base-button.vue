<script>
/**
 * Base Button
 */
export default {
	props: {
		text:      String,
		isDisable: {type: Boolean, default: false},
	}
}
</script>
<template>
	<button class="base-button" :class="{'base-button_disable': isDisable}" :disabled="isDisable">{{ text }}</button>
</template>

<style lang="scss">
.base-button {
	font-size:      13px;
	text-transform: uppercase;
	color:          #fff;
	background:     linear-gradient(115.21deg, #eb14d5 15.77%, #9751f3 83.77%);
	border-radius:  8px;
	width:          285px;
	height:         69px;
	border:         1px solid transparent;
	cursor:         pointer;

	&:hover {
		box-shadow: 0 5px 40px rgba(235, 20, 213, 0.5);
	}

	&_disable {
		opacity: 0.5;
	}
}
</style>

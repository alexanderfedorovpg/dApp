<script>/**
 * Base Button
 */
import {computed} from 'vue';

export default {
	props: {
		text:      String,
		isDisable: {type: Boolean, default: false},
		isLoading: {type: Boolean, default: false},
	},
	setup(props) {
		const textButton      = computed(() => (props.isLoading ? '' : props.text))
		const isDisableButton = computed(() => (props.isDisable || props.isLoading))

		return {textButton, isDisableButton}
	}
}
</script>
<template>
	<button class="base-button" :class="{'base-button_disable': isDisable, 'base-button_loading': isLoading}" :disabled="isDisableButton">{{ textButton }}</button>
</template>

<style lang="scss">
.base-button {
	position:       relative;
	font-size:      13px;
	text-transform: uppercase;
	color:          #fff;
	background:     linear-gradient(115.21deg, #eb14d5 15.77%, #9751f3 83.77%);
	border-radius:  8px;
	width:          285px;
	height:         69px;
	border:         1px solid transparent;
	cursor:         pointer;

	&_loading::after {
		content:          "";
		position:         absolute;
		width:            16px;
		height:           16px;
		top:              0;
		left:             0;
		right:            0;
		bottom:           0;
		margin:           auto;
		border:           4px solid transparent;
		border-top-color: #fff;
		border-radius:    50%;
		animation:        button-loading-spinner 1s ease infinite;
	}

	@keyframes button-loading-spinner {
		from {
			transform: rotate(0turn);
		}

		to {
			transform: rotate(1turn);
		}
	}

	&:hover {
		box-shadow: 0 5px 40px rgba(235, 20, 213, 0.5);
	}

	&_disable {
		opacity: 0.5;
	}
}
</style>

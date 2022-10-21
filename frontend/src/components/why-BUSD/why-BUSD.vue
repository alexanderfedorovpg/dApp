<script lang="ts">
import {onMounted, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useObserverHook} from '../../hooks/use-observer-hook';

/**
 * Component Why BUSD
 */
export default {
	setup() {
		const {t}        = useI18n();
		const {observer} = useObserverHook()

		/** Ref HTML Block Component */
		const block = ref<Element>(null);

		onMounted(() => {
			observer.observe(block.value)
		})

		return {t, block}
	},
}
</script>
<template>
	<div ref="block" class="why-BUSD">
		<div class="why-BUSD-title">{{ t('why-BUSD_title') }}</div>
		<div class="why-BUSD-steps">
			<div class="why-BUSD-step">
				<div class="why-BUSD-step__blur1"></div>
				<div class="why-BUSD-step__blur2"></div>
				<div class="why-BUSD-step__number">1</div>
				<div class="why-BUSD-step__title">{{ t('why-BUSD-step1__title') }}</div>
				<div class="why-BUSD-step__text">{{ t('why-BUSD-step1__text') }}</div>
			</div>
			<div class="why-BUSD-step">
				<div class="why-BUSD-step__blur1"></div>
				<div class="why-BUSD-step__blur2"></div>
				<div class="why-BUSD-step__number">2</div>
			<div class="why-BUSD-step__title">{{ t('why-BUSD-step2__title') }}</div>
				<div class="why-BUSD-step__text">{{ t('why-BUSD-step2__text') }}</div>
			</div>
			<div class="why-BUSD-step">
				<div class="why-BUSD-step__blur1"></div>
				<div class="why-BUSD-step__blur2"></div>
				<div class="why-BUSD-step__number">3</div>
				<div class="why-BUSD-step__title">{{ t('why-BUSD-step3__title') }}</div>
				<div class="why-BUSD-step__text">{{ t('why-BUSD-step3__text') }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "../../assets/values.scss";

.why-BUSD {
	margin-top: 120px;
}

.why-BUSD-title {
	font-weight: 700;
	font-size:   32px;
	color:       #fff;

	@media (max-width: $max-mobile-with) {
		font-size: 20px;
	}
}

.why-BUSD-steps {
	display:         flex;
	flex-flow:       row;
	justify-content: center;
	align-items:     center;
	margin-top:      40px;
	margin-bottom:   50px;

	@media (max-width: $max-mobile-with) {
		flex-flow: column;
	}
}

.why-BUSD-step {
	overflow:        hidden;
	position:        relative;
	background:      rgba(104, 104, 104, 0.3);
	backdrop-filter: blur(10px);
	border-radius:   20px;
	width:           378px;
	height:          286px;
	text-align:      left;
	padding:         40px;
	margin-right:    30px;

	&:last-child {
		margin-right: 0
	}

	@media (max-width: $max-mobile-with) {
		width:   100%;
		height:  250px;
		margin:  10px 0;
		padding: 30px;
	}

	&__title {
		margin-top: 25px;
		font-size:  20px;
		color:      #fff;

		@media (max-width: $max-mobile-with) {
			font-size: 18px;
		}
	}

	&__blur1 {
		position:       absolute;
		width:          150px;
		height:         150px;
		left:           295px;
		top:            -60px;
		background:     #9751f3;
		filter:         blur(100px);
		-webkit-filter: blur(100px);
		-moz-filter:    blur(100px);
		-ms-filter:     blur(100px);
		-o-filter:      blur(100px);
	}

	&__blur2 {
		position:       absolute;
		width:          150px;
		height:         150px;
		right:          295px;
		bottom:         -60px;
		background:     #9751f3;
		filter:         blur(100px);
		-webkit-filter: blur(100px);
		-moz-filter:    blur(100px);
		-ms-filter:     blur(100px);
		-o-filter:      blur(100px);
	}

	&__number {
		width:         max-content;
		padding:       10px 21px;
		font-weight:   700;
		font-size:     30px;
		text-align:    center;
		color:         #fff;
		background:    linear-gradient(224.43deg, #9751f3 17.36%, #eb14d5 101.01%);
		box-shadow:    inset 0 0 12px rgba(255, 255, 255, 0.5);
		border-radius: 8px;

		@media (max-width: $max-mobile-with) {
			font-size: 22px;
		}
	}

	&__text {
		margin-top: 10px;
		font-size:  16px;
		color:      #c6c6c6;

		@media (max-width: $max-mobile-with) {
			font-size: 15px;
		}
	}
}
</style>

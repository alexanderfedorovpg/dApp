<script lang="ts">
import {onMounted, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useObserverHook} from '../../hooks/use-observer-hook';

/**
 * Component Roadmap
 */
export default {
	setup() {
		const {t} = useI18n();

		/** Ref HTML Block Component */
		const block      = ref<Element>(null);
		const {observer} = useObserverHook()

		onMounted(() => {
			observer.observe(block.value)
		})

		return {t, block}
	},
}
</script>
<template>
	<div ref="block" class="roadmap">
		<div class="roadmap-title">{{ t('roadmap_title') }}</div>
		<div class="roadmap-map">
			<div class="roadmap-map__step">
				<img src="../../assets/images/1.svg">
				<div class="roadmap-map__step-description">
					<div class="roadmap-map__step-title">{{ t('roadmap_stage1') }}</div>
					<div class="roadmap-map__step-text" v-html="t('roadmap_q1_description')"></div>
				</div>
			</div>
			<div class="roadmap-map-dots-wrapper">
				<div class="roadmap-map-dots"></div>
			</div>
			<div class="roadmap-map__step">
				<img src="../../assets/images/2.svg">
				<div class="roadmap-map__step-description">
					<div class="roadmap-map__step-title">{{ t('roadmap_stage2') }}</div>
					<div class="roadmap-map__step-text" v-html="t('roadmap_q2_description')"></div>
				</div>
			</div>
			<div class="roadmap-map-dots-wrapper">
				<div class="roadmap-map-dots"></div>
			</div>
			<div class="roadmap-map__step">
				<img src="../../assets/images/3.svg">
				<div class="roadmap-map__step-description">
					<div class="roadmap-map__step-title">{{ t('roadmap_stage3') }}</div>
					<div class="roadmap-map__step-text" v-html="t('roadmap_q3_description')"></div>
				</div>
			</div>
			<div class="roadmap-map-dots-wrapper">
				<div class="roadmap-map-dots"></div>
			</div>
			<div class="roadmap-map__step">
				<img src="../../assets/images/4.svg">
				<div class="roadmap-map__step-description">
					<div class="roadmap-map__step-title">{{ t('roadmap_stage4') }}</div>
					<div class="roadmap-map__step-text" v-html="t('roadmap_q4_description')"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "../../assets/values.scss";

.roadmap {
	margin-top: 120px;
}

.roadmap-title {
	font-weight: 700;
	font-size:   32px;
	color:       #fff;

	@media (max-width: $max-mobile-with) {
		font-size: 20px;
	}
}

.roadmap-map {
	margin-top:     80px;
	display:        flex;
	flex-direction: row;
	width:          100%;

	@media (max-width: $max-mobile-with) {
		flex-direction: column;
		margin-top:     40px;
	}
}

.roadmap-map__step {
	text-align: left;
	max-width:  276px;

	@media (max-width: $max-mobile-with) {
		margin:    10px 0;
		max-width: 100%;
	}
}

.roadmap-map__step-title {
	margin-top:  30px;
	font-size:   20px;
	line-height: 130%;
	color:       #fff;
}

.roadmap-map__step-text {
	margin-top: 12px;
	font-size:  16px;
	color:      #c6c6c6;
}

.roadmap-map-dots-wrapper {
	position: relative;
	width:    43px;

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.roadmap-map-dots {
	position:   absolute;
	width:      180px;
	height:     5px;
	top:        148px;
	right:      -5px;
	background: url("../../assets/images/line.svg");
}

</style>

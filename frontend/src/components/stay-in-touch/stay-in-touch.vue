<script lang="ts">
import {onMounted, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useObserverHook} from '../../hooks/use-observer-hook';

/**
 * Component Stay In Touch
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
	<div ref="block" class="stay-in-touch">
		<div class="stay-in-touch-title">{{ t('follow_the_news_title') }}</div>
		<div class="stay-in-touch-block">
			<a class="stay-in-touch-button" :href="t('social_link_telegram')">
				<img src="../../assets/images/telegram.svg">
				<div class="stay-in-touch-button__description">
					<div class="stay-in-touch-button__description-title">Telegram</div>
					<div class="stay-in-touch-button__description-text">{{ t('follow_the_news_join') }}</div>
				</div>
				<img class="stay-in-touch-button__arrow" src="../../assets/images/arrow6.svg">
				<div class="stay-in-touch-button__blur"></div>
			</a>
			<a class="stay-in-touch-button" :href="t('social_link_discord')">
				<img src="../../assets/images/discord.svg">
				<div class="stay-in-touch-button__description">
					<div class="stay-in-touch-button__description-title">Discord</div>
					<div class="stay-in-touch-button__description-text">{{ t('follow_the_news_join') }}</div>
					<div class="stay-in-touch-button__description-blur"></div>
				</div>
				<img class="stay-in-touch-button__arrow" src="../../assets/images/arrow6.svg">
				<div class="stay-in-touch-button__blur"></div>
			</a>
			<a class="stay-in-touch-button" :href="t('social_link_reddit')">
				<img src="../../assets/images/reddit.svg">
				<div class="stay-in-touch-button__description">
					<div class="stay-in-touch-button__description-title">Reddit</div>
					<div class="stay-in-touch-button__description-text">{{ t('follow_the_news_join') }}</div>
				</div>
				<img class="stay-in-touch-button__arrow" src="../../assets/images/arrow6.svg">
				<div class="stay-in-touch-button__blur"></div>
			</a>
		</div>
	</div>
</template>

<style lang="scss">
@import "../../assets/values.scss";

.stay-in-touch {
	margin-top:    128px;
	margin-bottom: 80px;
}

.stay-in-touch-title {
	font-weight: 700;
	font-size:   32px;
	color:       #fff;

	@media (max-width: $max-mobile-with) {
		font-size: 20px;
	}
}

.stay-in-touch-block {
	margin-top:      80px;
	display:         flex;
	flex-direction:  row;
	justify-content: space-between;

	@media (max-width: $max-mobile-with) {
		margin-top:      50px;
		width:           100%;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
	}
}

.stay-in-touch-button__blur {
	position:   absolute;
	width:      150px;
	height:     150px;
	background: #9751f3;
	filter:     blur(100px);
	z-index:    -1;
}

.stay-in-touch-button {
	display:         flex;
	justify-content: space-between;
	flex-direction:  row;
	overflow:        hidden;
	align-items:     center;
	width:           100%;
	min-width:       300px;
	max-width:       378px;
	height:          126px;
	background:      rgba(104, 104, 104, 0.3);
	backdrop-filter: blur(10px);
	border-radius:   20px;

	&:hover {
		.stay-in-touch-button__blur {
			position:   absolute;
			width:      200px;
			height:     200px;
			background: #9751f3;
			filter:     blur(100px);
			right:      30%;
		}
	}

	@media (max-width: $max-mobile-with) {
		margin: 10px 0;
	}
}

.stay-in-touch-button__description-blur {
	background: #9751f3;
	filter:     blur(100px);
}

.stay-in-touch-button__description {
	text-align:   left;
	margin-right: auto;
}

.stay-in-touch-button__description-title {
	font-size: 20px;
	color:     #fff;
}

.stay-in-touch-button__description-text {
	font-size:  16px;
	color:      #c6c6c6;
	margin-top: 5px;
}

.stay-in-touch-button__arrow {
	position:     relative;
	top:          -10px;
	margin-right: 40px;
}
</style>

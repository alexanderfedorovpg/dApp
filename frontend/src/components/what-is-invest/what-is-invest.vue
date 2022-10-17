<script lang="ts">
import {onMounted, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useObserverHook} from '../../hooks/use-observer-hook';

/**
 * Component What Is Invest
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
	<div ref="block" class="what-is-invest">
		<div class="what-is-invest__item">
			<div class="what-is-invest__item-container">
				<img class="what-is-invest__item-image" src="../../assets/images/img_1.png">
			</div>
			<div class="what-is-invest__item-block what-is-invest__item-block_text">
				<span class="what-is-invest__item-title">{{ t('what_is_invest_block1_title') }}</span>
				<p class="what-is-invest__item-text" v-html="t('what_is_invest_block1_description_text')"></p>
			</div>
		</div>
		<div class="what-is-invest__item">
			<div class="what-is-invest__item-container what-is-invest__item-container_text">
				<span class="what-is-invest__item-title">{{ t('what_is_invest_block2_title') }}</span>
			<p class="what-is-invest__item-text" v-html="t('what_is_invest_block2_description_text')"></p>
			</div>
			<div class="what-is-invest__item-block what-is-invest__item-block_image">
				<img class="what-is-invest__item-image1" src="../../assets/images/img_2.png">
			</div>
		</div>
		<div class="what-is-invest__item">
			<div class="what-is-invest__item-container what-is-invest__item-container_image">
				<img class="what-is-invest__item-image2" src="../../assets/images/fgerg_1.png">
			</div>
			<div class="what-is-invest__item-block what-is-invest__item-block_text">
				<span class="what-is-invest__item-title">{{ t('what_is_invest_block3_title') }}</span>
				<p class="what-is-invest__item-text" v-html="t('what_is_invest_block3_description_text')"></p>
			</div>
	</div>
	</div>
</template>

<style lang="scss">
.what-is-invest {
	margin-top: 80px;
}

.what-is-invest__item {
	display:         flex;
	flex-direction:  row;
	justify-content: space-around;
	margin-bottom:   40px;
}

.what-is-invest__item-block {
	text-align: left;
	width:      582px;

	&_text {
		text-align: left;
	}

	&_image {
		text-align: center;
	}
}

.what-is-invest__item-container {
	text-align: center;
	width:      100%;
	max-width:  582px;

	&_text {
		text-align: left;
	}
}

.what-is-invest__item-title {
	font-size:  22px;
	color:      #fff;
	text-align: left;
}

.what-is-invest__item-text {
	font-size:  18px;
	color:      #c6c6c6;
	text-align: left;
}

.what-is-invest__item-image {
	width:  385px;
	height: 380px;
}

.what-is-invest__item-image1 {
	width:  301px;
	height: 380px;
}

.what-is-invest__item-image2 {
	width:  365px;
	height: 380px;
}
</style>

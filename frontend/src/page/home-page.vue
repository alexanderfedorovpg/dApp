<script lang="ts">
import {useI18n} from 'vue-i18n';
import DescriptionBlock from '../components/description-block/description-block.vue';
import WhatIsInvest from '../components/what-is-invest/what-is-invest.vue';
import MechanicsApp from '../components/mechanics-app/mechanics-app.vue';
import WhyBUSD from '../components/why-BUSD/why-BUSD.vue';
import RoadmapBlock from '../components/roadmap-block/roadmap-block.vue';
import DistributionOfFunds from '../components/distribution-of-funds/distribution-of-funds.vue';
import StayInTouch from '../components/stay-in-touch/stay-in-touch.vue';

/**
 * Home page
 */
export default {
	components: {
		DescriptionBlock,
		WhatIsInvest,
		MechanicsApp,
		WhyBUSD,
		RoadmapBlock,
		DistributionOfFunds,
		StayInTouch
	},
	setup() {
		const {t} = useI18n();

		return {t}
	},

}
</script>
<template>
	<description-block/>
	<p class="text-center" v-html="t('homepage_text_block')"></p>
	<what-is-invest/>
	<mechanics-app/>
	<WhyBUSD/>
	<roadmap-block/>
	<distribution-of-funds/>
	<stay-in-touch/>
</template>

<style lang="scss">
@import "../assets/values.scss";

#crowdsale {
	width:    100%;
	overflow: hidden;
	position: relative;
}

.wrapper {
	max-width: $max-desktop-with;
	margin:    104px auto auto;
	position:  relative;
	z-index:   1;

	@media (max-width: $max-mobile-with) {
		max-width: 100%;
		margin:    104px 20px auto;
	}
}

.text-center {
	max-width:   1208px;
	font-size:   32px;
	line-height: 120%;
	text-align:  center;
	color:       #fff;
	margin:      120px auto auto;

	@media (max-width: $max-mobile-with) {
		margin:    80px auto auto;
		font-size: 20px;
	}
}
</style>

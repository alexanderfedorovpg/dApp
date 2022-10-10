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
		const { t } = useI18n();

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
	max-width:  $max-desktop-with;
	margin:     104px auto auto;
	position:   relative;
	z-index:    1;
}

.text-center {
	max-width:   685px;
	padding-top: 120px;
	font-size:   32px;
	line-height: 120%;
	text-align:  center;
	color:       #fff;
	margin:      auto;
}
</style>

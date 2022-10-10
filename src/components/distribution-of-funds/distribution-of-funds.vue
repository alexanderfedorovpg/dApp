<script lang="ts">
import {useI18n} from 'vue-i18n';

/**
 * Component Distribution Of Funds
 */
export default {
	setup() {
		const { t } = useI18n();

		return {t}
	},
}
</script>
<template>
	<div class="distribution-of-funds">
		<div class="distribution-of-funds-title">{{t('distribution_of_funds_title')}}</div>
		<div class="distribution-of-funds-block">
			<div class="distribution-of-funds-block__description">
				<div class="distribution-of-funds-description-block">
					<div class="distribution-of-funds-description-block__title">Project marketing</div>
					<div class="distribution-of-funds-description-block__text">62 000 BUSD</div>
				</div>
				<div class="distribution-of-funds-description-block">
					<div class="distribution-of-funds-description-block__title">Blockchain developer</div>
					<div class="distribution-of-funds-description-block__text">40 000 BUSD</div>
				</div>
				<div class="distribution-of-funds-description-block">
					<div class="distribution-of-funds-description-block__title">Back-end developer</div>
					<div class="distribution-of-funds-description-block__text">40 000 BUSD</div>
				</div>
				<div class="distribution-of-funds-description-block">
					<div class="distribution-of-funds-description-block__title">Bug tester</div>
					<div class="distribution-of-funds-description-block__text">28 000 BUSD</div>
				</div>
				<div class="distribution-of-funds-description-block">
					<div class="distribution-of-funds-description-block__title">React native developer</div>
					<div class="distribution-of-funds-description-block__text">46 000 BUSD</div>
				</div>
				<div class="distribution-of-funds-description-block">
					<div class="distribution-of-funds-description-block__title">UI/UX designer</div>
					<div class="distribution-of-funds-description-block__text">34 000 BUSD</div>
				</div>
			</div>
			<div class="distribution-of-funds-block__image">
				<img src="../../assets/images/distribution-of-funds.png">
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.distribution-of-funds {
	margin-top: 120px;
}

.distribution-of-funds-title {
	font-weight: 700;
	font-size:   32px;
	color:       #fff;
}

.distribution-of-funds-block {
	margin-top:     80px;
	display:        flex;
	flex-direction: row;
	width:          100%;
	align-items:    center;

	&__description {
		display:   flex;
		flex-wrap: wrap;
	}

	.distribution-of-funds-description-block {
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		width:           280px;
		height:          120px;
		border-radius:   20px;
		border:          2px solid rgba(151, 81, 243, 0.3);
		margin:          0 0 30px 30px;


		&__title {
			font-weight: 500;
			font-size:   20px;
			text-align:  center;
			color:       #c6c6c6;
		}

		&__text {
			margin-top:  10px;
			font-weight: 500;
			font-size:   26px;
			text-align:  center;
			color:       #fff;
		}
	}
}

</style>

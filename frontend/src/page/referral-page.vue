<script lang="ts">
import axios, {AxiosResponse} from 'axios';
import {reactive} from 'vue';
import {useI18n} from 'vue-i18n';
import {useRoute} from 'vue-router';
import {apiUrl} from '../../../config';
import BaseButton from '../components/base-button/base-button.vue';
import QRCodeVue3 from 'qrcode-vue3';
import ReferralData from '../../../types/referral-data';
import UserData from '../../../types/user-data';

/**
 * Page referrals
 */
export default {
	components: {BaseButton, QRCodeVue3},
	setup() {
		const {t}                                                          = useI18n();
		const {params}                                                     = useRoute();
		const referralId                                                   = params.referralId;
		const state: { userData: UserData, referralsData: ReferralData[] } = reactive({userData: null, referralsData: null});

		axios.get(apiUrl + `/api/v1/user/?referralId=${referralId}`).then((response: AxiosResponse<UserData>) => {
			state.userData = response.data;
		})

		axios.get(apiUrl + '/api/v1/get-referrals/').then((response: AxiosResponse<ReferralData[]>) => {
			state.referralsData = response.data;
		})

		return {t, state}
	},
}
</script>

<template>
	<div class="top-referrals-page" v-if="state.userData !== null">
			<div class="top-referrals-page-block-description">
				<div class="top-referrals-page-block-description-wrapper">
					<div class="top-referrals-page__description-tabs">
						<div class="top-referrals-page__description-tab">
							<div class="top-referrals-page-description-tab__title">{{ t('referral_page_invited') }}</div>
							<div class="top-referrals-page-description-tab__counter">
								<img src="../assets/images/person.svg">
								<div class="top-referrals-page-description-tab__counter-text">{{ state.userData.invited }}</div>
							</div>
						</div>
						<div class="top-referrals-page__description-tab-split"></div>
						<div class="top-referrals-page__description-tab">
							<div class="top-referrals-page-description-tab__title">{{ t('referral_page_profit') }}</div>
							<div class="top-referrals-page-description-tab__counter">
									<img src="../assets/images/bitcoins.svg">
									<div class="top-referrals-page-description-tab__counter-text">{{ state.userData.profit }}</div>
							</div>
						</div>
					</div>
					<div class="top-referrals-page-link-text">{{ t('referral_page_text_about_link') }}</div>
					<div class="top-referrals-page-link-description">{{ t('referral_page_text_about_description') }}</div>
					<base-button :text="t('referral_page_about_button_text') +' 25  BUSD'"/>
				</div>
				<div class="top-referrals-page-block-description-qr">
					<QRCodeVue3
							:width="200"
							:height="200"
							:value="state.userData.addressUser + 'referral'"
							:qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
							:imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
							:image="require('../assets/images/SwayzeLogo.svg')"
							:backgroundOptions="{ color: '#d9d9d9' }"
							:cornersSquareOptions="{ type: 'extra-rounded', color: '#453563' }"
							:cornersDotOptions="{type: 'square', color: '#453563'}"
							:imgclass="'top-referrals-page-block-description-qr-image'"
							:dotsOptions="{
									type: 'dots',
									gradient: {
										type: 'radial',
										rotation: 0,
										colorStops: [
											{ offset: 0, color: '#9f068f' },
											{ offset: 1, color: '#6627c2' },
										],
									},
								}"
					/>
					<div>{{ t('referral_page_qr_code') }}</div>
				</div>
		</div>
		<div class="top-referrals-page__active-investors">
			{{ t('referral_page_the_most_active_investors') }}
		</div>
		<div class="top-referrals-page-table-wrapper" v-if="null !== state.referralsData">
			<table class="top-referrals-page__table">
			<thead>
				<tr>
					<td class="top-referrals-page__table-head">{{ t('referral_page_table_address') }}</td>
					<td class="top-referrals-page__table-head">{{ t('referral_page_table_attracted') }} <span>{{ t('referral_page_table_people') }}</span></td>
					<td class="top-referrals-page__table-head">{{ t('referral_page_table_profit') }} <span>BUSD</span></td>
				</tr>
			</thead>
			<tbody>
			<template v-for="row in state.referralsData">
				<tr class="top-referrals-page__table-row">
					<td class="top-referrals-page__table-cell">{{ row.address }}</td>
					<td class="top-referrals-page__table-cell">{{ row.attracted }}</td>
					<td class="top-referrals-page__table-cell">{{ row.profit }}</td>
				</tr>
			</template>
			</tbody>
		</table>
		</div>
	</div>
</template>

<style lang="scss">
@import "../assets/values.scss";

.top-referrals-page-table-wrapper {
	@media (max-width: $max-mobile-with) {
		overflow-x: scroll;
		display:    flex;
		width:      100%;
	}
}

.top-referrals-page {
	margin: 184px auto auto;

	&__table-row {
		font-weight: 400;
		font-size:   16px;
		color:       #c6c6c6;
		background:  #1c1638;

		&:nth-child(2n) {
			background: transparent;
		}

		@media (max-width: $max-mobile-with) {
			font-size: 14px;
		}
	}

	&__table-cell {
		padding:    25px 25px 25px 0;
		text-align: left;

		&:first-child {
			padding-left: 50px;
		}

		@media (max-width: $max-mobile-with) {
			padding: 10px 10px 10px 0;

			&:first-child {
				padding-left: 10px;
			}
		}
	}

	&__table-head {
		padding:    25px 25px 25px 0;
		font-size:  22px;
		color:      #fff;
		text-align: left;

		&:first-child {
			padding-left: 50px;
		}

		span {
			color: #585467;
		}

		@media (max-width: $max-mobile-with) {
			padding:   10px 10px 10px 0;
			font-size: 15px;

			&:first-child {
				padding-left: 10px;
			}
		}
	}

	&__table {
		margin-top:    90px;
		margin-bottom: 80px;
		width:         100%;

		@media (max-width: $max-mobile-with) {
			margin-top: 50px
		}
	}

	&__active-investors {
		font-size:  32px;
		text-align: center;
		color:      #fff;

		@media (max-width: $max-mobile-with) {
			flex-direction:  column;
			justify-content: center;
			align-items:     center;
			font-size:       20px;
		}
	}

	&-block-description {
		text-align:      left;
		display:         flex;
		flex-direction:  row;
		justify-content: space-between;

		@media (max-width: $max-mobile-with) {
			flex-direction:  column;
			justify-content: center;
			align-items:     center;
		}
	}

	&-block-description-wrapper {
		text-align: center;
	}

	&-block-description-qr {
		display:         flex;
		flex-direction:  column;
		justify-content: flex-end;
		width:           270px;
		height:          327px;
		background:      rgba(104, 104, 104, 0.3);
		backdrop-filter: blur(10px);
		padding:         40px;
		border-radius:   20px;
		font-size:       16px;
		text-align:      center;
		color:           #c6c6c6;

		&-image {
			border-radius: 18px;
		}

		@media (max-width: $max-mobile-with) {
			text-align: center;
			margin:     20px auto;
		}
	}

	&-link-text {
		margin-top:  50px;
		text-align:  left;
		font-weight: 500;
		font-size:   22px;
		color:       #fff;

		@media (max-width: $max-mobile-with) {
			text-align: center;
			font-size:  18px;
		}
	}

	&-link-description {
		margin-top:    10px;
		text-align:    left;
		font-weight:   400;
		font-size:     16px;
		color:         #c6c6c6;
		margin-bottom: 50px;

		@media (max-width: $max-mobile-with) {
			text-align: center;
			font-size:  14px;
		}
	}

	&__description-tabs {
		display:         flex;
		flex-direction:  row;
		justify-content: space-between;
		align-items:     center;
		width:           290px;
	}

	&__description-tab {
		display:        flex;
		flex-direction: column;
		width:          100%;
		align-items:    center;
		height:         75px;
	}

	&-description-tab {
		&__title {
			color:          #c6c6c6;
			text-transform: uppercase;
			margin-bottom:  15px;
			font-size:      14px;
		}

		&__counter {
			display:         flex;
			flex-direction:  row;
			justify-content: center;
			align-items:     center;
			width:           100%;
			background:      rgba(104, 104, 104, 0.3);
			padding:         12px;
			border-radius:   8px;
			height:          44px;

			&-text {
				font-size:   18px;
				color:       #c6c6c6;
				margin-left: 15px;
			}
		}
	}

	&__description-tab-split {
		width:      1px;
		height:     30px;
		background: #696a87;
		margin:     30px 30px 0 30px;
	}

	&__description-total-block {
		display:        flex;
		flex-direction: row;
		margin-top:     80px;

		&__item {
			padding:      0 40px;
			border-right: 1px solid #696a87;

			&:first-child {
				padding-left: 0;
			}

			&:last-child {
				border-right: none;
			}
		}

		&__item-value {
			font-size:     30px;
			color:         #fff;
			margin-bottom: 10px;
		}

		&__item-text {
			font-size: 18px;
			color:     #c6c6c6;
		}
	}
}



</style>

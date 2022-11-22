<script lang="ts">
import axios, {AxiosResponse} from 'axios';
import {computed, reactive, ref, watch} from 'vue';
import {useBoard, useEthers, useWallet} from 'vue-dapp';
import {useI18n} from 'vue-i18n';
import {useRoute, useRouter} from 'vue-router';
import Web3 from 'web3';
import {apiUrl, siteUrl} from '../../../config';
import BaseButton from '../components/base-button/base-button.vue';
import QRCodeVue3 from 'qrcode-vue3';
import ReferralData from '../../../types/referral-data';
import UserData from '../../../types/user-data';
import {ADDRESS_CONTRACT, ADDRESS_TOKEN, NIl_ADDRESS} from '../contract/types';
import {useObserverHook} from '../hooks/use-observer-hook';
import {BUTTON_STATUS, useWalletHook} from '../hooks/use-wallet-hook';
import {HOME_PAGE} from './page-list';

const abi   = require('../contract/abi.json');
const token = require('../contract/token.json');

/**
 * Page referrals
 */
export default {
	components: {BaseButton, QRCodeVue3},
	setup() {
		const {t}                                                            = useI18n();
		const {params}                                                       = useRoute();
		const router                                                         = useRouter();
		const {currentWalletAddress, referralId, checkNetworks, isActivated} = useWalletHook();
		const {open}                                                         = useBoard();
		const {provider}                                                     = useEthers();
		const {activeLink}                                                   = useObserverHook();
		const ROUTE_REFERRAL_ID                                              = 'ROUTEREFERRALID'


		let routeReferralId                                                = params.referralId;
		const state: { userData: UserData, referralsData: ReferralData[] } = reactive({userData: {invited: 0, profit: 0, referralId: '', addressUser: ''}, referralsData: null});
		const referralUrl                                                  = computed(() => (siteUrl + '/referral/' + state.userData.referralId));
		const isDisableButton                                              = computed(() => (Boolean(referralId.value) || state.userData.addressUser === currentWalletAddress.value));
		const isLoadingButton                                              = ref(false);
		activeLink.value                                                   = '';

		/**
		 * Handler click to invest button
		 */
		function clickToInvest() {
			checkNetworks();

			if (false === isActivated.value && '' === currentWalletAddress.value) {
				open();

				return;
			}

			// @ts-ignore
			const web3 = new Web3(provider.value.provider);

			const contract = new web3.eth.Contract(abi, ADDRESS_CONTRACT);
			const cToken   = new web3.eth.Contract(token, ADDRESS_TOKEN);

			isLoadingButton.value = true;

			cToken.methods.allowance(currentWalletAddress.value, ADDRESS_CONTRACT).call().then((balance) => {
				if (Number(balance) >= 25 * Math.pow(10, 18)) {
					const address = (state.userData.addressUser && state.userData.addressUser !== currentWalletAddress.value ?
							state.userData.addressUser : NIl_ADDRESS);

					contract.methods.buy(address).send({from: currentWalletAddress.value}).then(() => {
						const promise = [
							axios.post(apiUrl + '/api/v1/add-link', {addressUser: currentWalletAddress.value}),
							axios.post(apiUrl + '/api/v1/save-referral', {addressUserTo: address, addressUserFrom: currentWalletAddress.value})
						];

						Promise.all(promise).then((response) => {
							localStorage.removeItem(ROUTE_REFERRAL_ID);
							location.href = '/referral/';
						})
					}).catch((data) => {
						alert('Transaction BUY failed.')
					}).finally(() => {
						isLoadingButton.value = false;
					});
				}
				else {
					cToken.methods.approve(ADDRESS_CONTRACT, String(25 * Math.pow(10, 18))).send({from: currentWalletAddress.value}).then(() => {
					}).catch((data) => {
						alert('Transaction APPROVE failed.')
					}).finally(() => {
						isLoadingButton.value = false;
					});
				}
			})
		}

		/**
		 * Handler copy link referral
		 */
		function copy() {
			if (!navigator.clipboard) {
				const textArea = document.createElement('textarea');
				textArea.value = referralUrl.value;

				textArea.style.top      = '0';
				textArea.style.left     = '0';
				textArea.style.position = 'fixed';

				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				document.execCommand('copy');
				alert('Copying text was successful');
				return;
			}

			navigator.clipboard.writeText(referralUrl.value).then(function () {
				alert('Copying text was successful');
			});
		}

		/**
		 * Handler get user data
		 */
		function getUserData(referralId) {
			if (!referralId) {
				return new Promise((resolve, reject) => {
					reject('')
				});
			}

		return axios.get(apiUrl + `/api/v1/user/?referralId=${referralId}`).then((response: AxiosResponse<UserData>) => {
				if (NIl_ADDRESS === response.data.addressUser) {
					router.push({name: HOME_PAGE});
					localStorage.removeItem(ROUTE_REFERRAL_ID);
				}

				state.userData.addressUser = response.data.addressUser;
				state.userData.referralId  = response.data.referralId;
				state.userData.invited     = response.data.invited;
				state.userData.profit      = response.data.profit;
			}).catch(() => {
				router.push({name: HOME_PAGE});
				localStorage.removeItem(ROUTE_REFERRAL_ID);
			});
		}

		const referralIdlocalStorage = localStorage.getItem(ROUTE_REFERRAL_ID);

		watch(referralId, () => {
			getUserData(referralId.value)
		});

		if (Boolean(referralId.value)) {
			getUserData(referralId.value)
		}
		else {
			if (null !== referralIdlocalStorage) {
				getUserData(referralIdlocalStorage);
			}
		}

		if (routeReferralId) {
			getUserData(routeReferralId).then(() => {
				localStorage.setItem(ROUTE_REFERRAL_ID, String(routeReferralId));
			}).then(() => {
				if (false === isActivated.value) {
					router.push({name: HOME_PAGE});
				}
			});
		}

		axios.get(apiUrl + '/api/v1/get-referrals/').then((response: AxiosResponse<ReferralData[]>) => {
			state.referralsData = response.data;
		})

		return {t, state, referralId, referralUrl, isDisableButton, isLoadingButton, clickToInvest, copy, currentWalletAddress}
	},
}
</script>

<template>
	<div class="top-referrals-page" v-if="state.userData">
			<div class="top-referrals-page-block-description">
				<div class="top-referrals-page-block-description-wrapper">
					<div v-if="state.userData.addressUser === currentWalletAddress" class="top-referrals-page__description-tabs">
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
					<span class="top-referrals-page-link-description" v-if="state.userData.referralId === referralId && Boolean(state.userData.referralId)" @click="copy()">{{ referralUrl }}

						<svg style="position: relative;top: 8px;" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 28.125C22.2487 28.125 28.125 22.2487 28.125 15C28.125 7.75126 22.2487 1.875 15 1.875C7.75126 1.875 1.875 7.75126 1.875 15C1.875 22.2487 7.75126 28.125 15 28.125Z" fill="#E6E7E8"/>
							<path d="M12.1281 21.2798C13.0011 21.2798 13.8741 20.9474 14.5389 20.2826L16.3338 18.4878C16.6742 18.1476 16.6742 17.5956 16.3338 17.2554C15.9937 16.9149 15.4414 16.9149 15.1013 17.2554L13.3065 19.0502C12.6566 19.7001 11.5991 19.6998 10.9492 19.05C10.2996 18.4002 10.2996 17.3428 10.9492 16.6931L12.7441 14.8982C13.0846 14.558 13.0846 14.006 12.7441 13.6658C12.4041 13.3253 11.8517 13.3253 11.5116 13.6658L9.7168 15.4606C8.38734 16.7901 8.38734 18.9533 9.71699 20.2827C10.3817 20.9473 11.2548 21.2798 12.1281 21.2798Z" fill="#424242"/>
							<path d="M20.2822 9.71714C18.9529 8.38814 16.79 8.38767 15.4604 9.71714L13.6655 11.512C13.325 11.8522 13.325 12.4042 13.6655 12.7444C14.0056 13.0849 14.5579 13.0849 14.898 12.7444L16.6928 10.9496C17.3427 10.2997 18.4002 10.3 19.0501 10.9498C19.6997 11.5996 19.6997 12.657 19.0501 13.3067L17.2552 15.1016C16.9148 15.4418 16.9148 15.9938 17.2552 16.334C17.4252 16.5043 17.6484 16.5894 17.8714 16.5894C18.0945 16.5894 18.3177 16.5043 18.4877 16.334L20.2825 14.5392C21.612 13.2097 21.612 11.0466 20.2822 9.71714Z" fill="#424242"/>
							<path d="M17.4105 12.5889C17.0705 12.2484 16.5181 12.2484 16.1781 12.5889L12.5884 16.1786C12.2479 16.5188 12.2479 17.0708 12.5884 17.411C12.7584 17.5812 12.9816 17.6664 13.2046 17.6664C13.4276 17.6664 13.6509 17.5812 13.8208 17.411L17.4105 13.8213C17.7509 13.4811 17.7509 12.9292 17.4105 12.5889Z" fill="#424242"/>
						</svg>
					</span>
					<div class="top-referrals-page-link-description" v-else>{{ t('referral_page_text_about_description') }}</div>
					<base-button :is-disable="isDisableButton" :is-loading="isLoadingButton" :text="(Boolean(referralId) ? t('referral_page_about_button_text_invested') : t('referral_page_about_button_text')) +' 25  BUSD'" @click="clickToInvest"/>
				</div>
				<div class="top-referrals-page-block-description-qr">
					<QRCodeVue3
							v-if="referralId"
							:width="200"
							:height="200"
							:value="currentWalletAddress"
							:qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
							:imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
							:backgroundOptions="{ color: '#ffffff' }"
							:cornersSquareOptions="{ type: 'extra-rounded', color: '#000000' }"
							:cornersDotOptions="{type: 'square', color: '#000000'}"
							:imgclass="'top-referrals-page-block-description-qr-image'"
							:dotsOptions="{
									type: 'dots',
									gradient: {
										type: 'radial',
										rotation: 0,
										colorStops: [
											{ offset: 0, color: '#000000' },
											{ offset: 1, color: '#000000' },
										],
									},
								}"
					/>
					<img v-else class="top-referrals-page-block-description-qr-image-palaceholder" src="../assets/images/qr.png"/>
					<div class="top-referrals-page-block-description-qr__text">{{ t('referral_page_qr_code') }}</div>
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
	margin:     204px auto auto;
	min-height: calc(100vh - 290px);

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
		margin-top: 137px;
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

		&__text {
			font-size:  15px;
			margin-top: 15px;
		}

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
		display:       block;
		margin-top:    10px;
		text-align:    left;
		font-weight:   400;
		font-size:     16px;
		color:         #c6c6c6;
		margin-bottom: 50px;
		cursor:        pointer;

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

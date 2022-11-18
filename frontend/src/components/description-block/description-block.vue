<script lang="ts">
import axios, {AxiosResponse} from 'axios';
import {onMounted, reactive, ref, watchEffect} from 'vue';
import {useBoard} from 'vue-dapp';
import {useI18n} from 'vue-i18n';
import {useRouter} from 'vue-router';
import {apiUrl} from '../../../../config';
import CountersData from '../../../../types/counters-data';
import numberFormat from '../../helpers/number-format-helper';
import {useObserverHook} from '../../hooks/use-observer-hook';
import {useWalletHook} from '../../hooks/use-wallet-hook';
import {HOME_PAGE, REFERRAL_PAGE} from '../../page/page-list';
import BaseButton from '../base-button/base-button.vue';

/**
 * Component Description Block
 */
export default {
	components: {
		BaseButton,
	},
	setup() {
		const {t}        = useI18n();
		const {observer} = useObserverHook()
		const {open}     = useBoard();
		const counters   = <CountersData>reactive({amount: 0, members: 0});
		const {isActivated, currentWalletAddress, disconnectWallet} = useWalletHook();
		const router                                                = useRouter();

		axios.get(apiUrl + '/api/v1/counters').then((response: AxiosResponse<CountersData>) => {
			counters.members = response.data.members;
			counters.amount  = response.data.amount;
		});

		/** Ref HTML Block Component */
		const block = ref<Element>(null);
		/** Handler Button */
		const handler = ref(open);

		onMounted(() => {
			observer.observe(block.value)
		})

		/** redirec to profile */
		function goToProfile() {
			router.push({name: REFERRAL_PAGE});
		}

		watchEffect(() => {
			if (isActivated.value) {
				handler.value = goToProfile;
			}
			else {
				handler.value = open;
			}
		});

		return {t, open, handler, block, counters, numberFormat}
	},
}
</script>
<template>
	<div ref="block" class="description-block-wrapper">
		<div class="description-block-powered-by">
			Powered by &nbsp;
			<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_235_743)">
					<path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#F0B90B"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M3.44638 4.47592L6.00238 1.91992L7.02154 2.93908L4.46554 5.49508L3.44638 4.47592ZM3.44824 7.53028L7.53298 3.44554L8.55214 4.4647L4.4674 8.54944L3.44824 7.53028ZM9.0607 4.97614L4.97596 9.06088L5.99506 10.0799L10.0799 5.99524L9.0607 4.97614ZM1.91992 6.00208L2.93908 4.98292L3.95824 6.00208L2.93908 7.02124L1.91992 6.00208Z" fill="white"/>
				</g>
				<defs>
					<clipPath id="clip0_235_743">
						<rect width="12" height="12" fill="white"/>
					</clipPath>
				</defs>
			</svg>
			&nbsp;
			BUSD
		</div>
		<div class="description-block">
			<div class="description-tabs">
					<div class="description-tab">
						<div class="description-tab__title" style="align-self: center;">{{ t('powered_by') }}</div>
						<div class="description-tab-busd-icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M3.74132 6.26471L10.006 0L12.504 2.49794L6.23926 8.76265L3.74132 6.26471ZM3.74588 13.7509L13.7575 3.73926L16.2554 6.23721L6.24382 16.2488L3.74588 13.7509ZM17.5019 7.49074L7.49029 17.5024L9.98809 20L20 9.98853L17.5019 7.49074ZM0 10.0053L2.49794 7.50735L4.99588 10.0053L2.49794 12.5032L0 10.0053Z" fill="#F0B90B"/>
							</svg>
							<svg style="margin-left: 15px" width="51" height="21" viewBox="0 0 51 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
										d="M8.82422 10.25C8.88281 10.2734 8.95605 10.3057 9.04395 10.3467C9.13184 10.3877 9.2959 10.499 9.53613 10.6807C9.77637 10.8623 9.9873 11.0615 10.1689 11.2783C10.3506 11.4951 10.5146 11.7969 10.6611 12.1836C10.8135 12.5645 10.8896 12.9688 10.8896 13.3965C10.8896 14.4395 10.5322 15.3008 9.81738 15.9805C9.10254 16.6602 8.1709 17 7.02246 17H1.88965V4.39648H6.75C7.76953 4.39648 8.60742 4.70996 9.26367 5.33691C9.92578 5.95801 10.2568 6.72559 10.2568 7.63965C10.2568 8.00879 10.21 8.35156 10.1162 8.66797C10.0225 8.97852 9.90234 9.22754 9.75586 9.41504C9.60938 9.60254 9.46289 9.76367 9.31641 9.89844C9.17578 10.0273 9.05859 10.1152 8.96484 10.1621L8.82422 10.25ZM3.24316 15.7432H7.02246C7.77832 15.7432 8.38477 15.5234 8.8418 15.084C9.30469 14.6445 9.53613 14.082 9.53613 13.3965C9.53613 12.6992 9.30176 12.1074 8.83301 11.6211C8.37012 11.1289 7.7666 10.8828 7.02246 10.8828H3.24316V15.7432ZM6.75 5.66211H3.24316V9.69629H6.75C7.42383 9.69629 7.95117 9.51465 8.33203 9.15137C8.71875 8.78223 8.91211 8.27832 8.91211 7.63965C8.91211 7.05371 8.71875 6.5791 8.33203 6.21582C7.95117 5.84668 7.42383 5.66211 6.75 5.66211ZM17.1035 13.9854C17.6543 14.5537 18.3135 14.8379 19.0811 14.8379C19.8486 14.8379 20.5049 14.5537 21.0498 13.9854C21.5947 13.417 21.8672 12.7109 21.8672 11.8672V4.39648H24.5654V11.8672C24.5654 13.4023 24.0439 14.6885 23.001 15.7256C21.958 16.7568 20.6484 17.2725 19.0723 17.2725C17.502 17.2725 16.1953 16.7568 15.1523 15.7256C14.1094 14.6885 13.5879 13.4023 13.5879 11.8672V4.39648H16.2861V11.8672C16.2861 12.7051 16.5586 13.4111 17.1035 13.9854ZM33.2139 13.3086C33.2139 12.8867 33 12.5469 32.5723 12.2891C32.1504 12.0312 31.6318 11.8174 31.0166 11.6475C30.4072 11.4717 29.7979 11.2666 29.1885 11.0322C28.585 10.7979 28.0693 10.4111 27.6416 9.87207C27.2139 9.33301 27 8.65039 27 7.82422C27 6.80469 27.4072 5.93457 28.2217 5.21387C29.042 4.49316 30.1055 4.13281 31.4121 4.13281C31.9277 4.13281 32.4258 4.19434 32.9062 4.31738C33.3867 4.43457 33.7793 4.5752 34.084 4.73926C34.3945 4.89746 34.6641 5.06152 34.8926 5.23145C35.127 5.39551 35.2939 5.53906 35.3936 5.66211L35.5518 5.83789L33.9346 7.55176C33.8643 7.46973 33.7646 7.37012 33.6357 7.25293C33.5127 7.12988 33.249 6.96875 32.8447 6.76953C32.4404 6.57031 32.0244 6.4707 31.5967 6.4707C31.0811 6.4707 30.665 6.60254 30.3486 6.86621C30.0381 7.12988 29.8828 7.44922 29.8828 7.82422C29.8828 8.24609 30.0938 8.58594 30.5156 8.84375C30.9434 9.0957 31.459 9.30957 32.0625 9.48535C32.6719 9.66113 33.2812 9.86621 33.8906 10.1006C34.5059 10.335 35.0273 10.7217 35.4551 11.2607C35.8828 11.7998 36.0967 12.4824 36.0967 13.3086C36.0967 14.4746 35.6719 15.4268 34.8223 16.165C33.9785 16.9033 32.8125 17.2725 31.3242 17.2725C30.7383 17.2725 30.1699 17.1992 29.6191 17.0527C29.0742 16.9121 28.623 16.7422 28.2656 16.543C27.9141 16.3438 27.6035 16.1416 27.334 15.9365C27.0645 15.7314 26.8711 15.5586 26.7539 15.418L26.5518 15.1982L28.1777 13.5811C28.2598 13.6748 28.374 13.7979 28.5205 13.9502C28.6729 14.0967 29.0068 14.2959 29.5225 14.5479C30.0381 14.7998 30.5771 14.9258 31.1396 14.9258C31.79 14.9258 32.2969 14.7734 32.6602 14.4688C33.0293 14.1641 33.2139 13.7773 33.2139 13.3086ZM38.5137 4.39648H43.1982C45.0322 4.39648 46.5703 5.00586 47.8125 6.22461C49.0547 7.44336 49.6758 8.93457 49.6758 10.6982C49.6758 12.4619 49.0547 13.9531 47.8125 15.1719C46.5703 16.3906 45.0322 17 43.1982 17H38.5137V4.39648ZM43.1982 6.83105H41.2207V14.5742H43.1982C44.2412 14.5742 45.1318 14.1992 45.8701 13.4492C46.6084 12.6992 46.9775 11.7852 46.9775 10.707C46.9775 9.62305 46.6172 8.70605 45.8965 7.95605C45.1758 7.20605 44.2764 6.83105 43.1982 6.83105Z"
										fill="#C6C6C6"
								/>
							</svg>
						</div>
					</div>
					<div class="description-tab-split"></div>
					<div class="description-tab">
						<div class="description-tab__title">{{ t('community') }}</div>
						<div class="description-tab__social">
							<a :href="t('social_link_telegram')" style="position: relative; top: -1px;">
								<svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.309 0.749603L21.4366 20.2733C21.4366 20.2733 20.8953 21.6271 19.4057 20.9772L10.4295 14.107C11.636 13.0224 20.9957 4.60767 21.405 4.22607C22.0377 3.6355 21.6451 3.28403 20.9096 3.73066L7.08455 12.5103L1.75078 10.7147C1.75078 10.7147 0.911073 10.4168 0.830258 9.7669C0.748965 9.11704 1.77804 8.76509 1.77804 8.76509L23.522 0.235067C23.522 0.235067 25.309 -0.550127 25.309 0.749603V0.749603Z"/>
							</svg>
							</a>
							<a :href="t('social_link_reddit')" style="position: relative; top: -3px;">
								<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
										d="M24 11.18C23.94 9.73996 22.74 8.59996 21.27 8.62996C20.61 8.65996 20.01 8.92996 19.56 9.34996C17.52 7.93996 15.09 7.18996 12.6 7.12996L13.77 1.51996L17.64 2.29996C17.76 3.28996 18.63 4.00996 19.62 3.88996C20.61 3.76996 21.33 2.89996 21.21 1.90996C21.09 0.919958 20.22 0.199958 19.23 0.319958C18.66 0.379958 18.15 0.709957 17.88 1.18996L13.47 0.319958C13.17 0.259958 12.87 0.439958 12.81 0.739958L11.49 7.00996C8.97 7.03996 6.54 7.81996 4.44 9.22996C3.39 8.23996 1.71 8.26996 0.72 9.34996C-0.27 10.4 -0.239999 12.08 0.840001 13.07C1.05 13.25 1.29 13.43 1.56 13.55C1.53 13.82 1.53 14.09 1.56 14.33C1.56 18.38 6.27 21.68 12.09 21.68C17.91 21.68 22.62 18.41 22.62 14.33C22.65 14.06 22.65 13.79 22.62 13.55C23.46 13.13 24.03 12.2 24 11.18ZM5.91 13.01C5.91 12.02 6.72 11.21 7.71 11.21C8.7 11.21 9.51 12.02 9.51 13.01C9.51 14 8.7 14.81 7.71 14.81C6.72 14.81 5.91 14 5.91 13.01ZM16.41 17.99C15.12 18.95 13.56 19.46 11.97 19.37C10.38 19.43 8.79 18.95 7.53 17.99C7.35 17.78 7.38 17.48 7.59 17.3C7.77 17.15 8.01 17.15 8.22 17.3C9.3 18.08 10.62 18.5 11.97 18.44C13.32 18.5 14.64 18.14 15.75 17.33C15.96 17.15 16.26 17.15 16.47 17.33C16.65 17.54 16.65 17.84 16.47 18.05V17.99H16.41ZM16.11 14.9C15.12 14.9 14.31 14.09 14.31 13.1C14.31 12.11 15.12 11.3 16.11 11.3C17.1 11.3 17.91 12.11 17.91 13.1C17.94 14.09 17.19 14.93 16.17 14.96C16.14 14.96 16.11 14.96 16.08 14.96L16.11 14.9Z"
								/>
							</svg>
							</a>
							<a :href="t('social_link_discord')">
								<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
										d="M5.81688 14.2886C11.4038 16.469 16.1583 16.8936 21.5461 13.4999C21.5066 13.5591 20.4408 15.1381 17.6382 15.9472C18.2303 16.7565 19.0395 17.6841 19.0395 17.6841C20.8356 17.6841 22.5921 17.1709 24.1118 16.1841C25.2961 15.3946 25.9671 14.0327 25.8289 12.6117C25.5921 10.1841 25.0197 7.81565 24.1316 5.54597C23.0066 2.58546 20.3027 0.532803 17.1645 0.236729C16.8882 0.216983 16.6908 0.216983 16.5724 0.216983L16.2566 0.532744C19.8685 1.55907 21.6646 3.15774 21.704 3.21698C16.1579 0.414326 9.60531 0.374892 4.01975 3.09856C4.01975 3.09856 5.79608 1.34198 9.72367 0.414326L9.48684 0.17749C9.07235 0.17749 8.6776 0.216982 8.26317 0.276162C5.36184 0.76958 2.93424 2.763 1.88817 5.50642C0.980255 7.87484 0.388165 10.3617 0.171076 12.888C0.0526576 14.2301 0.68424 15.5525 1.78949 16.3222C3.25 17.2893 4.98684 17.8025 6.74342 17.8025C6.74342 17.8025 7.45393 16.8748 8.16449 16.0459C5.5 15.2564 4.41449 13.6775 4.39475 13.6183L4.89619 13.8743C5.19596 14.0275 5.50328 14.1662 5.81688 14.2886ZM8.91449 12.5722C7.63158 12.5327 6.625 11.4472 6.66449 10.1446C6.70399 8.92091 7.69082 7.93407 8.91449 7.89458C10.1974 7.93407 11.204 9.01958 11.1645 10.3222C11.1053 11.546 10.1382 12.5328 8.91449 12.5722ZM16.9671 12.5722C15.6842 12.5327 14.6776 11.4472 14.7171 10.1446C14.7566 8.92091 15.7434 7.93407 16.9671 7.89458C18.25 7.93407 19.2566 9.01958 19.2171 10.3222C19.1777 11.546 18.1908 12.5328 16.9671 12.5722Z"
								/>
							</svg>
							</a>
					</div>
				</div>
			</div>
			<section>
				<article>
					<p class="description-main-text" v-html="t('description1')"></p>
					<p class="description-sub-text">{{ t('description2') }}</p>
				</article>
			</section>
		</div>
		<img class="description-block-image" src="../../assets/images/img2.svg">
	</div>
	<div class="description-block__button-join-us">
		<base-button @click="handler" :text="t('description_button_text')"/>
	</div>
	<div class="description-total-block">
			<div class="description-total-block__item">
				<div class="description-total-block__item-value">{{ numberFormat(counters.amount, 0, '', ' ') }} BUSD</div>
				<div class="description-total-block__item-text">{{ t('raised_funds') }}</div>
			</div>
		<div class="description-total-block__item">
				<div class="description-total-block__item-value">250 000 BUSD</div>
				<div class="description-total-block__item-text">{{ t('goal') }}</div>
		</div>
		<div class="description-total-block__item">
				<div class="description-total-block__item-value">{{ numberFormat(counters.members, 0, '', ' ') }}</div>
				<div class="description-total-block__item-text">{{ t('members') }}</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "../../assets/values.scss";

.description-block-wrapper {
	display:        flex;
	flex-direction: row;

	@media (max-width: $max-mobile-with) {
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
	}
}

.description-block-image {
	position: absolute;
	right:    0;
	top:      85px;
	width:    520px;

	@media (max-width: $max-mobile-with) {
		position: inherit;
		width:    auto;
		height:   352px;
	}
}

.description-block-powered-by {
	display: none;

	@media (max-width: $max-mobile-with) {
		display:         flex;
		justify-content: space-between;
		align-items:     center;
		padding:         10px 15px;
		border:          1px solid #696a87;
		border-radius:   30px;
		color:           #c6c6c6;
		font-size:       12px;
	}
}

.description-block {
	margin-top: 50px;
	width:      700px;
	text-align: left;

	@media (max-width: $max-mobile-with) {
		width:      100%;
		margin-top: 10px;
		text-align: center;
	}

	&__button-join-us {
		text-align: left;

		@media (max-width: $max-mobile-with) {
			margin-top: 30px;
			text-align: center;
		}
	}
}

.description-main-text {
	font-style:  normal;
	font-weight: bold;
	font-size:   44px;
	color:       #fff;
	text-align:  left;

	@media (max-width: $max-mobile-with) {
		font-size:  22px;
		text-align: center;
	}
}

.description-sub-text {
	font-size:     18px;
	text-align:    left;
	max-width:     450px;
	color:         #c6c6c6;
	line-height:   130%;
	margin-bottom: 50px;

	@media (max-width: $max-mobile-with) {
		font-size:  14px;
		text-align: center;
		width:      100%;
		max-width:  inherit;
	}
}

.description-tabs {
	display:         flex;
	flex-direction:  row;
	justify-content: space-between;
	align-items:     center;
	width:           310px;

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.description-tab {
	display:        flex;
	flex-direction: column;
	width:          100%;
	align-items:    flex-start;
	height:         75px;

	&__title {
		color:          #c6c6c6;
		text-transform: uppercase;
		margin-bottom:  15px;
		font-size:      14px;
	}

	&__social {
		display:         flex;
		flex-direction:  row;
		justify-content: space-between;
		width:           100%;
		margin-top:      10px;

		svg {
			fill: #c6c6c6;

			&:hover {
				fill: #ad42ec;
			}
		}
	}
}

.description-tab-busd-icon {
	width:         126px;
	background:    rgba(104, 104, 104, 0.3);
	border-radius: 8px;
	padding:       12px 20px 9px 20px;
}

.description-tab-split {
	width:      1px;
	height:     30px;
	background: #696a87;
	margin:     30px 30px 0 30px;
}

.description-total-block {
	display:        flex;
	flex-direction: row;
	margin-top:     80px;

	@media (max-width: $max-mobile-with) {
		flex-direction:  column;
		margin-top:      50px;
		align-items:     center;
		justify-content: center;
	}

	&__item {
		padding:      0 40px;
		border-right: 1px solid #696a87;

		&:first-child {
			padding-left: 0;
		}

		&:last-child {
			border-right: none;
		}

		@media (max-width: $max-mobile-with) {
			padding:       20px 0;
			border-right:  none;
			border-bottom: 1px solid #696a87;
		}
	}

	&__item-value {
		font-size:     30px;
		color:         #fff;
		margin-bottom: 10px;

		@media (max-width: $max-mobile-with) {
			font-size: 24px;
		}
	}

	&__item-text {
		font-size: 18px;
		color:     #c6c6c6;

		@media (max-width: $max-mobile-with) {
			font-size: 16px;
		}
	}
}
</style>

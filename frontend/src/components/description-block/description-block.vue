<script lang="ts">
import {onMounted, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useObserverHook} from '../../hooks/use-observer-hook';
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
						<div class="description-tab__title">{{ t('powered_by') }}</div>
						<svg width="126" height="44" viewBox="0 0 126 44" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_b_0_1)">
						<rect width="126" height="44" rx="8" fill="#686868" fill-opacity="0.3"/>
						</g>
						<path
								d="M63.8242 22.25C63.8828 22.2734 63.9561 22.3057 64.0439 22.3467C64.1318 22.3877 64.2959 22.499 64.5361 22.6807C64.7764 22.8623 64.9873 23.0615 65.1689 23.2783C65.3506 23.4951 65.5146 23.7969 65.6611 24.1836C65.8135 24.5645 65.8896 24.9688 65.8896 25.3965C65.8896 26.4395 65.5322 27.3008 64.8174 27.9805C64.1025 28.6602 63.1709 29 62.0225 29H56.8896V16.3965H61.75C62.7695 16.3965 63.6074 16.71 64.2637 17.3369C64.9258 17.958 65.2568 18.7256 65.2568 19.6396C65.2568 20.0088 65.21 20.3516 65.1162 20.668C65.0225 20.9785 64.9023 21.2275 64.7559 21.415C64.6094 21.6025 64.4629 21.7637 64.3164 21.8984C64.1758 22.0273 64.0586 22.1152 63.9648 22.1621L63.8242 22.25ZM58.2432 27.7432H62.0225C62.7783 27.7432 63.3848 27.5234 63.8418 27.084C64.3047 26.6445 64.5361 26.082 64.5361 25.3965C64.5361 24.6992 64.3018 24.1074 63.833 23.6211C63.3701 23.1289 62.7666 22.8828 62.0225 22.8828H58.2432V27.7432ZM61.75 17.6621H58.2432V21.6963H61.75C62.4238 21.6963 62.9512 21.5146 63.332 21.1514C63.7188 20.7822 63.9121 20.2783 63.9121 19.6396C63.9121 19.0537 63.7188 18.5791 63.332 18.2158C62.9512 17.8467 62.4238 17.6621 61.75 17.6621ZM72.1035 25.9854C72.6543 26.5537 73.3135 26.8379 74.0811 26.8379C74.8486 26.8379 75.5049 26.5537 76.0498 25.9854C76.5947 25.417 76.8672 24.7109 76.8672 23.8672V16.3965H79.5654V23.8672C79.5654 25.4023 79.0439 26.6885 78.001 27.7256C76.958 28.7568 75.6484 29.2725 74.0723 29.2725C72.502 29.2725 71.1953 28.7568 70.1523 27.7256C69.1094 26.6885 68.5879 25.4023 68.5879 23.8672V16.3965H71.2861V23.8672C71.2861 24.7051 71.5586 25.4111 72.1035 25.9854ZM88.2139 25.3086C88.2139 24.8867 88 24.5469 87.5723 24.2891C87.1504 24.0312 86.6318 23.8174 86.0166 23.6475C85.4072 23.4717 84.7979 23.2666 84.1885 23.0322C83.585 22.7979 83.0693 22.4111 82.6416 21.8721C82.2139 21.333 82 20.6504 82 19.8242C82 18.8047 82.4072 17.9346 83.2217 17.2139C84.042 16.4932 85.1055 16.1328 86.4121 16.1328C86.9277 16.1328 87.4258 16.1943 87.9062 16.3174C88.3867 16.4346 88.7793 16.5752 89.084 16.7393C89.3945 16.8975 89.6641 17.0615 89.8926 17.2314C90.127 17.3955 90.2939 17.5391 90.3936 17.6621L90.5518 17.8379L88.9346 19.5518C88.8643 19.4697 88.7646 19.3701 88.6357 19.2529C88.5127 19.1299 88.249 18.9688 87.8447 18.7695C87.4404 18.5703 87.0244 18.4707 86.5967 18.4707C86.0811 18.4707 85.665 18.6025 85.3486 18.8662C85.0381 19.1299 84.8828 19.4492 84.8828 19.8242C84.8828 20.2461 85.0938 20.5859 85.5156 20.8438C85.9434 21.0957 86.459 21.3096 87.0625 21.4854C87.6719 21.6611 88.2812 21.8662 88.8906 22.1006C89.5059 22.335 90.0273 22.7217 90.4551 23.2607C90.8828 23.7998 91.0967 24.4824 91.0967 25.3086C91.0967 26.4746 90.6719 27.4268 89.8223 28.165C88.9785 28.9033 87.8125 29.2725 86.3242 29.2725C85.7383 29.2725 85.1699 29.1992 84.6191 29.0527C84.0742 28.9121 83.623 28.7422 83.2656 28.543C82.9141 28.3438 82.6035 28.1416 82.334 27.9365C82.0645 27.7314 81.8711 27.5586 81.7539 27.418L81.5518 27.1982L83.1777 25.5811C83.2598 25.6748 83.374 25.7979 83.5205 25.9502C83.6729 26.0967 84.0068 26.2959 84.5225 26.5479C85.0381 26.7998 85.5771 26.9258 86.1396 26.9258C86.79 26.9258 87.2969 26.7734 87.6602 26.4688C88.0293 26.1641 88.2139 25.7773 88.2139 25.3086ZM93.5137 16.3965H98.1982C100.032 16.3965 101.57 17.0059 102.812 18.2246C104.055 19.4434 104.676 20.9346 104.676 22.6982C104.676 24.4619 104.055 25.9531 102.812 27.1719C101.57 28.3906 100.032 29 98.1982 29H93.5137V16.3965ZM98.1982 18.8311H96.2207V26.5742H98.1982C99.2412 26.5742 100.132 26.1992 100.87 25.4492C101.608 24.6992 101.978 23.7852 101.978 22.707C101.978 21.623 101.617 20.7061 100.896 19.9561C100.176 19.2061 99.2764 18.8311 98.1982 18.8311Z"
								fill="#C6C6C6"
						/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M23.7413 18.2647L30.006 12L32.504 14.4979L26.2393 20.7626L23.7413 18.2647ZM23.7459 25.7509L33.7575 15.7393L36.2554 18.2372L26.2438 28.2488L23.7459 25.7509ZM37.5019 19.4907L27.4903 29.5024L29.9881 32L40 21.9885L37.5019 19.4907ZM20 22.0053L22.4979 19.5074L24.9959 22.0053L22.4979 24.5032L20 22.0053Z" fill="#F0B90B"/>
						<defs>
						<filter id="filter0_b_0_1" x="-20" y="-20" width="166" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feGaussianBlur in="BackgroundImage" stdDeviation="10"/>
						<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape"/>
						</filter>
						</defs>
					</svg>
					</div>
					<div class="description-tab-split"></div>
					<div class="description-tab">
						<div class="description-tab__title">{{ t('community') }}</div>
						<div class="description-tab__social">
							<a :href="t('social_link_telegram')">
								<svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.309 0.749603L21.4366 20.2733C21.4366 20.2733 20.8953 21.6271 19.4057 20.9772L10.4295 14.107C11.636 13.0224 20.9957 4.60767 21.405 4.22607C22.0377 3.6355 21.6451 3.28403 20.9096 3.73066L7.08455 12.5103L1.75078 10.7147C1.75078 10.7147 0.911073 10.4168 0.830258 9.7669C0.748965 9.11704 1.77804 8.76509 1.77804 8.76509L23.522 0.235067C23.522 0.235067 25.309 -0.550127 25.309 0.749603V0.749603Z"/>
							</svg>
							</a>
							<a :href="t('social_link_reddit')">
								<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
										d="M5.81688 14.2886C11.4038 16.469 16.1583 16.8936 21.5461 13.4999C21.5066 13.5591 20.4408 15.1381 17.6382 15.9472C18.2303 16.7565 19.0395 17.6841 19.0395 17.6841C20.8356 17.6841 22.5921 17.1709 24.1118 16.1841C25.2961 15.3946 25.9671 14.0327 25.8289 12.6117C25.5921 10.1841 25.0197 7.81565 24.1316 5.54597C23.0066 2.58546 20.3027 0.532803 17.1645 0.236729C16.8882 0.216983 16.6908 0.216983 16.5724 0.216983L16.2566 0.532744C19.8685 1.55907 21.6646 3.15774 21.704 3.21698C16.1579 0.414326 9.60531 0.374892 4.01975 3.09856C4.01975 3.09856 5.79608 1.34198 9.72367 0.414326L9.48684 0.17749C9.07235 0.17749 8.6776 0.216982 8.26317 0.276162C5.36184 0.76958 2.93424 2.763 1.88817 5.50642C0.980255 7.87484 0.388165 10.3617 0.171076 12.888C0.0526576 14.2301 0.68424 15.5525 1.78949 16.3222C3.25 17.2893 4.98684 17.8025 6.74342 17.8025C6.74342 17.8025 7.45393 16.8748 8.16449 16.0459C5.5 15.2564 4.41449 13.6775 4.39475 13.6183L4.89619 13.8743C5.19596 14.0275 5.50328 14.1662 5.81688 14.2886ZM8.91449 12.5722C7.63158 12.5327 6.625 11.4472 6.66449 10.1446C6.70399 8.92091 7.69082 7.93407 8.91449 7.89458C10.1974 7.93407 11.204 9.01958 11.1645 10.3222C11.1053 11.546 10.1382 12.5328 8.91449 12.5722ZM16.9671 12.5722C15.6842 12.5327 14.6776 11.4472 14.7171 10.1446C14.7566 8.92091 15.7434 7.93407 16.9671 7.89458C18.25 7.93407 19.2566 9.01958 19.2171 10.3222C19.1777 11.546 18.1908 12.5328 16.9671 12.5722Z"
								/>
							</svg>
							</a>
							<a :href="t('social_link_discord')">
								<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
										d="M24 11.18C23.94 9.73996 22.74 8.59996 21.27 8.62996C20.61 8.65996 20.01 8.92996 19.56 9.34996C17.52 7.93996 15.09 7.18996 12.6 7.12996L13.77 1.51996L17.64 2.29996C17.76 3.28996 18.63 4.00996 19.62 3.88996C20.61 3.76996 21.33 2.89996 21.21 1.90996C21.09 0.919958 20.22 0.199958 19.23 0.319958C18.66 0.379958 18.15 0.709957 17.88 1.18996L13.47 0.319958C13.17 0.259958 12.87 0.439958 12.81 0.739958L11.49 7.00996C8.97 7.03996 6.54 7.81996 4.44 9.22996C3.39 8.23996 1.71 8.26996 0.72 9.34996C-0.27 10.4 -0.239999 12.08 0.840001 13.07C1.05 13.25 1.29 13.43 1.56 13.55C1.53 13.82 1.53 14.09 1.56 14.33C1.56 18.38 6.27 21.68 12.09 21.68C17.91 21.68 22.62 18.41 22.62 14.33C22.65 14.06 22.65 13.79 22.62 13.55C23.46 13.13 24.03 12.2 24 11.18ZM5.91 13.01C5.91 12.02 6.72 11.21 7.71 11.21C8.7 11.21 9.51 12.02 9.51 13.01C9.51 14 8.7 14.81 7.71 14.81C6.72 14.81 5.91 14 5.91 13.01ZM16.41 17.99C15.12 18.95 13.56 19.46 11.97 19.37C10.38 19.43 8.79 18.95 7.53 17.99C7.35 17.78 7.38 17.48 7.59 17.3C7.77 17.15 8.01 17.15 8.22 17.3C9.3 18.08 10.62 18.5 11.97 18.44C13.32 18.5 14.64 18.14 15.75 17.33C15.96 17.15 16.26 17.15 16.47 17.33C16.65 17.54 16.65 17.84 16.47 18.05V17.99H16.41ZM16.11 14.9C15.12 14.9 14.31 14.09 14.31 13.1C14.31 12.11 15.12 11.3 16.11 11.3C17.1 11.3 17.91 12.11 17.91 13.1C17.94 14.09 17.19 14.93 16.17 14.96C16.14 14.96 16.11 14.96 16.08 14.96L16.11 14.9Z"
								/>
							</svg>
							</a>
					</div>
				</div>
			</div>
			<section>
				<article>
					<p class="description-main-text">{{ t('description1') }}</p>
					<p class="description-sub-text">{{ t('description2') }}</p>
				</article>
			</section>
		</div>
		<img class="description-block-image" src="../../assets/images/img.png">
	</div>
	<div class="description-block__button-join-us">
		<base-button :text="t('description_button_text')"/>
	</div>
	<div class="description-total-block">
			<div class="description-total-block__item">
				<div class="description-total-block__item-value">2050 BUSD</div>
				<div class="description-total-block__item-text">{{ t('raised_funds') }}</div>
			</div>
		<div class="description-total-block__item">
				<div class="description-total-block__item-value">250 000 BUSD</div>
				<div class="description-total-block__item-text">{{ t('goal') }}</div>
		</div>
		<div class="description-total-block__item">
				<div class="description-total-block__item-value">1203</div>
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
	position: relative;
	top:      130px;
	left:     39px;

	@media (max-width: $max-mobile-with) {
		position: inherit;
		width:    fit-content;
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
	width:           290px;

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.description-tab {
	display:        flex;
	flex-direction: column;
	width:          100%;
	align-items:    center;
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

.description-tab-split {
	width:      1px;
	height:     30px;
	background: #696a87;
	margin:     30px 30px 0 30px;
}

.description-total-block {
	display:         flex;
	flex-direction:  row;
	align-items:     center;
	justify-content: center;
	margin-top:      80px;

	@media (max-width: $max-mobile-with) {
		flex-direction: column;
		margin-top:     50px;
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

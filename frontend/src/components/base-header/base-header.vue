<script lang="ts">
import {ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useLinks} from '../../hooks/links-hook';
import Links from '../../types/links';
import ButtonWallet from '../button-wallet/button-wallet.vue';
import {useObserverHook} from '../../hooks/use-observer-hook';

/**
 * Component Header
 */
export default {
	components: {
		ButtonWallet
	},
	setup() {
		const {t}                          = useI18n();
		const {isNeedBackground, scrollTo} = useLinks();
		const {activeLink}                 = useObserverHook();
		const isShoMobileMenu              = ref(false)

		/** Handler click button menu */
		function clickMenu() {
			isShoMobileMenu.value = !isShoMobileMenu.value
		}

		/**
		 * Handler click button menu
		 *
		 * @param {string} selector Element selector to scroll
		 */
		function clickHeaderLink(selector) {
			isShoMobileMenu.value = false;
			activeLink.value      = selector;
			scrollTo('.' + selector);
		}

		return {isNeedBackground, isShoMobileMenu, clickHeaderLink, clickMenu, t, Links, activeLink}
	}
}
</script>
<template>
	<div class="header-wrapper" :class="{ 'header-wrapper_background' : isNeedBackground }">
		<header class="header">
			<router-link class="header__logo" to="/">
					<svg width="127" height="40" viewBox="0 0 127 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.65849 27.6953C1.23152 21.4858 1.07758 11.2382 7.35061 4.8382C13.6236 -1.5237 23.9761 -1.63799 30.4415 4.57154L22.8215 12.3049C20.6664 10.2477 17.2412 10.2858 15.1246 12.4192C13.0464 14.5525 13.0849 17.943 15.24 20.0382L7.65849 27.6953Z" fill="url(#paint0_linear_0_1)"/>
					<path d="M11.4685 39.9999C7.3506 39.9999 3.27121 38.4761 0.0769653 35.4285L7.65848 27.7333C9.81363 29.7904 13.2388 29.7523 15.3555 27.619C17.4336 25.4856 17.3951 22.0952 15.24 19.9999L22.8215 12.3047C29.2485 18.5142 29.4024 28.7618 23.1294 35.1618C19.9351 38.3618 15.7018 39.9999 11.4685 39.9999Z" fill="url(#paint1_linear_0_1)"/>
					<path
							d="M46.7976 8.60941C47.8367 8.99036 48.7988 9.59988 49.684 10.438L49.8379 10.5904L47.7597 12.7237L47.7212 12.6856C47.0285 12.1142 46.3358 11.7332 45.643 11.4665C44.9503 11.1999 44.2191 11.0856 43.4109 11.0856C42.5643 11.0856 41.8715 11.2761 41.3327 11.6189C40.8324 11.9999 40.563 12.4951 40.563 13.1808C40.563 13.638 40.6785 14.0189 40.8709 14.3237C41.1018 14.6285 41.4482 14.8951 42.0255 15.1618C42.5642 15.4285 43.3724 15.7332 44.4885 16.038C46.4127 16.6475 47.8752 17.4094 48.8373 18.3237C49.7994 19.238 50.2612 20.4951 50.2612 22.1713C50.2612 23.3523 49.9533 24.4189 49.3761 25.2951C48.7603 26.2094 47.9136 26.8951 46.7591 27.4285C45.6046 27.9237 44.2576 28.1904 42.7182 28.1904C41.1788 28.1904 39.7933 27.9618 38.6003 27.4665C37.4073 26.9713 36.3682 26.3237 35.5215 25.4856L35.3676 25.3332L37.5612 23.1237L37.6382 23.1999C38.3694 23.8475 39.1776 24.3046 39.9858 24.6475C40.7939 24.9904 41.6791 25.1427 42.6412 25.1427C43.6418 25.1427 44.45 24.9142 45.0658 24.457C45.6815 23.9999 45.9894 23.3523 45.9894 22.5142C45.9894 21.9808 45.8739 21.5618 45.6815 21.2189C45.4506 20.8761 45.1043 20.5713 44.5655 20.3046C44.0267 20.038 43.2955 19.7332 42.2949 19.4285C40.1782 18.7808 38.6773 17.9808 37.7536 17.1046C36.83 16.1904 36.4067 15.0094 36.4067 13.5237C36.4067 12.457 36.7146 11.5046 37.2918 10.6665C37.8691 9.82845 38.6773 9.21893 39.7164 8.76179C40.7555 8.30464 41.91 8.07607 43.2185 8.07607C44.527 8.03798 45.7585 8.22845 46.7976 8.60941Z"
							fill="white"
					/>
					<path d="M71.0815 12.9905L67.8873 27.7714H62.9997L60.8446 16.5333L58.6894 27.7714H53.8788L50.6076 12.9905H54.6485L56.4958 24.8381L58.9588 12.9905H62.9612L65.1933 24.8381L67.233 12.9905H71.0815V12.9905Z" fill="white"/>
					<path
							d="M84.4358 24.9142C84.5897 25.1808 84.8976 25.3713 85.2824 25.5237L84.7052 28.1523L84.4358 28.1142C83.5506 28.038 82.8194 27.8475 82.2806 27.5046C81.7418 27.1618 81.3185 26.6665 81.0106 25.9427C80.0485 27.4285 78.5476 28.1904 76.5464 28.1904C75.0455 28.1904 73.8909 27.7713 73.0058 26.9332C72.1206 26.0951 71.6973 24.9904 71.6973 23.6189C71.6973 22.0189 72.2746 20.7618 73.4676 19.9237C74.6606 19.0856 76.3539 18.6285 78.5476 18.6285H80.2794V17.9046C80.2794 16.9904 80.087 16.3808 79.6636 15.9999C79.2403 15.657 78.5476 15.4665 77.6239 15.4665C76.5849 15.4665 75.2764 15.7332 73.6985 16.2285L72.8133 13.5999C74.6606 12.8761 76.5079 12.4951 78.3167 12.4951C80.3564 12.4951 81.8188 12.9142 82.7809 13.7904C83.743 14.6665 84.2049 15.9237 84.2049 17.638V23.5808C84.2049 24.2285 84.2818 24.6475 84.4358 24.9142ZM80.2794 23.7713V20.8761H78.9324C76.7388 20.8761 75.6227 21.6761 75.6227 23.3142C75.6227 23.9618 75.7767 24.4951 76.123 24.8761C76.4694 25.257 76.9312 25.4475 77.5855 25.4475C78.7015 25.4475 79.6252 24.9142 80.2794 23.7713Z"
							fill="white"
					/>
					<path d="M94.9421 27.7714C94.3264 29.6381 93.4027 31.0857 92.1327 32.1143C90.9012 33.1048 89.2079 33.6762 87.1297 33.8667L86.514 31.0476C87.9379 30.8571 88.977 30.5143 89.6697 30.0571C90.324 29.5619 90.9012 28.8 91.3246 27.7714H89.9391L85.2824 12.9905H89.5158L92.5176 25.181L95.6733 12.9905H99.8297L94.9421 27.7714Z" fill="white"/>
					<path d="M112.183 12.9902V16.6855L104.294 24.6855H112.299V27.7331H100.561V23.9998L108.45 15.9998H101.177V12.9521H112.183V12.9902Z" fill="white"/>
					<path d="M126.923 21.5618H117.533C117.648 22.8951 118.11 23.8475 118.687 24.4189C119.303 24.9903 120.111 25.257 121.15 25.257C121.805 25.257 122.382 25.1427 122.959 24.9522C123.536 24.7618 124.114 24.4189 124.806 23.9618L126.461 26.2094C124.806 27.5427 122.921 28.2284 120.804 28.2284C118.456 28.2284 116.648 27.5427 115.416 26.1332C114.146 24.7237 113.53 22.857 113.53 20.4951C113.53 19.0094 113.8 17.6379 114.338 16.457C114.877 15.276 115.647 14.3237 116.686 13.6379C117.725 12.9522 118.918 12.6094 120.342 12.6094C122.459 12.6094 124.114 13.257 125.307 14.5903C126.5 15.9237 127.077 17.7522 127.077 20.1141C127 20.2284 126.962 20.7237 126.923 21.5618ZM123.113 19.0094C123.113 16.4951 122.189 15.2379 120.381 15.2379C119.534 15.2379 118.88 15.5427 118.418 16.1522C117.956 16.7618 117.648 17.7903 117.571 19.1618H123.152V19.0094H123.113Z" fill="white"/>
					<defs>
						<linearGradient id="paint0_linear_0_1" x1="4.97891" y1="9.15196" x2="29.7151" y2="20.8046" gradientUnits="userSpaceOnUse">
						<stop stop-color="#EB13D5"/>
						<stop offset="1" stop-color="#9751F3"/>
						</linearGradient>
						<linearGradient id="paint1_linear_0_1" x1="2.45679" y1="20.2014" x2="27.1931" y2="31.8542" gradientUnits="userSpaceOnUse">
						<stop stop-color="#EB13D5"/>
						<stop offset="1" stop-color="#9751F3"/>
						</linearGradient>
					</defs>
				</svg>
			</router-link>
			<div class="header-links" :class="{'header-links_open': isShoMobileMenu}">
				<span class="header__link" :class="{'header__link_active': Links.DescriptionBlockWrapper === activeLink }" @click="clickHeaderLink(Links.DescriptionBlockWrapper)">{{ t('link1') }}</span>
				<span class="header__link" :class="{'header__link_active': 'what-is-invest' === activeLink }" @click="clickHeaderLink(Links.TextCenter)">{{ t('link2') }}</span>
				<span class="header__link" :class="{'header__link_active': Links.MechanicsApp === activeLink }" @click="clickHeaderLink(Links.MechanicsApp)">{{ t('link3') }}</span>
				<span class="header__link" :class="{'header__link_active': Links.WhyBUSD === activeLink } " @click="clickHeaderLink(Links.WhyBUSD)">{{ t('link4') }}</span>
				<span class="header__link" :class="{'header__link_active': Links.Roadmap === activeLink }" @click="clickHeaderLink(Links.Roadmap)">{{ t('link5') }}</span>
				<span class="header__link" :class="{'header__link_active': Links.DistributionOfFunds === activeLink }" @click="clickHeaderLink(Links.DistributionOfFunds)">{{ t('link6') }}</span>
				<button-wallet/>
			</div>
			<div class="header-menu-mobile-button">
				<i class="header-menu-mobile-button__icon" @click="clickMenu" :class="{'header-menu-mobile-button__icon_cross': isShoMobileMenu}"/>
			</div>
		</header>
	</div>
</template>

<style lang="scss">
@import "../../assets/values.scss";

.header-wrapper {
	width:    100%;

	z-index:  3;
	position: fixed;
	left:     0;
	top:      0;

	&_background {
		background:              rgba(34, 22, 39, 0.6);
		backdrop-filter:         blur(9.5px);
		-webkit-backdrop-filter: blur(9.5px);

		@media (max-width: $max-mobile-with) {
			background:              #110c26;
			backdrop-filter:         none;
			-webkit-backdrop-filter: none;
		}

		.header {
			border: none;
		}
	}
}

.header {
	display:         flex;
	flex-direction:  row;
	justify-content: space-between;
	margin:          auto;
	align-items:     center;
	height:          104px;
	border-bottom:   1px solid #696a87;
	max-width:       $max-desktop-with;
	width:           100%;

	@media (max-width: $max-mobile-with) {
		border: none;
	}

	&__logo {
		min-width:    127px;
		margin-right: 25px;

		@media (max-width: $max-mobile-with) {
			margin: 22px;
		}
	}

	&__link {
		color:       #fff;
		white-space: nowrap;
		font-size:   15px;

		&_active {
			color: #ad42ec;
		}

		&:hover {
			color:  #ad42ec;
			cursor: pointer;
		}
	}
}

.header-links {
	display:         flex;
	flex-direction:  row;
	justify-content: space-between;
	margin:          auto;
	align-items:     center;
	width:           100%;
	position:        relative;

	@media (max-width: $max-mobile-with) {
		display: none;

		&_open {
			background:      #110c26;
			position:        absolute;
			display:         flex;
			flex-direction:  column;
			justify-content: space-evenly;
			top:             104px;
			width:           100%;
			height:          calc(100vh - 104px);
		}
	}
}

.header-menu-mobile-button {
	display: none;

	&__icon {
		display:    inline-block;
		margin:     auto;
		width:      22px;
		height:     22px;
		background: no-repeat center center url("../../assets/images/menu.svg");

		&_cross {
			background: no-repeat center center url("../../assets/images/cross.svg");
		}
	}


	@media (max-width: $max-mobile-with) {
		display:         flex;
		justify-content: center;
		align-items:     center;
		text-align:      center;
		vertical-align:  middle;
		background:      rgba(104, 104, 104, 0.3);
		backdrop-filter: blur(10px);
		border-radius:   6px;
		width:           44px;
		height:          44px;
		margin:          20px;
	}
}
</style>

<script lang="ts">
	import {computed, ref, watch, watchEffect} from 'vue';
	import {MetaMaskConnector, WalletConnectConnector, useWallet, useBoard, useEthersHooks, OnChangedHook} from 'vue-dapp';
	import {useRouter} from 'vue-router';
	import {currentNetwork, networks, siteUrl} from '../../../../config';
	import connectors from '../../contract/connectors';
	import {BUTTON_STATUS, useWalletHook} from '../../hooks/use-wallet-hook';
	import {HOME_PAGE, REFERRAL_PAGE} from '../../page/page-list';

	/**
	 * Button Wallet
	 */
	export default {
		setup() {
			const {open}                                                = useBoard();
			const {isActivated, currentWalletAddress, disconnectWallet} = useWalletHook();
			const router                                                = useRouter();

			/** Text button */
			const buttonText = ref('Connect wallet');
			const handler    = ref(open);

			/** redirec to profile */
			function goToProfile() {
				router.push({name: REFERRAL_PAGE});
			}

			watchEffect(() => {
				if (isActivated.value) {
					if (HOME_PAGE === router.currentRoute.value.name) {
						buttonText.value = 'Profile';
						handler.value    = goToProfile;
					}
					else {
						buttonText.value = 'Disconnect wallet';
						handler.value    = disconnectWallet;
					}
				}
				else {
					buttonText.value = 'Connect wallet';
					handler.value    = open;
				}
			});

			/**
			 * Handler connecton
			 */
			function connect() {
				if ('' === currentWalletAddress.value) {
					open();
				}
			}

			return {
				connectors,
				buttonText,
				isActivated,
				handler
			};
		}
	}
</script>
<template>
	<button class="button-wallet" @click="handler">{{ buttonText }}</button>
	<vd-board :connectors="connectors" dark/>
</template>

<style lang="scss">
.button-wallet {
	font-weight:    500;
	font-size:      11px;
	text-transform: uppercase;
	color:          #fff;
	background:     transparent;
	border:         2px solid #9751f3;
	border-radius:  8px;
	padding:        15px 28px;


	&:hover {
		border:     2px solid transparent;
		background: linear-gradient(115.21deg, #eb14d5 15.77%, #9751f3 83.77%);
		box-shadow: 0 5px 40px rgba(235, 20, 213, 0.5);
	}
}
</style>

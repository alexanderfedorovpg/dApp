<script lang="ts">
	import {computed} from 'vue';
	import {MetaMaskConnector, WalletConnectConnector, useBoard, useEthersHooks, OnChangedHook} from 'vue-dapp';
	import {siteUrl} from '../../../../config';
	import {useWalletHook} from '../../hooks/use-wallet-hook';

	/**
	 * Button Wallet
	 */
	export default {
		setup() {
			const {open}                                    = useBoard();
			const {onActivated}                             = useEthersHooks();
			const {isActivated, disconnect, authentication, accounts} = useWalletHook();

			/** Text button */
			const buttonText = computed(() => (isActivated.value ? 'Disconnect wallet' : 'Connect wallet'));

			/** Activated Wallet Hook */
			onActivated((data) => {
				authentication(data.address);
			});

			const infuraId = '0xBf8F49734544385A46C69C339A929DCe58925604';

			const connectors = [
				new MetaMaskConnector({
					appUrl: siteUrl,
				}),
				new WalletConnectConnector({
					qrcode: true,
					rpc:    {
						1: `https://mainnet.infura.io/v3/${infuraId}`,
						4: `https://rinkeby.infura.io/v3/${infuraId}`,
					},
				}),
			];

			return {
				connectors,
				buttonText,
				isActivated,
				disconnect,
				accounts,
				open,
			};
		}
	}
</script>
<template>
	<button class="button-wallet" @click="isActivated ? disconnect() : open()">{{ buttonText }}</button>
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

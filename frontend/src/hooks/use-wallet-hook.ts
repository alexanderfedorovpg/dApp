import axios from 'axios';
import {ref} from 'vue';
import {useEthersHooks, useWallet, useEthers} from 'vue-dapp';
import {useRoute, useRouter} from 'vue-router';
import Web3 from 'web3';
import {ethers} from 'ethers';
import {apiUrl, BSCM, currentNetwork, networks} from '../../../config';
import connectors from '../contract/connectors';
import {HOME_PAGE, REFERRAL_PAGE} from '../page/page-list';


export const BUTTON_STATUS = 'BUTTON_STATUS';

/** Is Wallet Active Ref */
const isActivated = ref(false);

/** Wallet accounts  */
const currentWalletAddress = ref('');
const referralId           = ref('');

/**
 * Wallet Hook
 */
export const useWalletHook = () => {
	const router                    = useRouter();
	const {disconnect, connectWith} = useWallet();

	/** User authentication */
	function authentication(address) {
		return axios.post(apiUrl + '/api/v1/user', {
			addressUser: address
		});
	}

	/** AutoConnect */
	function autoConnect() {
		if (null !== window.localStorage.getItem('walletconnect')) {
			connectWith(connectors[1]);
		}
		else if ('1' === localStorage.getItem(BUTTON_STATUS) && window.ethereum && (<any>window.ethereum).isMetaMask) {
			connectWith(connectors[0]);
		}
	}

	/** Check Networks Wallet */
	function checkNetworks(): Promise<any> {

		let promise = new Promise((resolve) => {
			resolve('')
		});

		if (!(<any>window.ethereum)) {
			return promise;
		}

		if ((<any>window.ethereum).networkVersion !== currentNetwork) {
			promise = (<any>window.ethereum).request({
				method: 'wallet_switchEthereumChain',
				params: [{chainId: networks[currentNetwork].chainId}]
			}).catch((err) => {
				if (err.code === 4902) {
					(<any>window.ethereum).request({
						method: 'wallet_addEthereumChain',
						params: [
							networks[currentNetwork]
						]
					}).catch(() => {
						disconnectWallet();
					})
				}
				else {
					disconnectWallet();
				}
			}).then(() => {
				autoConnect();
			})
		}

		return promise;
	}

	/** Disconnect Wallet */
	function disconnectWallet() {
		isActivated.value = false;
		localStorage.setItem(BUTTON_STATUS, '0');
		router.push({name: HOME_PAGE});
		disconnect();
	}

	return {isActivated, currentWalletAddress, referralId, authentication, disconnectWallet, checkNetworks, autoConnect}
}

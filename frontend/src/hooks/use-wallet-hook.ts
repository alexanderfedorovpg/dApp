import axios from 'axios';
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {apiUrl, BSCM, currentNetwork, networks} from '../../../config';
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
	const router = useRouter();

	/** User authentication */
	function authentication(address) {
		return axios.post(apiUrl + '/api/v1/user', {
			addressUser: address
		});
	}

	/** Check Networks Wallet */
	function checkNetworks(): Promise<any> {
		let promise = new Promise((resolve) => {
			resolve('')
		});

		if ((<any>window.ethereum).networkVersion !== currentNetwork) {
			promise = (<any>window.ethereum).request({
				method: 'wallet_switchEthereumChain',
				params: [{chainId: networks[currentNetwork].chainId}]
			}).catch((err) => {
				router.push({name: HOME_PAGE});

				if (err.code === 4902) {
					(<any>window.ethereum).request({
						method: 'wallet_addEthereumChain',
						params: [
							networks[currentNetwork]
						]
					}).catch(() => {
						router.push({name: HOME_PAGE});
					})
				}
			})
		}

		return promise;
	}

	/** Disconnect Wallet */
	function disconnect() {
		isActivated.value = false;
		localStorage.setItem(BUTTON_STATUS, '0');
		router.push({name: HOME_PAGE});
	}

	/** Wallet accounts  */
	function checkActiveWallet() {
		const isDisableWallet = '0' === localStorage.getItem(BUTTON_STATUS);

		if (isDisableWallet) {
			router.push({name: HOME_PAGE});
		}

		if (window.ethereum) {
			(<any>window.ethereum).on('accountsChanged', (data) => {
				if (data.length > 0) {
					currentWalletAddress.value = data[0];
					isActivated.value          = true;
					checkNetworks();
					authentication(currentWalletAddress.value).then((response) => {
						router.push({name: REFERRAL_PAGE});
					});
				}
				else {
					isActivated.value = false;
					router.push({name: HOME_PAGE});
				}
			});

			(<any>window.ethereum).request({method: 'eth_accounts'}).then((accountsArr) => {
				let auth = null;

				if (accountsArr.length > 0) {
					checkNetworks();
					currentWalletAddress.value = accountsArr[0];

					if (isDisableWallet) {
						return;
					}

					isActivated.value = true;
					auth              = authentication(accountsArr[0]).then((response) => {
						referralId.value = response.data.referralId;
					});
				}

				router.isReady().then(() => {
					switch (router.currentRoute.value.name) {
						case HOME_PAGE:
							if (null !== auth) {
								auth.then(() => {
									router.push({name: REFERRAL_PAGE});
								});
							}

							break;
						case REFERRAL_PAGE:
							if (false === isActivated.value) {
								router.push({name: HOME_PAGE});
							}

							break;
					}
				});
			});
		}
	}

	return {isActivated, currentWalletAddress, referralId, checkActiveWallet, authentication, disconnect, checkNetworks}
}

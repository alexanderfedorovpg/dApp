import axios from 'axios';
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {apiUrl} from '../../../config';

/** Is Wallet Active Ref */
const isActivated = ref(false);

/** Wallet accounts  */
const accounts = ref([]);

/**
 * Wallet Hook
 */
export const useWalletHook = () => {
	const router = useRouter();

	/** User authentication */
	function authentication(address) {
		axios.post(apiUrl + '/api/v1/user', {
			addressUser: address
		}).then((response) => {
			router.push('/referral/' + response.data.referralId)
		});
	}

	/** Disconnect Wallet */
	function disconnect() {
		(<any> window.ethereum).request({
			method: 'wallet_requestPermissions',
			params: [
				{
					eth_accounts: {}
				}
			]
		})
	}

	/** Wallet accounts  */
	function checkActiveWallet() {
		if (window.ethereum) {
			(<any>window.ethereum).request({method: 'eth_accounts'}).then((accountsArr) => {
				if (accountsArr.length > 0) {
					router.isReady().then(() => {
						if ('referral' !== router.currentRoute.value.name) {
							authentication(accountsArr[0]);
						}
					});

					accounts.value    = accountsArr;
					isActivated.value = true;
				}
			});

			(<any>window.ethereum).on('accountsChanged', (data) => {
				if (data.length > 0) {
					accounts.value    = data;
					isActivated.value = true;
				}
				else {
					isActivated.value = false;
				}
			});
		}
	}

	return {isActivated, accounts, checkActiveWallet, authentication, disconnect}
}

import {MetaMaskConnector, WalletConnectConnector} from 'vue-dapp';
import {currentNetwork, networks, siteUrl} from '../../../config';

export const storageId = 'wcSwayze';

const rpc           = {};
rpc[currentNetwork] = networks[currentNetwork].rpcUrls[0];

const connectors = [
	new MetaMaskConnector({
		appUrl: siteUrl,
	}),
	new WalletConnectConnector({
		qrcode:  true,
		chainId: currentNetwork,
		rpc,
		storageId,
	}),
];

export default connectors;

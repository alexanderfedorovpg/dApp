/** API Url */
export const apiUrl  = 'https://swayze.io';
/** Current Site Url */
export const siteUrl = 'https://swayze.io';

export const BSCM           = 56;
export const testBSCM       = 97;

/** Current Network (BSCM or testBSCM) */
export const currentNetwork = 97;

export const networks = {
	56: {
		chainId:           '0x38',
		blockExplorerUrls: ['https://bscscan.com'],
		chainName:         'Binance Smart Chain Mainnet',
		rpcUrls:           [
			'https://bsc-dataseed1.binance.org',
			'https://bscrpc.com',
			'https://bsc-dataseed1.defibit.io'
		],
		nativeCurrency:    {name: 'BNB', decimals: 18, symbol: 'BNB'},
	},
	97: {
		chainId:           '0x61',
		blockExplorerUrls: ['https://testnet.binance.org/'],
		chainName:         'Binance Smart Chain Testnet',
		rpcUrls:           [
			'https://data-seed-prebsc-1-s1.binance.org:8545',
			'https://bsc-testnet.public.blastapi.io'
		],
		nativeCurrency:    {name: 'tBNB', decimals: 18, symbol: 'tBNB'},
	}
}

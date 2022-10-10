/**
 * Helper detect user language
 */
export default function detectLang() {
	// @ts-ignore
	let detectedLang = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
	if (typeof detectedLang === 'string') {
		return -1 !== detectedLang.indexOf('-') ? detectedLang.split('-')[0] : detectedLang;
	}
	else {
		return 'en'
	}

}

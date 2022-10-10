import {onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';

/**
 * Links hook
 */
export const useLinks = () => {
	const router = useRouter();

	/** Is show background in header-wrapper element */
	const isNeedBackground = ref<Boolean>(false)

	onMounted(() => {
		window.addEventListener('scroll', () => {
			isNeedBackground.value = 0 !== window.scrollY;
		})
	})

	/**
	 * Method scroll to element on page
	 *
	 * @param {string} selectorElement Selector html element
	 * @param {number} correctionValue Scroll correction
	 */
	async function scrollTo(selectorElement, correctionValue = 0) {

		if ('home' !== router.currentRoute.value.name) {
			await router.push('/')
		}

		const yOffset = -104;
		const element = document.querySelector(selectorElement);
		const y = element.getBoundingClientRect().top + window.scrollY + yOffset + correctionValue;

		window.scrollTo({top: y, behavior: 'smooth'});
	}

	return {isNeedBackground, scrollTo}
}

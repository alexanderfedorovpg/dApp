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

	/** Method scroll to element on page */
	async function scrollTo(selectorElement) {

		if ('home' !== router.currentRoute.value.name) {
			await router.push('/')
		}

		document.querySelector(selectorElement).scrollIntoView({behavior: 'smooth', block: 'start'})
	}

	return {isNeedBackground, scrollTo}
}

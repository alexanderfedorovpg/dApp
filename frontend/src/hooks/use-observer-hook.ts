import {ref} from 'vue';

/** Active link in header */
const activeLink = ref(null);

/** Observer to show the active link in the header */
const observer   = new IntersectionObserver((entries) => {
	const entry = entries[0];

	if (entry.isIntersecting) {
		activeLink.value = entry.target.className;
	}

}, {
	root:       document.querySelector('.wrapper'),
	rootMargin: '-50%',
})


/**
 * Observer Hook
 */
export const useObserverHook = () => {
	return {activeLink, observer}
}

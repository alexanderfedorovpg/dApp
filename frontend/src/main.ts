import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import {createI18n} from 'vue-i18n';
import {networks} from '../../config';
import App from './app.vue';
import './assets/normalize.scss';
import './assets/main.scss';
import detectLang from './helpers/detect-user-lang';
import {HOME_PAGE, REFERRAL_PAGE} from './page/page-list';
import ReferralPage from './page/referral-page.vue';
import HomePage from './page/home-page.vue';
import {VueDapp} from 'vue-dapp';
import messages from './translations/messages';


/**
 * App main point.
 */
const router = createRouter({
	routes:  [
		{path: '/referral/:referralId?', name: REFERRAL_PAGE, component: ReferralPage},
		{path: '/', name: HOME_PAGE, component: HomePage},
		{path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/'},
	],
	history: createWebHistory(),
});

createApp(App)
	.use(router)
	.use(VueDapp, {
	})
	.use(createI18n({
		legacy:         false,
		locale:         'en',
		fallbackLocale: 'en',
		messages
	}))
	.mount('#crowdsale');

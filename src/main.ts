import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import {createI18n} from 'vue-i18n';
import App from './app.vue';
import './assets/normalize.scss';
import './assets/main.scss';
import detectLang from './helpers/detect-user-lang';
import TopReferralsPage from './page/top-referrals-page.vue';
import HomePage from './page/home-page.vue';
import messages from './translations/messages';

/**
 * App main point.
 */
const router = createRouter({
	routes:  [
		{path: '/top', name: 'top', component: TopReferralsPage},
		{path: '/', name: 'home', component: HomePage},
		{path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/' },
	],
	history: createWebHistory(),
});

createApp(App)
	.use(router)
	.use(createI18n({
		legacy:         false,
		locale:         detectLang(),
		fallbackLocale: 'en',
		messages
	}))
	.mount('#crowdsale');

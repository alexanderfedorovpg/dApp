import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import App from './app.vue';
import './assets/normalize.scss';
import './assets/main.scss';
import TopReferralsPage from './page/top-referrals-page.vue';
import HomePage from './page/home-page.vue';

/**
 * App main point.
 */
const router = createRouter({
	routes:  [
		{path: '/top', name: 'top', component: TopReferralsPage},
		{path: '/', name: 'home', component: HomePage}
	],
	history: createWebHistory(),
});
createApp(App).use(router).mount('#crowdsale');

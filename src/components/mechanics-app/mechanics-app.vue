<script lang="ts">
import {useI18n} from 'vue-i18n';
/**
 * Component Mechanics App
 */
export default {
	setup() {
		const { t } = useI18n();

		return {t}
	},
}
</script>
<template>
	<div class="mechanics-app">
		<p class="mechanics-app__title">{{t('mechanics-app_title')}}</p>
		<div class="mechanics-app__steps">
			<div class="mechanics-app__steps-item">
				<div class="mechanics-app__steps-item-blur"></div>
				<div class="mechanics-app__steps-item-wrapper">
					<div class="mechanics-app__steps-item-description">
						<div class="mechanics-app__steps-item-step">{{t('mechanics-app_step')}} &nbsp; 1</div>
						<div class="mechanics-app__steps-item-title">{{t('mechanics-app_block1_title')}}</div>
						<div class="mechanics-app__steps-item-text">{{t('mechanics-app_block1_description')}}</div>
					</div>
					<div class="mechanics-app__steps-item-image">
						<img src="../../assets/images/step1.png">
					</div>
				</div>
			</div>
			<div class="mechanics-app__steps-item">
				<div class="mechanics-app__steps-item-blur"></div>
				<div class="mechanics-app__steps-item-wrapper">
					<div class="mechanics-app__steps-item-description">
						<div class="mechanics-app__steps-item-step">{{t('mechanics-app_step')}} &nbsp; 2</div>
						<div class="mechanics-app__steps-item-title">{{t('mechanics-app_block2_title')}}</div>
						<div class="mechanics-app__steps-item-text">{{t('mechanics-app_block2_description')}}</div>
					</div>
					<div class="mechanics-app__steps-item-image">
						<img src="../../assets/images/step2.png">
					</div>
				</div>
			</div>
			<div class="mechanics-app__steps-item">
				<div class="mechanics-app__steps-item-blur"></div>
				<div class="mechanics-app__steps-item-wrapper">
					<div class="mechanics-app__steps-item-description">
						<div class="mechanics-app__steps-item-step">{{t('mechanics-app_step')}} &nbsp; 3</div>
						<div class="mechanics-app__steps-item-title">{{t('mechanics-app_block3_title')}}</div>
						<div class="mechanics-app__steps-item-text">{{t('mechanics-app_block3_description')}}</div>
					</div>
					<div class="mechanics-app__steps-item-image">
						<img src="../../assets/images/step3.png">
					</div>
				</div>
			</div>
			<div class="mechanics-app__steps-item">
				<div class="mechanics-app__steps-item-blur"></div>
				<div class="mechanics-app__steps-item-wrapper">
					<div class="mechanics-app__steps-item-description">
						<div class="mechanics-app__steps-item-step">{{t('mechanics-app_step')}} &nbsp; 4</div>
						<div class="mechanics-app__steps-item-title">{{t('mechanics-app_block4_title')}}</div>
						<div class="mechanics-app__steps-item-text">{{t('mechanics-app_block4_description')}}</div>
					</div>
					<div class="mechanics-app__steps-item-image">
						<img src="../../assets/images/step4.png">
					</div>
				</div>
			</div>
			<div class="mechanics-app__steps-item">
				<div class="mechanics-app__steps-item-blur"></div>
				<div class="mechanics-app__steps-item-wrapper">
					<div class="mechanics-app__steps-item-description">
						<div class="mechanics-app__steps-item-step">{{t('mechanics-app_step')}} &nbsp; 5</div>
						<div class="mechanics-app__steps-item-title">{{t('mechanics-app_block5_title')}}</div>
						<div class="mechanics-app__steps-item-text" v-html="t('mechanics-app_block5_description')"></div>
					</div>
					<div class="mechanics-app__steps-item-image">
						<img src="../../assets/images/step5.png">
					</div>
				</div>
			</div>
			<div class="mechanics-app__steps-item">
				<div class="mechanics-app__steps-item-blur"></div>
				<div class="mechanics-app__steps-item-wrapper">
					<div class="mechanics-app__steps-item-description">
						<div class="mechanics-app__steps-item-step">{{t('mechanics-app_step')}} &nbsp; 6</div>
						<div class="mechanics-app__steps-item-title">{{t('mechanics-app_block6_title')}}</div>
						<div class="mechanics-app__steps-item-text" v-html="t('mechanics-app_block6_description')"></div>
					</div>
					<div class="mechanics-app__steps-item-image">
						<img src="../../assets/images/step6.png">
					</div>
				</div>
			</div>
		</div>
		<div class="mechanics-app__about">
			<div class="mechanics-app__about-title">{{t('mechanics-app_about_title')}}</div>
			<div class="mechanics-app__about-items">
				<div class="mechanics-app__about-item">
					<span class="mechanics-app__about-item-title">3 BUSD </span>
					<p class="mechanics-app__about-item-text">{{t('mechanics-app_about_block1_title')}}</p>
				</div>
				<div class="mechanics-app__about-item">
					<div class="mechanics-app__about-item-blur"></div>
					<span class="mechanics-app__about-item-title">3 BUSD </span>
					<p class="mechanics-app__about-item-text">{{t('mechanics-app_about_block2_title')}}</p>
				</div>
				<div class="mechanics-app__about-item">
					<span class="mechanics-app__about-item-title">по 1 BUSD</span>
					<p class="mechanics-app__about-item-text">{{t('mechanics-app_about_block3_title')}}</p>
				</div>
				<div class="mechanics-app__about-item">
					<span class="mechanics-app__about-item-title">3 BUSD </span>
					<p class="mechanics-app__about-item-text">{{t('mechanics-app_about_block4_title')}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.mechanics-app {
	margin-top: 120px;

	&__title {
		font-size: 32px;
		color:     #fff;
	}

	&__steps {
		margin-top: 80px;
		display:    flex;
		flex-wrap:  wrap;
	}

	&__about {
		margin-top:      30px;
		width:           100%;
		background:      rgba(104, 104, 104, 0.3);
		backdrop-filter: blur(10px);
		border-radius:   20px;
		height:          365px;
	}

	&__about-items {
		display:         flex;
		flex-flow:       row;
		justify-content: space-between;
		margin:          40px 50px 50px;
	}

	&__about-item {
		padding:       25px;
		text-align:    left;
		margin-right:  30px;
		background:    linear-gradient(to right, #4d386f, rgb(52 46 69));
		border-radius: 20px;

		&:last-child {
			margin-right: 0;
		}
	}

	&__about-item-title {
		color:       #fff;
		font-weight: 500;
		font-size:   20px;
	}

	&__about-item-text {
		color:       #c6c6c6;
		font-weight: 400;
		font-size:   16px;
	}

	&__about-title {
		color:       #fff;
		font-weight: 700;
		font-size:   32px;
		text-align:  left;
		width:       530px;
		padding:     50px 50px 0 40px;
	}

	&__steps-item {
		background:      rgba(104, 104, 104, 0.3);
		backdrop-filter: blur(10px);
		border-radius:   20px;
		width:           582px;
		height:          381px;
		overflow:        hidden;
		margin:          0 0 30px 30px;

		&:nth-child(2n+1) {
			margin-left: 0;
		}
	}

	&__steps-item-wrapper {
		position: absolute;
		bottom:   0;
		width:    100%;
		height:   100%;
	}

	&__steps-item-step {
		background:    #9751f3;
		border-radius: 8px;
		font-size:     14px;
		padding:       9px 15px;
		color:         #ffff;
		width:         max-content;
	}

	&__steps-item-title {
		margin-top:  40px;
		color:       #ffff;
		font-size:   22px;
		font-weight: 500;
	}

	&__steps-item-text {
		margin-top:  12px;
		color:       #c6c6c6;
		font-weight: 400;
		font-size:   18px;
		width:       260px;
	}

	&__steps-item-description {
		text-align: left;
		padding:    40px;
	}

	&__steps-item-image {
		position:   absolute;
		bottom:     -5px;
		right:      0;
		text-align: end;
	}

	&__steps-item-blur {
		position:       relative;
		width:          150px;
		height:         150px;
		left:           37%;
		top:            -15%;
		background:     #9751f3;
		filter:         blur(100px);
		-webkit-filter: blur(100px);
		-moz-filter:    blur(100px);
		-ms-filter:     blur(100px);
		-o-filter:      blur(100px);
	}
}
</style>

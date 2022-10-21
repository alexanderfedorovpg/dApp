<script lang="ts">
import BaseHeader from './components/base-header/base-header.vue';
import BaseFooter from './components/base-footer/base-footer.vue';

/**
 * Main app
 */
export default {
	components: {
		BaseHeader,
		BaseFooter,
	},
}
</script>
<template>
	<div class="wrapper">
		<base-header/>
		<router-view/>
		<base-footer/>
	</div>
	<div class="blur11"></div>
	<div class="blur10"></div>
	<div class="blur9"></div>
	<div class="blur8"></div>
	<div class="blur7"></div>
	<div class="blur6"></div>
	<div class="blur5"></div>
	<div class="blur4"></div>
	<div class="blur3"></div>
	<div class="blur2"></div>
	<div class="blur1"></div>
	<div class="blur"></div>
</template>

<style lang="scss">
@import "assets/values.scss";

#crowdsale {
	width:    100%;
	overflow: hidden;
	position: relative;
}

.blur {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           -197px;
	top:            -145px;
	background:     #eb14d5;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur1 {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           -220px;
	top:            2129px;
	background:     #eb14d5;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur2 {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           1740px;
	top:            1537px;
	background:     #eb14d5;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur3 {
	position:       absolute;
	width:          550px;
	height:         550px;
	left:           1048px;
	top:            223px;
	background:     #9751f3;
	filter:         blur(300px);
	-webkit-filter: blur(300px);
	-moz-filter:    blur(300px);
	-ms-filter:     blur(300px);
	-o-filter:      blur(300px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur4 {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           -220px;
	top:            991px;
	background:     #9751f3;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur5 {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           1740px;
	top:            2780px;
	background:     #9751f3;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur6 {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           -220px;
	top:            3367px;
	background:     #9751f3;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur7 {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           1740px;
	top:            3577px;
	background:     #eb14d5;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur8 {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           -213px;
	top:            4399px;
	background:     #eb14d5;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur9 {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           1740px;
	top:            4590px;
	background:     #9751f3;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur10 {
	position:       absolute;
	width:          400px;
	height:         400px;
	left:           -213px;
	top:            5196px;
	background:     #9751f3;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}

.blur11 {
	position:       absolute;
	width:          200px;
	height:         200px;
	left:           1251px;
	top:            5889px;
	background:     #eb14d5;
	filter:         blur(350px);
	-webkit-filter: blur(350px);
	-moz-filter:    blur(350px);
	-ms-filter:     blur(350px);
	-o-filter:      blur(350px);

	@media (max-width: $max-mobile-with) {
		display: none;
	}
}
</style>

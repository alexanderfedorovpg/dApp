<template>
	<div class="what-is-invest">
		<div class="what-is-invest__item">
			<div class="what-is-invest__item-container">
				<img class="what-is-invest__item-image" src="../../assets/images/img_1.png">
			</div>
			<div class="what-is-invest__item-block what-is-invest__item-block_text">
				<span class="what-is-invest__item-title">Во что  вы инвестируете</span>
				<p class="what-is-invest__item-text">В разработку дэйтинг приложения без фейков, спама, интимных усуг, оскорблений и прочих неприятных вещей которыми переполнены существующие сейчас проекты.</p>
				<p class="what-is-invest__item-text">Потому что, наше комьюнити само решает кого приглашать в проект, и каждый новый пользователь проходит три этапа вериикации прежде чем попасть в сеть.</p>
			</div>
		</div>
		<div class="what-is-invest__item">
			<div class="what-is-invest__item-container what-is-invest__item-container_text">
				<span class="what-is-invest__item-title">Как вы можете заработать на стадии сбора средств</span>
				<p class="what-is-invest__item-text">Вы инвестируете 25 BUSD, получаете реферальную ссылку, делитесь ей с друзьями и знакомыми, если вы владелец какой то площадки, вам еще проще рассказать своей аудитории о нашем проекте, и привлечь заинтересованных пользователей которые могут так же инвестировать и зарабатывать.</p>
				<p class="what-is-invest__item-text">С каждого привлеченного реферала (сделавшего депозит) вы получаете 5 BUSD.</p>
				<p class="what-is-invest__item-text">20 BUSD идут в фонд команды разработчиков.</p>
				<p class="what-is-invest__item-text">Таким образом мы пытаемся заинтересовать инвесторов, и ускорить процесс сбора средств для начала разработки.</p>
			</div>
			<div class="what-is-invest__item-block what-is-invest__item-block_image">
				<img class="what-is-invest__item-image1" src="../../assets/images/img_2.png">
			</div>
		</div>
		<div class="what-is-invest__item">
			<div class="what-is-invest__item-container what-is-invest__item-container_image">
				<img class="what-is-invest__item-image2" src="../../assets/images/fgerg_1.png">
			</div>
			<div class="what-is-invest__item-block what-is-invest__item-block_text">
				<span class="what-is-invest__item-title">Какие преимущества получат инвесторы</span>
				<p class="what-is-invest__item-text">Неограниченный доступ к премиум функционалу приложения (для пользователей пришедших после релиза ежемесячная подписка будет составлять 5 BUSD).</p>
				<p class="what-is-invest__item-text">Инвесторы первыми смогут привлекать новых пользователей в приложение и получать за каждого нового пользователя 3 BUSD.</p>
			</div>
	</div>
	</div>
</template>

<style lang="scss">
.what-is-invest {
	margin-top: 80px;
}

.what-is-invest__item {
	display:         flex;
	flex-direction:  row;
	justify-content: space-around;
	margin-bottom:   40px;
}

.what-is-invest__item-block {
	text-align: left;
	width:      582px;

	&_text {
		text-align: left;
	}

	&_image {
		text-align: center;
	}
}

.what-is-invest__item-container {
	text-align: center;
	width:      100%;
	max-width:  582px;

	&_text {
		text-align: left;
	}
}

.what-is-invest__item-title {
	font-size:  22px;
	color:      #fff;
	text-align: left;
}

.what-is-invest__item-text {
	font-size:  18px;
	color:      #c6c6c6;
	text-align: left;
}

.what-is-invest__item-image {
	width:  385px;
	height: 380px;
}

.what-is-invest__item-image1 {
	width:  301px;
	height: 380px;
}

.what-is-invest__item-image2 {
	width:  365px;
	height: 380px;
}
</style>

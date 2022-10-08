<template>
	<div class="roadmap">
		<div class="roadmap-title">Дорожная карта</div>
		<div class="roadmap-map">
			<div class="roadmap-map__step">
				<img src="../../assets/images/1.svg">
				<div class="roadmap-map__step-description">
					<div class="roadmap-map__step-title">Q1 2022</div>
					<div class="roadmap-map__step-text">Завершение работы над MVP и запуск закрытого бета-тестирования на блокчейне. <br/><br/> iOS, Android, Веб-приложения</div>
				</div>
			</div>
			<div class="roadmap-map-dots-wrapper">
				<div class="roadmap-map-dots"></div>
			</div>
			<div class="roadmap-map__step">
				<img src="../../assets/images/2.svg">
				<div class="roadmap-map__step-description">
					<div class="roadmap-map__step-title">Q2 2022</div>
					<div class="roadmap-map__step-text">
								Трансмутация и способность скрещивать Катлетов для создания новых. <br/><br/>
								Казначейский фонд (случайным образом раздает игрокам МЕТ-предметы). <br/><br/>
								Листинги на первых биржах <br/><br/>
								Фиатный протокол, позволяющий покупать NFT за фиатные деньги</div>
				</div>
			</div>
			<div class="roadmap-map-dots-wrapper">
				<div class="roadmap-map-dots"></div>
			</div>
			<div class="roadmap-map__step">
				<img src="../../assets/images/3.svg">
				<div class="roadmap-map__step-description">
					<div class="roadmap-map__step-title">Q3 2022</div>
					<div class="roadmap-map__step-text">
						Завершение технического решения и разработка продукта до версии 1.0.<br/><br/>
						Торговая площадка NFT для покупки и продажи игровых персонажей и снаряжения.<br/><br/>
						Функциональность стейкинга.<br/><br/>
						Алгоритм PvE  для подбора игроков и сражений.<br/><br/>
					</div>
				</div>
			</div>
			<div class="roadmap-map-dots-wrapper">
				<div class="roadmap-map-dots"></div>
			</div>
			<div class="roadmap-map__step">
				<img src="../../assets/images/4.svg">
				<div class="roadmap-map__step-description">
					<div class="roadmap-map__step-title">Q4 2022</div>
					<div class="roadmap-map__step-text">
						Дополнительная игровая механика.<br/><br/>
						Открытый API для разработчиков, позволяющий изобретать и реализовывать собственную игровую механику.<br/><br/>
						Расширение возможностей использования способностей игроков вне сражений.<br/><br/>
						Создание фитнес-мета-вселенной и мета-игровой механики. <br/><br/>
						Выделение земли для продажи и среды обитания. игроков.<br/><br/>
						Платформа DeFi.<br/><br/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.roadmap {
	margin-top: 120px;
}

.roadmap-title {
	font-weight: 700;
	font-size:   32px;
	color:       #fff;
}

.roadmap-map {
	margin-top:     80px;
	display:        flex;
	flex-direction: row;
	width:          100%;
}

.roadmap-map__step {
	text-align: left;
	max-width:  276px;
}

.roadmap-map__step-title {
	margin-top:  30px;
	font-size:   20px;
	line-height: 130%;
	color:       #fff;
}

.roadmap-map__step-text {
	margin-top: 12px;
	font-size:  16px;
	color:      #c6c6c6;
}

.roadmap-map-dots-wrapper {
	position: relative;
	width:    43px;
}

.roadmap-map-dots {
	position:   absolute;
	width:      180px;
	height:     5px;
	top:        148px;
	right:      -5px;
	background: url("../../assets/images/line.svg");
}

</style>

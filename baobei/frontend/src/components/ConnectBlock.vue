<script setup lang="ts">
</script>
<template>
	<section class="connect">
		<h4>
			По всем вопросам свяжитесь с нами любым удобным способом:
		</h4>
		<ul>
			<li>E-mail: <a href="mailto:baobei.nsk@gmail.com"><b>baobei.nsk@gmail.com</b></a></li>
			<li>Телефон: <a href="tel:+79139178616"><b>+ 7 913 917 86 16</b></a></li>
		</ul>
		<p>
			<a href="">Оставить заявку на обратный звонок</a>
		</p>
	</section>
</template>
<style lang="scss" scoped>
.connect{
	background-color: var(--connect-background);
	padding: 120px 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	h4{
		font-size: 20px;
		text-align: center;
	}
	ul{
		list-style-type: none;
		margin: 40px 0;
		padding: 0;
		li{
			font-weight: lighter;
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
			a { 
				color: var(--black);
				text-decoration: none;
				font-size: 22px;
			}
		}
	}

	> p{
		a{
			color: var(--pink);
		}
	}

	@include breakpoint(sm){
		padding: 70px 15px;
	}
}
</style>
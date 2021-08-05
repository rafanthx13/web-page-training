# Como fazer as Coisas

## Tailwind

Desabilite a parte do `purge` no início. Só use ela no final. 
1. No inicio, crie o tailwind completo e pesado e vá usando-ele

## Shape Bottom

1. A imagem precisa ocupar mais de 100vh 
2. O shape em svg deve ser invertido, pois a parte da imagem tem que ser a parte de fora do svg, use aja, a região que não recebe o `fill`


CSS

````css
.image-hero {
	background-image: url("./../../assets/images/background-home-image.png");
	background-repeat: no-repeat;
	background-size: cover;
	/* TEST */
	/* transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s; */
	z-index: 1;
	position: relative;
	box-sizing: border-box;
	height: 115vh; /* Tem que deixar mais para pegar o shape fora do full-screen */
}

* Como é Feito */
/* O SVG É transparete na área nao pintada, entao, agente inverte ele e pinta de branco, ai aparece emcima a parte da imagem e embaixo branco como queremos*/
.divider {
	fill: white;
	width: calc(100% + 1.3px);
	height: 70px;
	transform: rotate(180deg);
	-webkit-transform: rotate(180deg);
}

.shape-bottom {
	bottom: -1px;
	position: absolute;
	/* 
    overflow: hidden;
	left: 0;
	width: 100%;
	line-height: 0;
	direction: ltr; */
}
````

## Problemas

1. Ter que usar h-full no hero.
   + Solução: usar h100vh para com base nisso ficar no meio
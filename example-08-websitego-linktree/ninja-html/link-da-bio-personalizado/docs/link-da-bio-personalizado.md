# Ninja do HTML - Link da Bio Personalizado

**O que é:** Nâo é o link tree.Vamos criar uma ppágina semelhante mas sem limitação do link tree e sem pagar nada.

## Passo a Passo

1. Baixar arquivo
2. Deelta quase tudo do template
3. Editar css (style.css e bootstrap.css)
4. Foi necessário baixar 2 imagens do site próprio deles
5.  Registrar domínio (registro.com.br == R$ 40,00 para '.com.br', sem problemas)
6.  Hospedagem: Pode usar o cupom (INFELISMENTE, É SÓ PARA 20 PESSOAS, ENTAO NÃO DEVE DAR MAIS)


.btn-white-border {
	color: #fff;
	background: transparent;
	/*font-family: 'Cabin', sans-serif;*/
	font-size: 16px; 
	line-height: 22px;
	font-weight: 200;
	letter-spacing: 1px;
	border: 1px solid #fff;
	border-radius: 5px 5px;
	margin: 10px 10px;
	padding: 15px 30px;
	transition: all 0.4s ease-in-out;
	-webkit-transition: all 0.4s ease-in-out;
	display: block;
	width: 85%;
	margin-left: auto;
	margin-right: auto;
}


.home-section h1 {
		margin-bottom: 40px;
	}


@media (max-width: 767px) {

	.home-section {
		padding-top: 100px;
	  	/* padding-bottom: 80px; */
	}

}


.home-section-overlay{
	width: 100%;
	/* background: linear-gradient(-45deg, #4576c3, #5547bf, #9045c0, #be47b2);
	background-size: 400% 400%; */
	-webkit-animation: Gradient 8s ease infinite;
	-moz-animation: Gradient 8s ease infinite;
	animation: Gradient 8s ease infinite;
	opacity: 0.89;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.home-section {
	width: 100%;
	position: relative;
	text-align: center;
  	padding-top: 245px;
  	padding-bottom: 215px;
	background: url(../images/bg-back-ground.png) top center no-repeat;
	background-size: cover;
}


## Dicas VSCODE

+ Você pode minimizar tags no HTML  e asism deletar de forma melhor
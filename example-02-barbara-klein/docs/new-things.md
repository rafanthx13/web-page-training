# Novas Features de Themes

## Libs

+ [wow.js — Reveal Animations When Scrolling](https://wowjs.uk/)
  + Usado com animate.css
  + Ex: Ao descer a página, as coisa aparecem suavemente, e nâo desaparecem
  + Usado em: Entox
+ [odometer](https://github.hubspot.com/odometer/docs/welcome/)
  + Serve para aparecer umonte de número
  + Usado em: Entox
+ wNumb.js
  + Formatador de número e dinheiro JS
  + Usado em: Entox
+ [Isotope](https://isotope.metafizzy.co/)
  + Se tiver uma lsita, e retirar elemntos da DOM. Vai animar, add/remove e ordenmaneto de elementos na DOM
  + Usado em: Entox
+ https://owlcarousel2.github.io/OwlCarousel2/
  + Carrosel drag drop
  + Usado em: Entox, jironis
+ https://bxslider.com/
  + Uma image que na verdade sâo 2. ApARECE 3 PONTINHOS EM BAIXO APRA VOCÊ PASSAR A IMAGEM NUM MESMO LUGAR
  + Usado em: Entox
+ https://swiperjs.com/
  + O mesmo que bxslide, mas para div/conteudos inteiros
  + Usado em: Entox
+ [jquery-magnific-popup]https://dimsemenov.com/plugins/magnific-popup/
  + Serve para da rum zom na iamgem ao clicala
  + Usado em: Entox, jironis
+ https://vegas.jaysalvat.com/
  + Slider Bakground automatic. Par aimagens de fundo grande
  + Usado em: Entox
+ https://pixelcog.github.io/parallax.js/
  + Paralax
  + Usado em: jironis

## Ferramentas CSS

SASS

+ Katen, datasoft

## Estrutura do projeto

```
index.html
assets/
	vendors/ /plugins : css ou js que veio de terceiro
	css/
	js/
	images/
	fonts/
```

## Estrutura do CSS Responsivo

```
/*COMENTARIOS DE SEÇOES */
/*--------------------------------------------------------------
# Sidebar
--------------------------------------------------------------*/

/* Mobile Layout: 320px. */
@media only screen and (max-width: 767px) {
}


/* Tablet Layout: 768px. */
@media only screen and (min-width: 768px) and (max-width: 991px) {

}

/* Medium screen  */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Large Layout: 1200px.
@media only screen and (min-width: 1200px){
```

## Estrutura do JS

```
/*---------------------------------------------
Template name:  
Version:        
Author:         
Author Email:   

NOTE:
------
..

[Table of Content]

01: 
02: ....


----------------------------------------------*/


/*==========================================
    14: feature-carousel
===========================================*/

```

## Estrutura do html

Deve ter:

+ Comentário de inicio e fim de seçâo

```
<!-- app video -->
    <section class="app-video">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- why bottle video -->
                    <div class="theme-video-wrap">
                        <a href="https://www.youtube.com/watch?v=SZEflIVnhH8" class="video-btn" data-popup="video"><i class="fa fa-play"></i></a>
                    </div>
                    <!-- end of why bottle video -->
                </div>
            </div>
        </div>
    </section>
    <!-- End of why bottol water -->
```

## class body

datasoft

```
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #848e9f;
  overflow-x: hidden;
}
```

### ::Selection

Quando vocÊ passa o cursosr para dar ctrl+c ctrl+v, vocÊ pode configurar a cor e o fundo. Em geral, deixamos cor branca e fundo colorido

```
::selection {
  background-color: #red;
  color: #ffffff;
}
```



## `theme-color`: Cor no browser em *mobile*

```html
<meta name="theme-color" content="#673AB6" >
```



## Html na linguagem correta

`html: pt-br`

## SEO

### SEO Exemplos

````html
<meta name="description" content="Multipurpose Landing Page with Page Builder - Agency/Portfolio/Freelancer Landing Page" />
<meta name="keywords" content="getleads, html theme, agency landing page, agency theme, agency template, portfolio theme, freelancer theme, creative theme, digital theme, html landing page, one page, responsive landing page" />
<meta name="author" content="Themedept">
````

````html
<meta name="description" content="Aimee HTML5 Template is a simple SEO and Digital marketing Template" />
<meta name="keywords" content="App, Landing, Business, Onepage, Html, Business" />
````

## Onde por Scripts JS

No fim do arquivo antes da tag body para ficar otimizado. Coloque primeiro as de libs, e por último os seus próprio

## CDN

De preferencia, nao use, deixe tudo local

## nav scroll: Fazer Scroll up e donw sobre o nav-bar

uma opção

```
html{
scroll-behavior: smooth;
}
```

mas isso só serve para descer, e nâo para subir o elemento

se tiver um nvabar fixo vai atrapalahar

---------------

### skrirel: jquery

https://www.origamid.com/codex/scroll-suave-para-link-interno/

index.html

```html
libs:
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
		integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
		<script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script>
		<!-- Necessario por causa do eror do sroll : https://stackoverflow.com/questions/12592279/typeerror-p-easingthis-easing-is-not-a-function/27598883 -->
```

```html
nav-bar:

<header id="header-global" x-data="{ mobileMenuOpen : false }" class="header-shadow flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-20 sticky top-0 z-50">
		<a href="#" class="block">
			<span class="sr-only">themes.dev</span>
			<img href="#home" class="logo-scroll-link h-12" src="./imgs/logo-barbara.svg" alt="">
		</a>
		<button @click="mobileMenuOpen = !mobileMenuOpen" class="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1">
			<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
			</svg>
		</button>
		<nav class="nav-link absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0"
		:class="{ 'flex' : mobileMenuOpen , 'hidden' : !mobileMenuOpen}"  @click.away="mobileMenuOpen = false"
		>
			<a class="mr-5 hover:text-gray-900" href="#home">Home</a>
			<a class="mr-5 hover:text-gray-900" href="#about">Sobre</a>
			<a class="mr-5 hover:text-gray-900" href="#experience">Experiências</a>
			<a class="mr-5 hover:text-gray-900" href="#service">Serviços</a>
			<a class="mr-5 hover:text-gray-900" href="#products">Produtos</a>
			<a class="mr-5 hover:text-gray-900" href="#contact">Contato</a>
		</nav>
	</header>

	<section id="home" class="text-gray-600 body-font primary-background">
```



app.js

```js
$(document).ready(function() {

		// nav scroll :: Click nav-bar => scroll slowing
		if($('#header-global').length){ // id da tag header
			var navoffset = $('#header-global').height(); // tamanho do nav-bar
			// nav-link deve ser a classe que esta acima das tag a
			$('.nav-link a[href^="#"], .logo-scroll-link').on("click", function(e) { // eh o nav-bar e o icone, para ir ao topo
				e.preventDefault(); // prevenir de fazer o jump brusco
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top - navoffset - 50
				}, "slow","easeInSine");
			});
		} else {
            // ?????
			$('.logo-scroll-link').on("click", function(e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top
				}, "slow","easeInSine");
			});
		}

});

```



## Estrutura do body

```
body
	header
	div-main-content
​		section
​		section
	footer
```



## scrollspy : A medida que descer, o nav fica diferente

### srkriwl

```js
// scrollspy : o nav-bar piscar a medida que desce as seções
		var win = $(window);
		$("section").each(function () {
			if (win.scrollTop() >= $(this).offset().top - 50) {
				$(".nav-link a[href='#" + $(this).attr("id") + "']").addClass("nav-active").siblings().removeClass("nav-active");
			}
		});
		win.on("scroll", function () {
			$("section").each(function () {
				if (win.scrollTop() >= $(this).offset().top - 50) {
					$(".nav-link a[href='#" + $(this).attr("id") + "']").addClass("nav-active").siblings().removeClass("nav-active");
				}
			});
		});
```

Requer:

+ Jquey e jquery-ui; ter o nav-bar; o nav-bar apontar para tags sectio

O que faz:

+ A medida que descer, vai atribuitor a classe `active` (que deverá ter a cor) e deletar o anterior
+ 50 é um offset random

html

```
<nav class="nav-link absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0"
		:class="{ 'flex' : mobileMenuOpen , 'hidden' : !mobileMenuOpen}"  @click.away="mobileMenuOpen = false"
		>
			<a class="mr-5 hover:text-gray-900" href="#home">Home</a>
			<a class="mr-5 hover:text-gray-900" href="#about">Sobre</a>
			<a class="mr-5 hover:text-gray-900" href="#experience">Experiências</a>
			<a class="mr-5 hover:text-gray-900" href="#service">Serviços</a>
			<a class="mr-5 hover:text-gray-900" href="#products">Produtos</a>
			<a class="mr-5 hover:text-gray-900" href="#contact">Contato</a>
		</nav>
		
		
		
		
		....
		
		
		<section id="home" class="text-gray-600 body-font primary-background">
		<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
```

## Loading

```
css

.dtr-preloader { background: #e2434b; }
.dtr-loader { color: #fff; }
/*===== preloader =====*/
.dtr-preloader { width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; margin: auto; opacity: 1; -webkit-transition: linear .3s ease; -moz-transition: linear .3s ease; transition: linear .3s ease; z-index: 9999; }
.dtr-preloader .dtr-preloader-inner { width: 100vw; height: 100vh; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; overflow: hidden; }
.dtr-loader, .dtr-loader:before, .dtr-loader:after { width: 1.5em; height: 1.5em; border-radius: 50%; -webkit-animation-fill-mode: both; animation-fill-mode: both; -webkit-animation: loadtwinkle 1.8s infinite ease-in-out; animation: loadtwinkle 1.8s infinite ease-in-out; }
.dtr-loader { position: relative; font-size: 10px; text-indent: -9999em; -webkit-transform: translateZ(0); -ms-transform: translateZ(0); transform: translateZ(0); -webkit-animation-delay: -0.12s; animation-delay: -0.12s; }
.dtr-loader:before, .dtr-loader:after { content: ''; position: absolute; top: 0; }
.dtr-loader:before { left: -2.5em; -webkit-animation-delay: -0.30s; animation-delay: -0.30s; }
.dtr-loader:after { left: 2.5em; }
@-webkit-keyframes loadtwinkle {
 0%, 80%, 100% {
 box-shadow: 0 2.5em 0 -1.2em;
}
 40% {
 box-shadow: 0 2.5em 0 0;
}
}
@keyframes loadtwinkle {
 0%, 80%, 100% {
 box-shadow: 0 2.5em 0 -1.2em;
}
 40% {
 box-shadow: 0 2.5em 0 0;
}
}
```

jquey

```
// on load
$(window).on('load', function(){
	"use strict";

 // preloader
 $('.dtr-preloader').delay(400).fadeOut(500);
});
// on load end
```

DEVE SER O ÚLTIMO JAVASCRIP A EXECUTAR EM TODA A PARTE

##  Sticky Header

```css
css::

/*Fixar no topo*/
.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}

#header-global { background-color: transparent; color: #fff; padding: 30px 50px; } /* Nav Inicial Fixo */
#header-global { -webkit-transition: all .3s ease; transition: all .3s ease; } /* TRANSIÇÂO */
#header-global.on-scroll { background-color: #fff; box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 35%); padding: 10px 50px; } /* Nav no Scroll, com padding menor para ocupar menos*/

.svg-hidden {display: none;} /* Trocar image de colorida para branca */

/* Modificaçôes internas do header quando está fixado no topo */
.my-menu-scroll {color: #7279aa;}
```

html

```html
	<header  class="flex flex-wrap flex-row justify-between
	 md:items-center md:space-x-4 bg-white fixed-top"
	id="header-global" x-data="{ mobileMenuOpen : false }"
	>
		<a href="#home" class="block">
			<img id="svg-normal" class="logo-scroll-link h-12 svg-hidden" src="./imgs/logo-barbara.svg" alt="">
			<img id="svg-branca" class="logo-scroll-link h-12" src="./imgs/logo-barbara-branca.svg" alt="">
		</a>
		<button @click="mobileMenuOpen = !mobileMenuOpen" class="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1">
			<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
			</svg>
		</button>
		<nav class="nav-link absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0"
		:class="{ 'flex' : mobileMenuOpen , 'hidden' : !mobileMenuOpen}"  @click.away="mobileMenuOpen = false"
		>
			<a class="mr-5 hover:text-gray-900" href="#home">Home</a>
			<a class="mr-5 hover:text-gray-900" href="#about">Sobre</a>
			<a class="mr-5 hover:text-gray-900" href="#experience">Experiências</a>
			<a class="mr-5 hover:text-gray-900" href="#service">Serviços</a>
			<a class="mr-5 hover:text-gray-900" href="#products">Produtos</a>
			<a class="mr-5 hover:text-gray-900" href="#contact">Contato</a>
		</nav>
	</header>
```

js

```js
// Sticky Header: Sticky que diminui e muda de cor ao descer scroll
	function headerSticky(){
		var windowPos=$(window).scrollTop();
		if( windowPos>20){
			// SCROLL
			$('.fixed-top').addClass("on-scroll");
			$('#svg-normal').removeClass("svg-hidden");
			$('#svg-branca').addClass("svg-hidden");
			$('.nav-link ').addClass("my-menu-scroll");
		} else {
			// FIXADO (É O INICIAL)
			$('.fixed-top').removeClass("on-scroll");
			$('#svg-normal').addClass("svg-hidden");
			$('#svg-branca').removeClass("svg-hidden");
			$('.nav-link ').removeClass("my-menu-scroll");
		}
	}
	headerSticky();
	$(window).scroll(headerSticky);
```

O que foi feito:

+ Ao descer o Scroll, é aplicado e retirado classes CSS.
  + OBS: é feito uma troca de image, mas poderia ser simplesmente trocar de cor com CSS
  + Foi necessário também transiçâo animada



## Botão para subir

```css
/*<!-- BOTAO --> */
#scrollTopBtn {
    position: fixed;
    right: 10px;
    bottom: 30px;
    width: 45px;
    height: 45px;
    opacity: 0;
    z-index: 1000;
    font-size: 18px;
    border-radius: 50%;
    color: #fff;
    background-color: #7279aa;
    overflow: hidden;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
#scrollTopBtn:hover {
  background-color: #032139;
}
#scrollTopBtn.actived {
  right: 30px;
  opacity: 1;
}

.btn-scroll-up {width: 30px;
	margin-right: auto;
	margin-left: auto;}

@media (min-width: 320px) and (max-width: 767px) {

  #scrollTopBtn {
    bottom: 20px;
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  #scrollTopBtn.actived {
    right: 20px;
  }
}
```

js

```js
/*==========   Scroll Top Button   ==========*/
		// Global variables
    var $win = $(window);
		
    var $scrollTopBtn = $('#scrollTopBtn');
    // Show Scroll Top Button
    $win.on('scroll', function () {
        if ($(this).scrollTop() > 700) {
            $scrollTopBtn.addClass('actived');
        } else {
            $scrollTopBtn.removeClass('actived');
        }
    });
    // Animate Body after Clicking on Scroll Top Button
    $scrollTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
```

html

```html
<button id="scrollTopBtn"> <img src="./imgs/angle-double-up.svg" alt="" class="btn-scroll-up"/> </button>
```



## Mudar Scroll: cor e tamanho

link: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp

```
::-webkit-scrollbar the scrollbar.
::-webkit-scrollbar-button the buttons on the scrollbar (arrows pointing upwards and downwards).
::-webkit-scrollbar-thumb the draggable scrolling handle.
::-webkit-scrollbar-track the track (progress bar) of the scrollbar.
::-webkit-scrollbar-track-piece the track (progress bar) NOT covered by the handle.
::-webkit-scrollbar-corner the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.
::-webkit-resizer the draggable resizing handle that appears at the bottom corner of some elements.
```

**OBS**

+ Se houver algum elemento com `width` maior do que a tela, vai aparecer uma scrollbar em baixo. Procure esse elemento e corrija-o

Exemplos

**Tuno**

```
::-webkit-scrollbar {
    width: 8px;
    height: 8px
}

::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: #2500f9;
}
```



## traço ou barro embaixo dos textos

### anno: feito com hr

css

```
hr{border:0;height: 10px;width:100%;margin:20px auto;border-radius: 100px;-webkit-border-radius: 100px;-moz-border-radius: 100px;-ms-border-radius: 100px;}
hr.left-line{margin:20px 0 20px 0;width:80px;}
hr.center_line{width:80px;}
```

html

```
<hr class="left-line default-bg">
```

## Instalar WOW JS

https://medium.com/code-prestige/anima%C3%A7%C3%B5es-com-wow-js-e-animate-css-5019ff0a97b9

1. Adicionar `animate.css` : https://animate.style/

   + Vai vir o arquivo minificado css. É nele que tem as classes como `slideInLeft` usada em `Entox`

2. Adicionar `wow.js`

3. Chamar num arquivo JS após o script do `wow.js`

4. Iniciar WOW

   ```
   
   ```

5. Usar em divs

   ```
   <div class="col-xl-6 col-lg-6 wow slideInLeft" data-wow-duration="1500ms">
       <div class="about-one__img">
   	    <img src="assets/images/resources/about-one-img-1.jpg" alt="">
       </div>
   </div>
   ```

   Usando `wow stilo` e se precisar  `data-wow-duration` ou outras propriedades do wow



## WOW JS: Animações

Leia isso primeiro: https://css-tricks.com/snippets/css/keyframe-animation-syntax/



### Entox

Nesse caso foram usdo duas classes `@-webkit-keyframes slideInLeft` e `@keyframes slideInLeft`. Isso acontece porque o `webkit` serve para rodar no Safari (iphone), perecba que o código é o mesmo

js

```js
if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

```

html

```html
<div class="col-xl-6 col-lg-6 wow slideInLeft" data-wow-duration="1500ms">
    <div class="about-one__img">
        <img src="assets/images/resources/about-one-img-1.jpg" alt="">
    </div>
</div>
```

css

```css
/* animaçao par ao opera */
@-webkit-keyframes slideInLeft {
    0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }

    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

/* animaçâo comun */
@keyframes slideInLeft {
    0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }

    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

/* Seleciona as animaçôes definidas anteriormente */
.slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
}
```

OUTRO CASO

Você pode usar `data-wow-delay` para que a animação seja como um domino (levanta o 1 a esquerda, depois o 2, depois o terceiro ... )

```html
<ul class="list-unstyled premium-ride-box">
    <li class="premium-ride__single wow fadeInUp" data-wow-delay="100ms">
        <div class="premium-ride__img">
        	<img src="assets/images/resources/premium-ride-img-1.png" alt="">
        </div>
        <h3 class="premium-ride__title">Business <br>Rentals</h3>
        <p class="premium-ride__text">Trillion the carbon in our apple pies circumnavigated
        galaxies across the centuries.</p>
    </li>
    <li class="premium-ride__single wow fadeInUp" data-wow-delay="200ms">
        <div class="premium-ride__img">
        <img src="assets/images/resources/premium-ride-img-2.png" alt="">
        </div>
        <h3 class="premium-ride__title">Luxury <br>Rentals</h3>
        <p class="premium-ride__text">Trillion the carbon in our apple pies circumnavigated
        galaxies across the centuries.</p>
    </li>
    <li class="premium-ride__single wow fadeInUp" data-wow-delay="300ms">
        <div class="premium-ride__img">
        <img src="assets/images/resources/premium-ride-img-3.png" alt="">
        </div>
        <h3 class="premium-ride__title">Traveling <br>Rentals</h3>
        <p class="premium-ride__text">Trillion the carbon in our apple pies circumnavigated
        galaxies across the centuries.</p>
    </li>
</ul>
```

## Exmeplo de SEO

Site https://varconstrucoes.com.br/index

```html
<!-- SEO -->
<meta name="description" content="Prestadora de serviços voltados para a construção civil indústria e comércio.">
<meta name="author" content="WebsiteGO | Criação de sites">
<meta name="keywords" content="Prestadora de serviços voltados para a construção civil indústria e comércio."/>

<link rel="shortcut icon" href="imagens/favicon.png" />
      
<link rel="alternate" href="" hreflang="pt-br" />
<meta name="robots" content="index, follow"> 
		
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta property="og:url"             content="https://varconstrucoes.com.br/" /> 
<meta property="og:title"           content="VAR Construções e Reformas" /> 
<meta property="og:image"           content="https://varconstrucoes.com.br/imagens/miniatura-2.png" /> 
<meta property="og:description"     content="Prestadora de serviços voltados para a construção civil indústria e comércio." />
<meta name="theme-color" content="#fdbe00">

<meta property="business:contact_data:country_name" content="Brasil" />
<meta property="business:contact_data:website" content="https://varconstrucoes.com.br/" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="Prestadora de serviços voltados para a construção civil indústria e comércio."/>
<meta name="twitter:title" content="VAR Construções e Reformas" />
<meta name="twitter:image" content="https://varconstrucoes.com.br/imagens/miniatura-2.png" />

<meta name="geo.region" content="BR" />
<meta name="description" content="Prestadora de serviços voltados para a construção civil indústria e comércio." />
<link rel="canonical" href="https://varconstrucoes.com.br/" />
 
<meta property="og:type"            content="website" />
<meta property="og:locale"          content="pt_BR" />
<meta name="format-detection" content="telephone=no">
```

site2: https://globalelevadores.com

```html
<meta name="theme-color" content="#235aa7">
    <meta property="og:type"            content="article" /> 
    <meta property="og:url"             content="http://www.globalelevadores.com/" /> 
    <meta property="og:title"           content="Home - Global Elevadores" /> 
    <meta property="og:image"           content="http://globalelevadores.com/logo.png" /> 
    <meta property="og:description"    content="Serviços de Manutenção e Modernização" />

    <meta name="description" content="Serviços de Manutenção e Modernização">
	<meta name="author" content="Global Elevadores">
	<meta name="keywords" content="Manutenções mensais para garantir o funcionamento seguro e ininterrupto dos seus elevadores. A performance é constantemente monitorada, permitindo aos técnicos prevenir possíveis problemas e paralisações não programadas. Com foco em segurança, tecnologia e facilidades, a Equipe da Global Elevadores presta diversos serviços de Reparos que vão desde revitalizações de cabinas e casa de máquinas até troca de acessórios e peças do elevador, faça um orçamento!"/>
      
	<link rel="alternate" href="" hreflang="pt-br" />
	<meta name="robots" content="index, follow"> 
```

## Ideia de Design

Deixar a última palavra da cor principal do site

exemplo: https://fullit.github.io/#4section
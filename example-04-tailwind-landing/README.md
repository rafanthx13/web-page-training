# Bookmak Landing Page - TailWindCSS

Criado em: 21/06/2021

[Youtube Link - John Komarnicki](https://youtu.be/00gyCtIQp8E)

OBS: Tem problema ao fazer o `@apply` mas nao vou perder meu tempo indo atrás disso.  O problema era no script npm, que deveria ter a flag -i na entrada

## O que é TailWind

É um Framework CSS de baixo nível do que seus concorrentes. Nele não há componentes como na maioria dos CSS UI Kit.

## Extensões do VS Code Usadas

+ Bracket Pair Colorizer
+ HTML CSS Suport
+ Live Server
+ Pretier - Code formater

## Diretivas TailWind

`@apply`

+ Permite sobrescrever uma classe do Tailwind usando a mesma sintaxe Tailwind

exemplo

````css
/* Input */
.btn {
  @apply py-2 p-4;
}

/* Output */
.btn {
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
````

## Instalação do TailWind por npm

É a melhor forma, pois permite fazer mais coisa do que por CDN.

Para isso, faremos por npm:

**OBS: MESMO QUE USEMOS NPM não quer dizer que estamos usando um webpack com Vue/Angular/React. Ele será usado para gerar o nosso arquivo ESTÁTICO de CSS**

**Comandos**

+ `npm init -y`: Criar o `package.json` default

+ `npm install tailwindcss`: Instalar TailWind

+ Crie o arquivo `style.css` e colocamos em `src/style.css`

````css
// Importando TailWind
@tailwind base;
@tailwind components;
@tailwind utilities;
````
+ Comando npm para executar tailwind e gerar css estático

  + ```json
    "scripts": {
        "build:tailwinds": "tailwind build -i src/style.css -o public/style.css"
    }
    ```

  + Assim, ao fazer o `npm run build:tailwinds` agente gerar do arquivo `src/style.css` gera no `public/style.css`, um grande css com todas as classes do Tailwind

+  O arquivo `src/style.css` terá  a inicialização do Tailwind. Assim, se quisermos mudar algo globalmente, podemos mudar nele e assim gerar um novo css mais personalizado.

## Customizar TailWind

``npx tailwindcss init``

vai gerar o arquivo de configuração do Tailwind. Ele vem vazio. assim

````js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
````

para 

````js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
	// Modificando a classe Container
	container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
	// Extendendo as cores: vai criar novas cores com o mesmo padrão TailWind
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
	// Especificando qual fonte usar
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
````

## Criando botão personalizado

Ficar em `src/style.css`, enquanto que `src/public/style.css` fica o arquivo buildado.

assim o de `src/style.css` vai ficar

````css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");

// Classes TailWind Customizadas
.btn {
  @apply shadow-md py-3 px-6 rounded-md transition duration-300;
}

.btn-purple {
  @apply bg-bookmark-purple text-white;
}

.btn-white {
  @apply bg-bookmark-white;
}
````

Usaremos os botões da seguinte forma:

````html
<div class="flex justify-center flex-wrap gap-6">
<button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black">
	Get it on Chrome
</button>
<button type="button" class="btn btn-white hover:bg-bookmark-purple hover:text-white">
	Get it on Firefox
</button>
````

Para adicionar hover, basta  por `'hover:bg...'` na classe

## TailWind mm ação Design

### Exemplo 1

````html
<nav class="container flex items-start py-4 mt-4 sm:mt-12">
	<h1 class="text-bookmark-purple">testing</h1>
</nav>
````

``mt-4 sm:mt-12``: significa que
+ Sendo SM: 640px
  + Se maior: usa `mt-12`
  + Se menor: usa `mt-4`
  + Ou seja, se a tela for muito grande, a margem será maior, se a tela for menor, a margem será menor

### Exemplo 2

````html
<!-- Hero -->
<section class="relative">
	<div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
````
Mudamos o `flex` de coluna para linha, pois assim:
+ Quando for tela de celular, será como num celular (um em cima do outro)
+ Quando for em tela grande: vai ficar um do lado do outro

### Exemplo 3 Grid

Usamos grid ao invés de `flex`, quando queremos limitar as coisas

usamos no download para os cards.

````html
<!-- Cards -->
      <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        <!-- Card 1 -->
        <div class="flex flex-col rounded-md shadow-md lg:mb-16">
````
Estamos dizendo: se for a medida que cresce (default, sm, lg) eu aumento as colunas (1,2,3) assim, se for num celular, será ume cima do outro, e se for meio grande, haverá 2 juntos e 1 embaixo. E se a tela for bem grande, será os 3 um do lado d outro
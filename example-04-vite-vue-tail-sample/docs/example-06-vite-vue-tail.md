# Example 6 - TailWind + Vu3 + Vite

[Youtube - Getting started with Vue 3 + Vite in 2021 (feat. Tailwind CSS, Vue Router, Vuex, ESLint & Prettier)](https://www.youtube.com/watch?v=O8epzPrsADI&ab_channel=AhmedHashim)

## Execute project

`npm i`

`npm run dev`



# Exemplo 6

## VS CODE

### Grande Dica: Emmet Wrap

https://www.youtube.com/watch?v=G_MkYTrRRQ4&ab_channel=Code2020

Emmet Wrap Abreviation

Podemos por uma `div` cobrindo um elemento já existente

````html
hello world
````

1. Você cobre todo o conteúdo com o cursor
2. Digita `CTRL+SHIF+P` : Command Pallet
3. Busque por `Emmet Wrap`
4. Digite na sintaxe emmet, algo como `div.abc`
5. Vai ficar como abaixo


````html
<div class="abc">helloworld</div>
````


## Instalar Vite com Template Vue3

```
npm init @vitejs/app example-06-vite-vue-tail -- --template vue
```

Comandos

````json
"scripts": {
    "dev": "vite", // npm run sev : sove o projeto
    "build": "vite build",
    "serve": "vite preview"
  },
````

## Instalando TailWind

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Criando o arquivo de configuração tailwind

```
npx tailwindcss init -p
```

## Instalar o Restante

ESLINT e PRETTIER

```
npm install --save-dev eslint prettier eslint-plugin-vue eslint-config-prettier
```

Install Vue Router

```
npm install vue-router@4
```

Install Vuex

```
npm install vuex@next --save
```

## PRETTIER EESLINT confgfiles
ESLINT
````js
module.exports = {
extends: [
  'plugin:vue/vue3-essential',
  'prettier',
],
rules: {
  // override/add rules settings here, such as:
  'vue/no-unused-vars': 'error',
},
}
````
PRETIER
````js
module.exports = {
    semi: false,
    tabWidth: 4,
    useTabs: false,
    printWidth: 80,
    endOfLine: 'auto',
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
  }
````
# example-07-tailwind-vite-landing

```
$ npm init @vitejs/app
```

escolhe vannila

```
$ npm install tailwindcss@latest postcss@latest autoprefixer@latest --save-dev
```

```
$ npx tailwindcss init -p
```

## Rodar Orojeto

`npm run dev`

## Projeto

+ Apagar conteudo de ``main.js`
+ No HTML apontar para style.css
  - `<link rel="stylesheet" href="./style.css">`
+ Importamos Alphine por CDN e o usamos para abrir e fechar o Menu/DropDown

### TailWind Purge

````js
purge: [
	"./index.html"
]
````

antes

````
dist/assets/favicon.17e50649.svg   1.49kb
dist/index.html                    6.99kb
dist/assets/index.2a68d598.css     3161.16kb / brotli: skipped (large chunk)
````

depois

````
dist/assets/favicon.17e50649.svg   1.49kb
dist/index.html                    6.99kb
dist/assets/index.ddbba54d.js      0.00kb / brotli: 0.00kb
dist/assets/index.71c3218a.css     11.49kb / brotli: 2.71kb
````

## Build

npm run build

Vai gera a pasta dist

## Netlify

New Site > Github >

Em "Basic build setting" usamos

npm run build

Em "Public Directory"

dist




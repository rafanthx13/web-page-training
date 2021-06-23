# Example 10

````
  Successfully created project example10-workstation-nuxt

  To get started:

        cd example10-workstation-nuxt
        npm run dev

  To build & start for production:   

        cd example10-workstation-nuxt
        npm run build
        npm run start
````
````
`$ npx create-nuxt-app example10-workstation-nuxt

create-nuxt-app v3.6.0
✨  Generating Nuxt.js project in example10-workstation-nuxt
? Project name: example10-workstation-nuxt
? Programming language: JavaScript 
? Package manager: Npm
? UI framework: Tailwind CSS
? Nuxt.js modules: Axios - Promise based HTTP client? Linting tools: ESLint, Prettier    ? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: None? Version control system: Git
````

## Instalar Tailwind

É necessa´rio criar o arquivo do CSS

assets/css/tailwind.css

Se vocÊ quizer mudar o local/nome do arquivo, será necessário configurar o seu local par alocalizalo. Mas por default ele busca esse arquivo pelo tailwind

## O que foi usado

@apply, botoes com hover e focus

## Intalar CSSs

Em nuxt.conig.js

## Isntalar imagens

Elas ficam na pasta /static

toda chamada de nome já supe que estja la, asism basta /nome.png no src de img

## Acessar pasta com `~`

ao invez de sair e entra em pastas, podemos usa '~' para começar a partir da raiz. 

Dessa forma, se houver torca de pasa, vai dar menso erros

'~/assets/challenges/data'

## Adicionando fontes

em nuxt.config.js

````js
link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap' },
		],
````

## Magica

Eu tenho um arquvio svg cahmado `logo.svg`.

Se eu por ele como `logo-brand.svg`. **VAI PINTAR MEU SVG COM ESSA COR DO TAILWIND**

`<img class="h-10" src="/logo-brand.svg" alt="Workcation" />`

## Ver tamanho do build

em nuxt.congi.js . OBS: só funciona quando fizer  `npm run build`

build: {
    analyze: true,
}


## Antes do Tailwin

````
Hash: 134dfa8dab0fbec976d0
Version: webpack 4.46.0
Time: 27322ms
Built at: 23/06/2021 15:08:52
                                 Asset       Size  Chunks                         Chunk Names
        ../server/client.manifest.json   9.65 KiB          [emitted]
                              LICENSES  407 bytes          [emitted]
                        app.63297c8.js   81.1 KiB       0  [emitted] [immutable]  app
                commons/app.da67264.js    208 KiB       1  [emitted] [immutable]  commons/app
components/destination-card.d373205.js   1.07 KiB       2  [emitted] [immutable]  components/destination-card
            components/logo.ffab5dc.js   1.51 KiB       3  [emitted] [immutable]  components/logo
                pages/apage.e439d2c.js   5.04 KiB    4, 2  [emitted] [immutable]  pages/apage
                pages/index.7f83e2b.js   3.71 KiB    5, 3  [emitted] [immutable]  pages/index
                    runtime.96e9400.js   2.42 KiB       6  [emitted] [immutable]  runtime
 + 2 hidden assets
Entrypoint app = runtime.96e9400.js commons/app.da67264.js app.63297c8.js

Hash: 0f230711d2fd2acfa095
Version: webpack 4.46.0
Time: 7909ms
Built at: 23/06/2021 15:09:02
                         Asset       Size  Chunks             Chunk Names
components/destination-card.js   2.94 KiB       1  [emitted]  components/destination-card
            components/logo.js   5.77 KiB       2  [emitted]  components/logo
                pages/apage.js   8.78 KiB    3, 1  [emitted]  pages/apage
                pages/index.js   12.6 KiB    4, 2  [emitted]  pages/index
                     server.js    110 KiB       0  [emitted]  app
          server.manifest.json  539 bytes          [emitted]
 + 5 hidden assets
Entrypoint app = server.js server.js.map
````

No web-pack-analys: Stat Size: 20.77Kb

VocÊ consegue executar o que gerou do build com `npm run start`

````
Hash: 134dfa8dab0fbec976d0
Version: webpack 4.46.0
Time: 28976ms
Built at: 23/06/2021 15:16:55
                                 Asset       Size  Chunks                         Chunk Names
        ../server/client.manifest.json   9.65 KiB          [emitted]
                              LICENSES  407 bytes          [emitted]
                        app.63297c8.js   81.1 KiB       0  [emitted] [immutable]  app
                commons/app.da67264.js    208 KiB       1  [emitted] [immutable]  commons/app
components/destination-card.d373205.js   1.07 KiB       2  [emitted] [immutable]  components/destination-card
            components/logo.ffab5dc.js   1.51 KiB       3  [emitted] [immutable]  components/logo
                pages/apage.e439d2c.js   5.04 KiB    4, 2  [emitted] [immutable]  pages/apage
                pages/index.7f83e2b.js   3.71 KiB    5, 3  [emitted] [immutable]  pages/index
                    runtime.96e9400.js   2.42 KiB       6  [emitted] [immutable]  runtime
 + 2 hidden assets
Entrypoint app = runtime.96e9400.js commons/app.da67264.js app.63297c8.js

Hash: 0f230711d2fd2acfa095
Version: webpack 4.46.0
Time: 7154ms
Built at: 23/06/2021 15:17:08
                         Asset       Size  Chunks             Chunk Names
components/destination-card.js   2.94 KiB       1  [emitted]  components/destination-card
            components/logo.js   5.77 KiB       2  [emitted]  components/logo
                pages/apage.js   8.78 KiB    3, 1  [emitted]  pages/apage
                pages/index.js   12.6 KiB    4, 2  [emitted]  pages/index
                     server.js    110 KiB       0  [emitted]  app
          server.manifest.json  539 bytes          [emitted]
 + 5 hidden assets
Entrypoint app = server.js server.js.map
````

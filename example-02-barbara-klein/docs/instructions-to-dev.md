# Dev Work Flow

`git init`

`npm init -y`

`create .gitignore`

`npm i -D git-commit-msg-linter`

```
$ npm install tailwindcss@latest postcss@latest autoprefixer@latest --save-dev
```

```
$ npx tailwindcss init -p
```

```
module.exports = {
  purge:{
    enabled: true,
    content: [
      './src/**/*.html',
      './index.html',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

```

Comando do package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:tailwind": "npx tailwindcss build -i ./src/css/tailwind.css -o ./dist/tailwind.css --minify NODE_ENV=production"
  },
```











## REMEMBER

+ Corrigir package.json





## Git Commit: `git-commit-msg-linter`

```
$ npm i -D git-commit-msg-linter
```

+ Vai garantir que meus commits vão respeitar a diretriz do **conventional commits**
+ para evitar commits fora do padrão...s

### Padrão

```
correct format: <type>[scope]: <subject>
  example: docs: update README to add developer tips

  type:
    feat     A new feature.
    fix      A bug fix.
    docs     Documentation only changes.
    style    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
    refactor A code change that neither fixes a bug nor adds a feature.
    test     Adding missing tests or correcting existing ones.
    chore    Changes to the build process or auxiliary tools and libraries such as documentation generation.
    perf     A code change that improves performance.
    ci       Changes to your CI configuration files and scripts.
    build    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
    temp     Temporary commit that won't be included in your CHANGELOG.

  scope:
    Optional, can be anything specifying the scope of the commit change.
    For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc.
    In App Development, scope can be a page, a module or a component.

  subject:
    Brief summary of the change in present tense. Not capitalized. No period at the end.

```

**pADRONIZAÇÂO DOS cOMMITS**

- Corpo do commit : **tipo[ escopo ( opcional ) ]: descrição**
- Letras minúsculas no início da descrição

Tipos dos commits:

- Fix : Usado quando o commit for feito para corrigir um problema no código
- Feat: Usado quando tem um novo recurso no código
- Build: Quando foi executado o build da nossa aplicação
- Chore: Quando foi adicionada uma nova dependência ou configuração
- Refactor: Quando for executada uma refatoração no código
- Docs: Usado quando ouver uma mudança na documentação do projeto
- Test: Quando foir executado um teste na aplicação

**OUTRA OPÇÂ**: https://douglasporto.com.br/blog/automatizando-seus-commits/



## Botão de Scroll Up

SÓ APARECE QUANDO ESTÁ BAIXO

css.

```css
*<!-- BOTAO --> */
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



.html

```html
<button id="scrollTopBtn"> <img src="./imgs/angle-double-up.svg" alt="" class="btn-scroll-up"/> </button>
```



.js

```js
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


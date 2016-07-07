# WP API Sample Application [![license](https://img.shields.io/github/license/wckansai2016/node-wp-api.svg)](https://github.com/wckansai2016/node-wp-api/blob/master/LICENSE)

## Usage

1. Clone or download this repository

    ```bash
    $ git clone https://github.com/chatbox-inc/vue-wp-api
    ```

    or

    [![Download](https://img.shields.io/badge/Download-v1.0.0-brightgreen.svg)](https://github.com/chatbox-inc/vue-wp-api/archive/master.zip)

2. Install the dependencies

    ```bash
    $ npm install
    ```

3. Start to develop

    ```bash
    $ npm start
    ```

    See more commands:

    ```bash
    $ npm run
    ```
    
## Vue.js

Vue.js も　他のフレームワーク同様コンポーネントを使ったコーディングが可能です。

### コンポーネントのコード

`frontend/assets/js/components/wp-article/index.js`

````
"use strict"

const Vue = require("vue")

const Component = Vue.extend({
    template: require("./template.html"),
    props:["article"],
    data: ()=> { return {} }
})

module.exports = Component
````

### コンポーネントの登録

`frontend/assets/js/common.js`

````
Vue.component("wp-article",require("./components/wp-article/"))
````

### データとコンポーネントのひも付け

`public/pages/list/template.html`

````
<wp-article v-for="article in articles" :article="article"></wp-article>
````

### ルーティング・画面の切り替え

Vue.js では、デフォルトではルーティングが含まれていません。

代わりに画面切り替えのためのシンプルな構造をベースに、好きなルーティングライブラリを使用する事が可能です。

````
  <div :is="page"></div>
````

`is` ディレクティブによりDOMとコンポーネントを結びつけることで、
ルーティングによる画面遷移は`page`変数の変更により実現できるようになっています。

### vue2.0 について

現在開発中のversion2.0 のリリースは 1.0と高い互換性を持った形で開発が進んでいます。

https://github.com/vuejs/vue/tree/next

gulpfile.js内の resolve.alias の項目をコメントインすることでvue2.0版のコードを試すことが出来ます。
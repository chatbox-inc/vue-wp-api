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

`public/index.html`

````
<wp-article v-for="article in articles" :article="article"></wp-article>
````

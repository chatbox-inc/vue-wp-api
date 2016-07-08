const Vue = require('vue')
const loader = require("../frontend/assets/js/service/loader.js")

Vue.component("wp-article",require("../frontend/assets/js/components/wp-article/"))

const app = new Vue(require("../frontend/assets/js/pages/list"))
app.ssrInit = ()=>{
    return new Promise(resolve => {
        loader().then((articles) => {
            app.articles = articles
            resolve()
        })
    })
}

export default (context) => {
    return app.ssrInit().then( ()=>{
        return app;
    } )
}

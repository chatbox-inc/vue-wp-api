"use strict"

const Vue = require("vue")

console.log(Vue.version)

Vue.component("wp-article",require("./components/wp-article/"))

$(()=>{
    var app = new Vue({
        el: "#app",
        data: {
            page: require("./pages/list/")
        }
    })
})

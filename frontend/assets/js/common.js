"use strict"

const Vue = require("vue")

console.log(Vue.version)

Vue.component("wp-article",Vue.extend(require("./components/wp-article/")))

var page = Vue.extend(require("./pages/list/"));

document.addEventListener("DOMContentLoaded", (event) => {
    new Vue({
        el: "#app",
        data: {page}
    })
})
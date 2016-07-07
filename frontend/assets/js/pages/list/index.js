"use strict"

const Vue = require("vue")
const loader = require("../../service/loader.js")

let data = {
    articles: []
}

const Component = Vue.extend({
    template: require("./template.html"),
    data: ()=> {
        return data
    },
    created:()=>{
        loader().then((articles)=>{
            data.articles = articles
        })
    }
})

module.exports = Component


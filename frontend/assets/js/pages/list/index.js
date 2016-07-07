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
    components:{
        "wp-article": require("../../components/wp-article/")
    },
    created:()=>{
        loader().then((articles)=>{
            data.articles = articles
        })
    }
})

module.exports = Component


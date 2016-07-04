"use strict"

const Vue = require("vue")

console.log(Vue.version)

const loader = require("./loader.js")
const {api,loadingDuration} = require("./setting.js")

var data = {
    articles:[],
    page:null,
    loading: true,
    hasMore:true
}

const opt = {
    el:"#app",
    data,
    methods: {
        more: ()=>{
            data.loading = true
            data.page ++

            // 画面スクロール
            $("html,body").animate({
                scrollTop: $(".spinnerBox").eq(0).offset().top
            },"fast")

            // API呼び出し
            loader(api,data.page,loadingDuration).then((articles)=>{
                if(articles.length){
                    data.articles = data.articles.concat(articles)
                }else{
                    data.hasMore = false
                }
                data.loading = false
            })
        }
    },
    created:(vm)=>{
        loader(api,1,loadingDuration).then((articles)=>{
            data.articles = articles
            data.page = 1
            data.loading = false
        })
    }
}

Vue.component("wp-article",require("./components/wp-article/"))
Vue.component("wp-header",require("./components/wp-header/"))

$(()=>{
    new Vue(opt)
})
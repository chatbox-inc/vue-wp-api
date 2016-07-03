"use strict"

const Vue = require("vue")

const loader = require("./loader.js")
const {api,loadingDuration} = require("./setting.js")

var vue;

const opt = {
    el:"#app",
    data: {articles:[],page:null,hasMore:true},
    methods: {
        more: ()=>{
            let loadingPage = vue.page + 1;
            vue.page = null;//ページがnullの時はローディング表示
            $("html,body").animate({
                scrollTop: $(".spinnerBox").eq(0).offset().top
            },"fast");
            loader(api,loadingPage,loadingDuration).then((articles)=>{
                if(articles.length){
                    vue.articles = vue.articles.concat(articles);
                }else{
                    vue.hasMore = false;
                }
                vue.page = loadingPage;
            })
        }
    },
    created:(vm)=>{
        loader(api,1,loadingDuration).then((articles)=>{
            vue.articles = articles;
            vue.page = 1;
        })
    }
}

Vue.component("wp-article",require("./components/wp-article/"))
Vue.component("wp-header",require("./components/wp-header/"))

$(()=>{
    vue = new Vue(opt)
})
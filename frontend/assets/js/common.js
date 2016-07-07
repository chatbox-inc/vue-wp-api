"use strict"

const Vue = require("vue")
const VueRouter = require("vue-router")

Vue.use(VueRouter)

console.log(Vue.version)

$(()=>{
    require("./pages/").start({},"#app")
})

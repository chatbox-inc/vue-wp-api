"use strict"

const Vue = require("vue")

const Component = Vue.extend({
    template: require("./template.html"),
    props:[],
    data: ()=> { return {} }
})

module.exports = Component

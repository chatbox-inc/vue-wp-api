"use strict"

const Vue = require("vue")

const Component = {
    template: require("./template.html"),
    props:["article"],
    data: ()=> { return {} }
}

module.exports = Component

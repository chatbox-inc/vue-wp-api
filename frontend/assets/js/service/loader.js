"use strict"

var agent = require("superagent")

const request = (api,page)=> new Promise((resolve) => {
    agent.get(api).query({
        page,
        per_page:10
    }).end((e,res) => {
        if(e){
            throw e;
        }
        resolve(res.body)
    })
})

const loading = (minWait)=> new Promise((resolve) => {
    setTimeout(()=>{
        resolve(null)
    },minWait)
})

module.exports = (api=null,page=1,minWait=0) => new Promise((resolve)=>{
    api =  api || "http://api.wp-app.org/wp-json/wp/v2/posts";
    Promise.all([
        request(api,page),
        loading(minWait)
    ]).then(([data,dummy])=>{
        resolve(data)
    })
})

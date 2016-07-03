"use strict"

const request = (api,page)=> new Promise((resolve) => {
    const xhr = $.get(api,{
        page,
        per_page:10
    })
    xhr.success((data)=>{
        resolve(data)
    });
    xhr.fail(()=>{
        throw new Error()
    });
})

const loading = (minWait)=> new Promise((resolve) => {
    setTimeout(()=>{
        resolve(null)
    },minWait)
})

module.exports = (api,page=1,minWait=0) => new Promise((resolve)=>{
    Promise.all([
        request(api,page),
        loading(minWait)
    ]).then(([data,dummy])=>{
        resolve(data)
    })
})

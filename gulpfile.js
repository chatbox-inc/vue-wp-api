"use strict"
const gulp = require("gulp")
const webpack = require("gulp-webpack")
const browserSync = require("browser-sync");
const jade = require("gulp-jade");

const webpackConfig = {
    "entry": {
        "common": "./frontend/assets/js/common.js"
    },
    "output": {
        "filename": `[name].bundle.js`
    },
    externals: {},
    module: {
        loaders: [
            { test: /\.js/,exclude: /node_modules/, loader: "babel" ,query:{presets:"es2015"}},
            { test: /\.html/, loader: "html" }
        ]
    },
    resolve: {
        extensions:["",".js"],
        alias:{
            //"vue": process.cwd()+"/frontend/assets/js/libs/vue2.min.js"
            "vue": process.cwd()+"/frontend/assets/js/libs/vue.min.js"
        }
    },
    plugins:[],
    dev: true,
    devtool: "source-map"
}


gulp.task("webpack",() => {
    gulp.src([`frontend/assets/js/**/*.js`])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(`public/assets/js/`))
})

gulp.task("watch:webpack",() => gulp.watch([
    "frontend/assets/js/**/*",
],["webpack"]) )

//gulp.task("jade",() => {
//    gulp.src([`frontend/assets/tmpl/**/*.jade`])
//        .pipe(jade({
//            locals: {},
//            pretty:true
//        }))
//        .pipe(gulp.dest(`public/`))
//
//})
//
//gulp.task("watch:jade",() => gulp.watch([
//    "frontend/assets/tmpl/**/*",
//],["jade"]) )



const browserSyncConfig = {
    server:{
        baseDir:"public"
    },
    open: "external",
    //notify: false
}

gulp.task("server",() => {

    browserSync(browserSyncConfig)

    gulp.watch("public/**/*", () => {
        setTimeout(function(){
            browserSync.reload();
        },500)
    })
})

gulp.task("watch",[
    "watch:webpack",
    //"watch:jade",
])

gulp.task("build",[
    "webpack",
    //"jade"
])

gulp.task("default",["watch","server"])


"use strict"
const gulp = require("gulp")
const webpack = require("gulp-webpack")
const browserSync = require("browser-sync");

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

gulp.task("webpack:server",() => {
    const serverConfig = Object.assign({},webpackConfig,{
        target: 'node',
        entry: './server/server-entry.js',
        output: {
            filename: 'server-bundle.js',
            libraryTarget: 'commonjs2'
        },
        externals:{
            "superagent":"superagent"
        }
    });

    gulp.src([`frontend/assets/js/**/*.js`])
        .pipe(webpack(serverConfig))
        .pipe(gulp.dest(`server/`))
})

gulp.task("watch:webpack",() => gulp.watch([
    "frontend/assets/js/**/*",
],["webpack"]) )

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
])

gulp.task("build",[
    "webpack",
])

gulp.task("default",["watch","server"])


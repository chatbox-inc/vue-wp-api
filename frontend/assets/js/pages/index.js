var VueRouter = require('vue-router')

var router = new VueRouter()

router.map({
    '/': {
        component: require("./list/")
    },
})

module.exports = router;

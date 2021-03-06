const path = require("path");
const router = require("express").Router();
const userAPIRoutes = require("./api");
const apiRoutes = require("./apiRoutes");
const bookmarkRoutes = require("./bookmarkRoutes");

// YELP routes
router.use("/", apiRoutes);
router.use("/api", userAPIRoutes);
router.use("/bookmarksApi", bookmarkRoutes)

// router.get('/', (req, res, next) => {
//     console.log('===== user!!======')
//     console.log(req.user)
//     if (req.user) {
//         res.json({ user: req.user })
//     } else {
//         res.json({ user: null })
//     }
// })

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})
module.exports = router;

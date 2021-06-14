const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World- sahil");
});

module.exports = router;
//export default router;
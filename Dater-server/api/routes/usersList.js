const express = require("express");
const router = express.Router();
require("dotenv").config();
const connection = require("../modules/dbconfig.js");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM dater", (err, result) => {
    if (err) throw err;
    return res.send(result);
  });
});

router.post("/", (req, res) => {
  connection.query(
    `INSERT INTO dater VALUES (default, '${req.body.firstName}',
      '${req.body.lastName}', '${req.body.userName}', '${req.body.tasks}', 
      '${req.body.level}')`,
    err => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

module.exports = router;

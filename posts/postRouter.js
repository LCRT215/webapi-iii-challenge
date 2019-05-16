const express = "express";

const router = express.Router();
const postDb = require("./postDb.js");

router.get("/", async (req, res) => {
  try {
    const post = await postDb.get();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong"
    });
  }
});

router.get("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

// custom middleware

function validatePostId(req, res, next) {}

module.exports = router;

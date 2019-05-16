const express = "express";

const router = express.Router();

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  debug.update (id, changes)
  .then(updated) => {
      if (updated){
          res.status(200).json({success:true,
        hub})
      }
  }
});

// custom middleware

function validatePostId(req, res, next) {}

module.exports = router;

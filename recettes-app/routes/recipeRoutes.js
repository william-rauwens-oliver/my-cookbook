const express = require("express");
const router = express.Router();

// Exemple de route pour récupérer des recettes
router.get("/", (req, res) => {
    res.json({ message: "Liste des recettes" });
});

module.exports = router;
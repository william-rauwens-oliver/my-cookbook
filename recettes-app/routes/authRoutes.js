const express = require("express");
const router = express.Router();

// Exemple de route pour l'inscription
router.post("/register", (req, res) => {
    res.json({ message: "Inscription réussie !" });
});

module.exports = router;
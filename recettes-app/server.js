require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connexion à la base de données
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Vérification des routes importées
try {
    const authRoutes = require("./routes/authRoutes");
    const recipeRoutes = require("./routes/recipeRoutes");

    // Routes
    app.use("/api/auth", authRoutes);
    app.use("/api/recipes", recipeRoutes);
} catch (error) {
    console.error("Erreur lors du chargement des routes :", error.message);
    process.exit(1);
}

// Lancement du serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
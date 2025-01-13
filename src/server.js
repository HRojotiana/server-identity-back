const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Endpoint pour fournir la configuration Firebase
app.get('/config', (req, res) => {
  res.json({
    firebaseConfig: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN ,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: process.env.FIREBASE_STORAGEBUCKET ,
      messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
      appId: process.env.FIREBASE_APPID,
    },
  });
});

// Endpoint pour vérifier les identifiants utilisateur
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Identifiants fixes pour la démonstration
  const validEmail = 'email@example.com';
  const validPassword = 'password';

  if (email === validEmail && password === validPassword) {
    res.status(200).json({ message: 'Connexion réussie' });
  } else {
    res.status(401).json({ error: 'Identifiants invalides' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});

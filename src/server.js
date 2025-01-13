import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Utilise le port défini par la plateforme ou 3000 par défaut

// Middleware
app.use(cors());
app.use(express.json());  // Pour parser les requêtes JSON

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN ,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET ,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID
};

app.get('/config', (req, res) => {
  res.json({ firebaseConfig });
});

// Route pour gérer la connexion
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Identifiants par défaut (à remplacer par une vraie base de données plus tard)
  const defaultUser = 'email@example.com';
  const defaultPassword = 'password';

  if (email === defaultUser && password === defaultPassword) {
    res.status(200).json({ message: 'Connexion réussie' });
  } else {
    res.status(401).json({ error: 'Identifiants incorrects' });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

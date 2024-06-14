const express = require('express');
const app = express();
const utilisateurService = require('./services/utilisateurService');

app.use(express.json());

// Récupération de tous les utilisateurs
app.get('/api/utilisateurs', async (req, res) => {
    const utilisateurs = await utilisateurService.getAllUtilisateurs();
    res.json(utilisateurs);
});

// Récupération d'un utilisateur par son id
app.get('/api/utilisateurs/:id', async (req, res) => {
    const utilisateur = await utilisateurService.getUtilisateurById(req.params.id);
    if (utilisateur) {
        res.json(utilisateur);
    } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
});

// Création d'un nouvel utilisateur
app.post('/api/utilisateurs', async (req, res) => {
    const utilisateurData = req.body;
    const nouveauUtilisateur = await utilisateurService.createUtilisateur(utilisateurData);
    res.status(201).json(nouveauUtilisateur);
});

// Mise à jour d'un utilisateur
app.put('/api/utilisateurs/:id', async (req, res) => {
    const id = req.params.id;
    const utilisateurData = req.body;
    const utilisateurMisAJour = await utilisateurService.updateUtilisateur(id, utilisateurData);
    if (utilisateurMisAJour) {
        res.json(utilisateurMisAJour);
    } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
});

// Suppression d'un utilisateur
app.delete('/api/utilisateurs/:id', async (req, res) => {
    const id = req.params.id;
    const deleted = await utilisateurService.deleteUtilisateur(id);
    if (deleted) {
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
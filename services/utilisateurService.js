const Utilisateur = require('../models/utilisateur');
const UtilisateurDto = require('../dto/utilisateurDto');

async function getAllUtilisateurs() {
    const utilisateurs = await Utilisateur.findAll();
    return utilisateurs.map(utilisateur => new UtilisateurDto(utilisateur));
}

async function getUtilisateurById(id) {
    const utilisateur = await Utilisateur.findByPk(id);
    return utilisateur ? new UtilisateurDto(utilisateur) : null;
}

async function createUtilisateur(utilisateurData) {
    const utilisateur = await Utilisateur.create(utilisateurData);
    return new UtilisateurDto(utilisateur);
}

async function updateUtilisateur(id, utilisateurData) {
    const [updated] = await Utilisateur.update(utilisateurData, { where: { id } });
    if (updated) {
        const updatedUtilisateur = await Utilisateur.findByPk(id);
        return new UtilisateurDto(updatedUtilisateur);
    }
    return null;
}

async function deleteUtilisateur(id) {
    const deleted = await Utilisateur.destroy({ where: { id } });
    return deleted;
}

module.exports = {
    getAllUtilisateurs,
    getUtilisateurById,
    createUtilisateur,
    updateUtilisateur,
    deleteUtilisateur
};
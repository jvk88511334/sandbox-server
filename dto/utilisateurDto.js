class UtilisateurDto {
    constructor(utilisateur) {
        this.id = utilisateur.id;
        this.identifiant_utilisateur = utilisateur.identifiant_utilisateur;
        this.stylo_bille = utilisateur.stylo_bille;
    }
}

module.exports = UtilisateurDto;
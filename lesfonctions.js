

//PROGRAMME PRINCIPAL

let text = document.getElementById("zoneDeSaisie");
text.addEventListener("input", function(){
   
    let chaineOriginale = document.querySelector("input").value.toLowerCase();
    let remplaceaccents = Remplacer(chaineOriginale,"eéèêë")
    let remplaceaccents1 = Remplacer(remplaceaccents,"aàâä")
    let remplaceaccents2 = Remplacer(remplaceaccents1,"cç")
    let remplaceaccents3 = Remplacer(remplaceaccents2,"uûùü")
    let remplaceaccents4 = Remplacer(remplaceaccents3,"iîï")
    let remplaceaccents5 = Remplacer(remplaceaccents4,"oôö")
    let suppcar=supprimerCaracteresSpeciaux(remplaceaccents5)
    let chaineInverse = inverserChaine(suppcar);
    if (chaineInverse){
        document.getElementById("reponse").value = " c'est un palindrome"
    text.style.color = "green";
    }else{ document.getElementById("reponse").value = " ce n'est pas un palindrome"
    text.style.color="red"}
    console.log("Chaine originale: " + chaineOriginale);
    console.log("Chaine inversée: " + chaineInverse);
    
});




function inverserChaine(chaine) {
    let chaineInverse = '';
    for (let i = chaine.length - 1; i >= 0; i--) {
        chaineInverse += chaine[i];
    }
    return chaineInverse=== chaine;
    
    
}

//FONCTION QUI SUPPRIME LES CARACTèRES SPéCIAUX
function supprimerCaracteresSpeciaux(chaine) {
    let chaineSansCaracteresSpeciaux = '';

    for (let i = 0; i < chaine.length; i++) {
        let caractereCourant = chaine[i];

        // Vérifier si le caractère est une lettre, un chiffre 
        if ((caractereCourant >= 'a' && caractereCourant <= 'z') ||
            (caractereCourant >= 'A' && caractereCourant <= 'Z') ||
            (caractereCourant >= '0' && caractereCourant <= '9') )
            {
            chaineSansCaracteresSpeciaux += caractereCourant;
        }
    }

    return chaineSansCaracteresSpeciaux;
}

//FONCTION QUI REMPLACE LES LETTRES AVEC ACCENTS AVEC LES LETTRES SANS ACCENTS
function Remplacer(phrase, Caracteres) {
    if (Caracteres.length < 2) {
        // La fonction nécessite au moins deux caractères
        return phrase;
    }

    let caractereRemplacement = Caracteres[0];
    let caracteresARechercher = Caracteres.slice(1);

    function RemplacerCaractereAccentue(caractere) {
        for (let i = 0; i < caracteresARechercher.length; i++) {
            let caractereAccentue = caracteresARechercher[i];
            if (caractere === caractereAccentue) {
                return caractereRemplacement;
            }
        }
        return caractere;
    }

    let phraseRemplacee = '';
    for (let j = 0; j < phrase.length; j++) {
        let caractereCourant = phrase[j];
    let caractereRemplace = RemplacerCaractereAccentue(caractereCourant);
        phraseRemplacee += caractereRemplace;
    }

    return phraseRemplacee;
}


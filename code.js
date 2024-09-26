document.getElementById('submit').addEventListener('click', function() {
    // Récupérer les valeurs des champs
    const nbr1 = document.getElementById('nbr1').value;
    const nbr2 = document.getElementById('nbr2').value;
    const multi = nbr1*nbr2;

    // Afficher le nom complet
    document.getElementById('resultat').textContent = `la multiplication de ${nbr1} par ${nbr2} vaut : ${nbr1*nbr2}`;
});
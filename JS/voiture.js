function update_voiture(){
    var voiture= localStorage.getItem("vehicule");
    var img,nom,marque,moteur,prix;
    if(voiture=="tank"){
        img="../IMG/tank.jpg";
        nom="Le Panzer IV";
        marque="Krupp";
        moteur="12 cylindre en V de 11.88L de 310ch et 784Nm de couple";
        prix="103 462 RM pour vos envie de conquêtes";
    }
    else if(voiture=="etron"){
        img="../IMG/Etron.jpg";
        nom="La E-tron";
        marque="Audi";
        moteur="2 moteur électrique de 408ch cumulé et 664Nm de couple";
        prix="93 700€ soit beaucoup trop pour un nom pareil"
    }
    else if(voiture=="multipla"){
        img="../IMG/multipla.jpg";
        nom="Le Multipla ou 1000Tipla";
        marque="Fiat ou Vilebrequin si 1000Tipla";
        moteur="1.9JTD 4cylindres en ligne de 120ch";
        prix="20 € parce qu'elle ne vaut que ça";
    }
    else if(voiture=="ouioui"){
        img="../IMG/ouioui.png";
        nom="La grosse caisse de oui-oui";
        marque="Reliant";
        moteur="4 cylindres en ligne de 848cm3 de 40ch et 63Nm de couple";
        prix="12 000 livres Sterling ou ton âme offerte à la voiture"
    }
    else{
        img="../IMG/cybertruck.jpg";
        nom="Le cyberTruck";
        marque="Tesla";
        moteur="Tri-moteur électrique entre 250 et 300 ch avec entre 400 et 500 Nm de couple";
        prix="5 pierres pour nettoyer les vitres";
    }
    document.getElementById("voiture_img").src=img;
    document.getElementById("nom").innerText=nom;
    document.getElementById("marque").innerText=marque;
    document.getElementById("moteur").innerText=moteur;
    document.getElementById("prix").innerText=prix;
}
function update_voiture(){
    var voiture= localStorage.getItem("vehicule");
    var img,nom,marque,moteur,prix, locali;
    if(voiture=="tank"){
        img="../IMG/tank.jpg";
        nom="Le Panzer IV";
        marque="Krupp";
        moteur="12 cylindre en V de 11.88L de 310ch et 784Nm de couple";
        prix="5 000€ pour vos envie de conquêtes";
    }
    else if(voiture=="etron"){
        img="../IMG/Etron.jpg";
        nom="La E-tron";
        marque="Audi";
        moteur="2 moteur électrique de 408ch cumulé et 664Nm de couple";
        prix="254€ soit beaucoup trop pour un nom pareil"
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
        prix="5€ mais il faut garder la peluche à sa place"
    }
    else{
        img="../IMG/cybertruck.jpg";
        nom="Le cyberTruck";
        marque="Tesla";
        moteur="Tri-moteur électrique entre 250 et 300 ch avec entre 400 et 500 Nm de couple";
        prix="1000€ ";
    }
    document.getElementById("voiture_img").src=img;
    document.getElementById("nom").innerText=nom;
    document.getElementById("marque").innerText=marque;
    document.getElementById("moteur").innerText=moteur;
    document.getElementById("prix").innerText=prix;
}

function update_map(){
    var voiture= localStorage.getItem("vehicule");
    var locali;
    if(voiture=="tank"){
        locali="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310846.42018152814!2d13.144551598213061!3d52.50651326574092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Allemagne!5e0!3m2!1sfr!2sfr!4v1654509555828!5m2!1sfr!2sfr";
    }
    else if(voiture=="etron"){
        locali="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698.3676151728264!2d2.4068805648831613!3d48.61701334764109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5dfed165dcd6b%3A0xf1706bbf2e52f539!2sParking%20Mairie!5e0!3m2!1sfr!2sfr!4v1654514438649!5m2!1sfr!2sfr";

    }
    else if(voiture=="multipla"){
        locali="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4359.5429592217515!2d2.1637604181718153!3d49.8385023985357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7780388a56469%3A0xf61dede12aec7fed!2sCh%C3%A2teau%20de%20Creuse!5e0!3m2!1sfr!2sfr!4v1654514009640!5m2!1sfr!2sfr";

    }
    else if(voiture=="ouioui"){
        locali="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1588.1506692513888!2d25.845008616256337!3d66.54361438473512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x442b4e7e543e9979%3A0xd7f9b9e4341d7ed3!2sVillage%20du%20P%C3%A8re%20No%C3%ABl!5e0!3m2!1sfr!2sfr!4v1654514092603!5m2!1sfr!2sfr";

    }
    else{
        locali="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54293.09269464784!2d-102.65447716852772!3d31.734511939673695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbb2cf5e32b50d%3A0x5ea83617d16568e1!2sPenwell%2C%20Texas%2079766%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1654513760677!5m2!1sfr!2sfr";

    }
    document.getElementById("localisation").src=locali;
}

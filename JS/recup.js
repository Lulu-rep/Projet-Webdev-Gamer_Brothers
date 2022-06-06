function recup(){
    var position = document.querySelector('input[name="position"]:checked').value;
    console.log(position);
    if(position=="tank"){
        localStorage.setItem("vehicule","tank");
        console.log("tank");
    }
    else if(position=="cybertruck"){
        localStorage.setItem("vehicule","cybertruck");
        console.log("cybertruck");
    }
    else if(position=="etron"){
        localStorage.setItem("vehicule","etron");
        console.log("etron");
    }
    else if(position=="multipla"){
        localStorage.setItem("vehicule","multipla");
        console.log("multipla");
    }
    else{
        localStorage.setItem("vehicule","ouioui");
        console.log("ouioui");
    }
    document.location.href="HTML/Fiche_voiture.html";
}
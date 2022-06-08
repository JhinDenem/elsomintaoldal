let icon = document.getElementById("icon");
let logo = document.getElementById("logo");
let footerl = document.getElementById("footerlogo");
    
    
    
    
    
if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme" , "light");
}


let localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src = "/elso_minta_oldal/Images/moon.png";
    logo.src = "/elso_minta_oldal/Images/mainlogoblue2.png"; 
    footerl.src = "/elso_minta_oldal/Images/mainlogoblue3.png"; 
    document.body.classList.remove("dark-theme");
}else if(localData == "dark"){
    icon.src = "/elso_minta_oldal/Images/sun.png";
    logo.src = "/elso_minta_oldal/Images/mainlogoblue.png"; 
    footerl.src = "/Images/mainlogoblue3.png"; 
    document.body.classList.add("dark-theme");
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "/elso_minta_oldal/Images/sun.png";
        logo.src = "/elso_minta_oldal/Images/mainlogoblue.png"; 
        footerl.src = "/elso_minta_oldal/Images/mainlogoblue3.png"; 
        localStorage.setItem("theme" , "dark");
    }else{
        icon.src = "/elso_minta_oldal/Images/moon.png";
        logo.src = "/elso_minta_oldal/Images/mainlogoblue2.png"; 
        footerl.src = "/elso_minta_oldal/Images/mainlogoblue3.png"; 
        localStorage.setItem("theme" , "light");
    }
}


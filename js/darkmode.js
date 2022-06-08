let icon = document.getElementById("icon");
let logo = document.getElementById("logo");
let footerl = document.getElementById("footerlogo");
    
    
    
    
    
if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme" , "light");
}


let localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src = "/Images/moon.png";
    logo.src = "/Images/mainlogoblue2.png"; 
    footerl.src = "/Images/mainlogoblue3.png"; 
    document.body.classList.remove("dark-theme");
}else if(localData == "dark"){
    icon.src = "/Images/sun.png";
    logo.src = "/Images/mainlogoblue.png"; 
    footerl.src = "/Images/mainlogoblue3.png"; 
    document.body.classList.add("dark-theme");
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "/Images/sun.png";
        logo.src = "/Images/mainlogoblue.png"; 
        footerl.src = "/Images/mainlogoblue3.png"; 
        localStorage.setItem("theme" , "dark");
    }else{
        icon.src = "/Images/moon.png";
        logo.src = "/Images/mainlogoblue2.png"; 
        footerl.src = "/Images/mainlogoblue3.png"; 
        localStorage.setItem("theme" , "light");
    }
}


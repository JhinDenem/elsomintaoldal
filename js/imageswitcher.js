
let image = document.getElementById('image');
let images = ['/Images/wilder01.jpg', '/Images/welder001.jpg']
setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
}, 800);



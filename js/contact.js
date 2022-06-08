

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bakister95@outlook.com",
        Password : "DC3DA2BDC8BBE3C3F9AF6D23564E88FC678C",
        To : 'derek9522@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Új üzenet az oldalról!",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Üzenet: " + document.getElementById("message").value
    }).then(
      message => alert("Üzenet sikeresen elküldve!")
    );
}



























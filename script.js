window.onload = function() {
    // alert('ciao2.onload ');
}

function sendMail() {

    const userMessage = document.getElementById("userText").value;
    console.log("Sending email with message:", userMessage);

    // Logica mail



    // Nascondiamo form e mostriamo messaggio di successo
    const mailContainer = document.getElementById("messageForm");
    mailContainer.hidden = true;

    const messageThanks = document.getElementById("messageThanks");
    messageThanks.hidden = false;
}
function displayMessage() {
    var messageElement = document.getElementById("message");
    var buttonElement = document.querySelector("button");

    var yourMessage = "I love you more than words can express. You make every day special.Sorry na labyou. Reply na :(";

    messageElement.innerHTML = yourMessage;
    messageElement.style.display = "block";

    void messageElement.offsetWidth;

    messageElement.style.opacity = 1;
    buttonElement.style.display = "none";
}

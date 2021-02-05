let startButton = document.querySelector("input[type='button']")

startButton.addEventListener("click", startGame)

function startGame() {
    //ascunde butonul
     startButton.classList.add("hidden")
}
//genereaza nr aleatoriu intre 0 si max(inclusiv)
function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1))

}
//genereaza o litera aleatorie mare  intrea A - Z
function randomLetter() {
// generam un cod ascii in caracterul asociat lui
    let randomCode = 65 + randomNumber (25)
// convertim codul ascii in caractere asociat lui
    return  String.fromCharCode(randomCode)
}
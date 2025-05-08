window.addEventListener("DOMContentLoaded", changeHour())

function changeHour() {
  setInterval(() => {
    let horas = document.getElementById("horas")
    let mensagem = document.getElementById("mensagem")
    let img = document.getElementById("img")

    let date = new Date()
    horas.innerText = `Agora são ${date.getHours()} horas e ${date.getMinutes()} minutos com ${date.getSeconds()} segundos.`

    if (date.getHours() >= 6 && date.getHours() <= 12) {
      mensagem.innerHTML = ` <h2> Bom dia amigo! </h2>`
    } else if (date.getHours() >= 13 && date.getHours() <= 17) {
      mensagem.innerHTML = ` <h2> Boa tarde colega! </h2>`
    } else if (date.getHours() < 6 && date.getHours() > 0) {
      mensagem.innerHTML = ` <h2> Boa madrugada amigo! </h2>`
    } else {
      mensagem.innerHTML = ` <h2> Boa noite! </h2>`
    }
  })
}

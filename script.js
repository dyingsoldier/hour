window.addEventListener("DOMContentLoaded", changeHour())

function changeHour() {
  setInterval(() => {
    let horas = document.getElementById("horas")
    let mensagem = document.getElementById("mensagem")
    let img = document.getElementById("img")

    let date = new Date()
    let hour = date.getHours().toString()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if (hour >= 6 && hour <= 12) {
      mensagem.innerHTML = ` <h2> Bora que o dia começou </h2>`
      horas.innerText = `Agora são ${hour}h da manhã
      com ${min} minutos e 
      exatos ${sec} segundos.`
      img.src = "img/bomdia.jpg"
    } else if (hour >= 13 && hour <= 17) {
      mensagem.innerHTML = ` <h2> Tarde demorada essa </h2>`
      horas.innerText = `Agora são ${hour}h da tarde
      com ${min} minutos e 
      exatos ${sec} segundos.`
      img.src = "img/boatarde.jpg"
    } else if (hour >= 18 && hour <= 23) {
      mensagem.innerHTML = ` <h2> Hora do dormes </h2>`
      horas.innerText = `Agora são ${hour}h da noite
      com ${min} minutos e 
      exatos ${sec} segundos.`
      img.src = "img/boanoite.jpg"
    } else {
      mensagem.innerHTML = ` <h2> Vai dormir po. </h2>`
      horas.innerText = `Agora são ${hour}h da madruga
      com ${min} minutos e 
      exatos ${sec} segundos.`

      img.src = "img/boamadrugada.jpg"
    }
  }, 1000)
}

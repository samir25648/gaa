
const circles = document.querySelectorAll('.circle')
const circles2 = document.querySelectorAll('.circle2')
let activeLight = 0;
let activeLight2 = 2;

setInterval(() => {
  changeLight();
}, 1000);

function changeLight() {
  circles[activeLight].className = 'circle';
  circles2[activeLight2].className = 'circle2';
  activeLight++;
  activeLight2--;

  
  if(activeLight > 2) {
    activeLight = 0;
    activeLight2 = 2
  }
  
  const currentLight = circles[activeLight]
  const currentLight2 = circles2[activeLight2]
  
  currentLight.classList.add(currentLight.getAttribute('color'));
  currentLight2.classList.add(currentLight2.getAttribute('color'));
}

function autos_tiempo() {
  let carrilNorte = parseInt(prompt('Ingrese el número de autos del carril Norte:'));
  let carrilSur = parseInt(prompt('Ingrese el número de autos del carril Sur:'));
  let carrilEste = parseInt(prompt('Ingrese el número de autos del carril Este:'));
  let carrilOeste = parseInt(prompt('Ingrese el número de autos del carril Oeste:'));

  tiempoVertical = (carrilNorte + carrilSur) * 3
  tiempoHorizontal =  (carrilEste + carrilOeste) * 3

  if(tiempoVertical >= tiempoHorizontal) {
    alert("Primero se ponen en verde los semáforos de los carriles norte y sur con un tiempo de: " + 
    tiempoVertical + " segundos" + "\nLuego se ponen en verde los semáforos de los carriles este y oeste con un tiempor de: " + 
    tiempoHorizontal + " segundos")   
  }
  else{
    alert("Primero se ponen en verde los semáforos de los carriles este y oeste con un tiempo de: " + 
    tiempoHorizontal + " segundos" + "\nLuego se ponen en verde los semáforos de los carriles norte y sur con un tiempor de: " + 
    tiempoVertical + " segundos") 
  }
}
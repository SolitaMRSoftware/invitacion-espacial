////codigo contador 

const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$mensajeFinal = document.querySelector('.final');


//fecha futura

const contadorDias = new Date('12 11, 2022 21:07:00').getTime();

let interval = setInterval(function(){
    //obtener fecha actual
    const now = new Date().getTime();

    //obtener las distancias entre ambas fechas
    let distance = contadorDias - now;

    //calcular a dias, horas, minutos, segundos
    let days = Math.floor(distance / (1000 * 60 * 60 *24)) ;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    //escribir resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //cuando llega a cero
    if(distance < 0){
        clearInterval(interval);
        $mensajeFinal.style.transform = 'translateY(0)';
    }
}, 1000);
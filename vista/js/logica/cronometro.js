const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');

const preparacion = document.getElementById('preparacion');
const actividad = document.getElementById('actividad');
const descanso = document.getElementById('descanso');
const series = document.getElementById('series');
const rondas = document.getElementById('rondas'); 

/* var tpreparacion = preparacion.value;
var tactividad = actividad.value;
var tdescanso = descanso.value;
var tseries = series.value;
var trondas = rondas.value; */
//TT=((tdescanso+tactividad)series)+tpreparacion)rondas
let TT = 0;
let stopwatchInterval;
let runningTime = 0;
var tiempoimprimible = TT+" ";





setInterval(function(){
    var tpreparacion = Number(preparacion.value);
    var tactividad = Number(actividad.value);
    var tdescanso = Number(descanso.value);
    var tseries = Number(series.value);
    var trondas = Number(rondas.value);
    //TT = Number(tpreparacion);
    TT = (((tdescanso+tactividad)*tseries)+tpreparacion)*trondas;

    var tiempoimprimible = secondsToString(TT);								
    $("#TT").html(tiempoimprimible);	 
    //alert(tpreparacion);

},300); 

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
    
}

const pause = () => {    
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
    
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}

const start = () => {
    let tiempoRotacion = "rotacion "+20+"s linear infinite";
    secondsSphere.style.animation = tiempoRotacion;
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}

function secondsToString(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return hour + ':' + minute + ':' + second;
}
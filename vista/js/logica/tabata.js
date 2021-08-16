let array = Array.from({length: 20}, (v, k) => (k+1)*2);
let pos = 0;
let arrayEjerciciosPorSeries = []

let tiempoTotalIntervalo, tiempoTotal;

let arrPeriods = [], arrPeriodsAux = [], index = 0, i=0;
let namePeriods =[];

let idUsuarioGoogle = localStorage.getItem('id')
if(idUsuarioGoogle !== null){
  $("#nombreUsuario").text(localStorage.getItem('name'))
  $("#imagenPerfil").attr("src",localStorage.getItem('image'))
}

$("#cerrarSesion").on('click',function(){
  cerrarSesion()
})

let preparationInput = document.querySelector('input.range.preparation'),
    activityInput    = document.querySelector('input.range.activity'),
    restInput        = document.querySelector('input.range.rest'),
    roundsInput      = document.querySelector('input.range.rounds'),
    seriesInput      = document.querySelector('input.range.series')
;

let preparationSpan = document.querySelector('span.value.preparation'),
    activitySpan    = document.querySelector('span.value.activity'),
    restSpan        = document.querySelector('span.value.rest'),
    roundsSpan      = document.querySelector('span.value.rounds'),
    seriesSpan      = document.querySelector('span.value.series')
;

let timerArea     = document.querySelector('.timer'),
    currentArea   = document.querySelector('.current'),
    serieActual   = document.querySelector('.serie'),
    botonIniciar  = document.querySelector('.iniciar'),
    botonPausar   = document.querySelector('.pausar'),
    botonDetener  = document.querySelector('.detener'),
    botonGuardar  = document.querySelector('.guardar');

let isRunning;
let interval;

initValues();
initEvents();
relacionarSeriesConEjercicios();

function initValues() {
  isRunning = false;

  preparationInput.min = 1;
  activityInput.min = 1;
  restInput.min = 1;
  roundsInput.min = 1;
  seriesInput.min = 1;

  preparationInput.max = 10;
  activityInput.max = 60;
  restInput.max = 60;
  roundsInput.max = 20;
  seriesInput.max = 20;


  let url_string = window.location.href;
  let url = new URL(url_string);
  let preparacion = url.searchParams.get("preparacion");
  let actividad = url.searchParams.get("actividad");
  let descanso = url.searchParams.get("descanso");
  let series = url.searchParams.get("series");
  let rondas = url.searchParams.get("rondas");
  let nombre = url.searchParams.get("nombre");
  let idTabata = url.searchParams.get("idTabata");

  if(preparacion != null){
    document.querySelector('#crear').innerHTML = nombre;
    preparationInput.value = preparacion;
    activityInput.value = actividad;
    restInput.value = descanso;
    roundsInput.value = rondas;
    seriesInput.value = series;

    verEjerciciosGuardados(idTabata);

  }else{
    preparationInput.value = 5;
    activityInput.value = 20;
    restInput.value = 10;
    roundsInput.value = 8;
    seriesInput.value = 9;
  }

  preparationSpan.innerHTML = preparationInput.value;
  activitySpan.innerHTML = activityInput.value;
  restSpan.innerHTML = restInput.value;
  roundsSpan.innerHTML = roundsInput.value;
  seriesSpan.innerHTML = seriesInput.value;

  timerArea.innerHTML = "0";
  currentArea.innerHTML = '0 / 0';
}

function verEjerciciosGuardados(idTabata){
  $.ajax({
    type: "GET",
    data: {
    idTabata:idTabata},
    url: "../controlador/accion/act_verEjerciciosGuardados.php",
    success: function(data){
      let array = JSON.parse(data);
      array.forEach(function(object) {
        objetoEjercicio = {nombreEjercicio: object.nombre, nombreImagen: object.imagen, idEjercicio: object.idEjercicio}
        arrayEjerciciosPorSeries.push(objetoEjercicio)

      });
  }})
}

function initEvents() {

  preparationInput.oninput = function() {
    preparationSpan.innerHTML = preparationInput.value;
  };

  activityInput.oninput = function() {
    activitySpan.innerHTML = activityInput.value;
  };

  restInput.oninput = function() {
    restSpan.innerHTML = restInput.value;
  };

  roundsInput.oninput = function() {
    roundsSpan.innerHTML = roundsInput.value;
  };

  seriesInput.oninput = function() {
    seriesSpan.innerHTML = seriesInput.value;
  };


  botonIniciar.onclick = function() {
    deshabilitarBarras(true);

    if(!isRunning) {
      isRunning = true;

      runTabata(preparationInput.value, activityInput.value, restInput.value, roundsInput.value);

      tiempoTotal = (parseInt(preparationInput.value, 10) + parseInt(activityInput.value, 10)  * parseInt(seriesInput.value, 10) + parseInt(restInput.value, 10) * (parseInt(seriesInput.value, 10)  - 1) )  * parseInt(roundsInput.value, 10);

      tiempoTotalIntervalo = setInterval(function(){

      document.querySelector('#tiempoTotal').innerHTML = `Tiempo total: ${tiempoTotal} seg`;

      //Habilitar botones Pausar y Detener
      botonPausar.disabled = false;
      botonDetener.disabled = false;
      botonIniciar.disabled = true;

      if(tiempoTotal === 0){
        clearInterval(tiempoTotalIntervalo);
      }

      }, 1000);

    }
  };

  botonDetener.onclick = function() {
      isRunning = false;
      clearInterval(interval);
      timerArea.innerHTML = '0';
      currentArea.innerHTML =  "0 / 0";

      $("#imagenEjercicio").attr("hidden",true);

      deshabilitarBarras(false);

      botonPausar.disabled = true;
      botonDetener.disabled = true;
      botonIniciar.disabled = false;

      document.querySelector('.serie').innerHTML= "";
      document.querySelector('#tiempoTotal').innerHTML = "";
      index = 0;
      i = 0;
      pos = 0;

      clearInterval(tiempoTotalIntervalo);
  };

  botonPausar.onclick = function(e) {
    e.preventDefault();

    if(!isRunning) {
      botonPausar.innerHTML = "Pausar";
      isRunning = true;

    } else {
      isRunning = false;
      botonPausar.innerHTML = "Reanudar";

    }
  };
}


function runTabata(preparation, activity, rest, rounds) {

  arrPeriods = [parseInt(preparation, 10)];
  namePeriods = ["Preparándose "];
  for(let i = 0; i < parseInt(rounds, 10); i++) {

    arrPeriods.push(parseInt(activity, 10)+1);
    arrPeriods.push(parseInt(rest, 10)+1);

    namePeriods.push("Trabajando la");
    namePeriods.push("Descansando la");
  }
  runTimer();
}

function runTimer() {

  if(isRunning){
  arrPeriodsAux = arrPeriods.slice();
  }

  interval = window.setInterval(function() {

    timerArea.innerHTML = arrPeriodsAux[index];

    if(isRunning){

    tiempoTotal--;

    currentArea.innerHTML = Math.floor(((index + 1) / 2)) + " / " + (arrPeriods.length - 1) / 2;

    if(arrayEjerciciosPorSeries[i] === undefined){
      serieActual.innerHTML = namePeriods[index] + " Serie "+(i+1)
    }else{
      serieActual.innerHTML = namePeriods[index] + " Serie "+(i+1)+"<br>"+arrayEjerciciosPorSeries[i].nombreEjercicio

    $("#imagenEjercicio").attr("src","img/"+arrayEjerciciosPorSeries[i].nombreImagen);
    $('#imagenEjercicio').removeAttr('hidden');
  }

    if(isNaN(timerArea.innerHTML)){
      i = 0;
      index = 0;
      pos = 0;
      timerArea.innerHTML = "0";
      currentArea.innerHTML = "0 / 0";
      serieActual.innerHTML = "";
      $("#imagenEjercicio").attr("hidden",true);

      isRunning = false;

      deshabilitarBarras(false);

      botonPausar.disabled = true;
      botonDetener.disabled = true;
      botonIniciar.disabled = false;
      clearInterval(interval);

    }

    if(arrPeriodsAux[index] === 1) {
    arrPeriodsAux = arrPeriods.slice();

    if(index < arrPeriods.length) {

        if(index > 0){
            if(index === array[pos] && i < parseInt(seriesInput.value, 10)){

              i++;
              index = array[pos] - 1;

              if(i === parseInt(seriesInput.value, 10)) {

                index = array[pos] + 1;
                pos++;
                i = 0;
              }
            }else{
              index++;
            }

        }else{
          index++;
        }
      }
    }
    arrPeriodsAux[index] = arrPeriodsAux[index]-1;
    }

  }, 1000);

}

function abrirSweetAlert(){
  Swal.fire({
    title: 'Escribe el nombre de esta tabata',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
    showLoaderOnConfirm: true,
    preConfirm: (nombreTabata) => {
      guardarTabata(nombreTabata);
      return true;
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: `Guardado exitosamente`
      })
    }
  })
}

function guardarTabata(nombreTabata){

  let preparacion = document.querySelector('span.value.preparation').innerHTML;
  let actividad = document.querySelector('span.value.activity').innerHTML;
  let descanso = document.querySelector('span.value.rest').innerHTML;
  let series = document.querySelector('span.value.series').innerHTML;
  let rondas = document.querySelector('span.value.rounds').innerHTML;

  let http = new XMLHttpRequest();
  let url = '../controlador/accion/act_guardarTabata.php';
  let params = 'nombre='+nombreTabata+'&tPreparacion='+preparacion+'&tActividad='+actividad+'&tDescanso='+descanso+'&numSeries='+series+'&numRondas='+rondas+'';

  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
        guardarEjercicios(parseInt(this.responseText.substr(1).slice(0, -1), 10))
      }
  }
  http.send(params);
}

function guardarEjercicios(idTabata){

  $.ajax({
    type: "POST",
    data: {
    arrayEjerciciosPorSeries:arrayEjerciciosPorSeries,
    idTabata:idTabata},
    url: "../controlador/accion/act_guardarEjercicios.php",
    success: function(){

  }})

}

function deshabilitarBarras(variable){
  preparationInput.disabled = variable;
  activityInput.disabled = variable;
  restInput.disabled = variable;
  roundsInput.disabled = variable;
  seriesInput.disabled = variable;
}

function relacionarSeriesConEjercicios(){

     $('.tutorials').on("click", function(e){

      $.ajax({url: "../controlador/accion/act_verEjercicios.php",
        success: function(result){

          abrirModal(JSON.parse(result));
        }

      });
     });
}

function abrirModal(result)
{

    let nombresEjercicios = ''
    for(let j = 0; j < result.length; j++){
      nombresEjercicios+='<a class="dropdown-item" href="#">'+result[j].nombre+'</a><span hidden>'+result[j].imagen+'</span><span hidden>'+result[j].idEjercicio+'</span>'
    }


    let camposSeriesEjercicios = ''

    if(arrayEjerciciosPorSeries.length > 0){
      for(let j = 0; j < seriesInput.value; j++){
        camposSeriesEjercicios += '<div style="margin-bottom:10px; text-align:center;">'
           +'<span style="margin-right:10px;">Serie '+(j+1)+'</span>'
           +'<span class="dropdown">'
           +'<button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
             +arrayEjerciciosPorSeries[j].nombreEjercicio
           +'</button>'
           +'<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'
             +nombresEjercicios
           +'</div>'
         +'</span>'
         +'</div>'
       }
    }else{
      for(let j = 0; j < seriesInput.value; j++){
        camposSeriesEjercicios += '<div style="margin-bottom:10px; text-align:center;">'
           +'<span style="margin-right:10px;">Serie '+(j+1)+'</span>'
           +'<span class="dropdown">'
           +'<button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
             +'Ejercicio'
           +'</button>'
           +'<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'
             +nombresEjercicios
           +'</div>'
         +'</span>'
         +'</div>'
       }
    }



    $("#idMyModal").empty();
    let modal ='<div class="modal-dialog" role="document">'
    +'<div class="modal-content">'
    +'<div class="modal-header">'
        +'<h5 class="modal-title" id="exampleModalLabel">Añadir ejericicios</h5>'
        +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
          +'<span aria-hidden="true">&times;</span>'
        +'</button>'
      +'</div>'
      +'<div id="ejercicios" class="modal-body">'

      +camposSeriesEjercicios

      +'</div>'
      +'<div class="modal-footer">'
        +'<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>'
        +'<button id="guardarEjercicios" type="button" class="btn btn-primary">Guardar</button>'
      +'</div>'
    +'</div>'
  +'</div>';
    $("#idMyModal").append(modal);
    $("#idMyModal").modal('show');

    $("a.dropdown-item").on("click",function(){
      $(this).closest("div.dropdown-menu").prev().text("")
      $(this).closest("div.dropdown-menu").prev().append("<span class='nombreEjercicio'>"+$(this).text()+"</span>")
      $(this).closest("div.dropdown-menu").prev()
      .append("<span hidden>"+$(this).next().text()+"</span>")
      $(this).closest("div.dropdown-menu").prev()
      .append("<span hidden>"+$(this).next().next().text()+"</span>")
    })

    let objetoEjercicio = {};

    $("#guardarEjercicios").on("click",function(){
      arrayEjerciciosPorSeries.length = 0;

      $("#ejercicios button.btn-secondary span.nombreEjercicio").each(function( index ) {
        objetoEjercicio = {nombreEjercicio: $(this).text(), nombreImagen: $(this).next().text(), idEjercicio: $(this).next().next().text()}
        arrayEjerciciosPorSeries.push(objetoEjercicio)
      });

      $('#idMyModal').modal('hide');
    })
}

function cerrarSesion(){

  if(localStorage.getItem('id') !== null){
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('image');
  }
}

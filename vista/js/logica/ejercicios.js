let index = 0;

$(document).ready(function() { 
    verEjerciciosPorTipo()
    let idUsuarioGoogle = localStorage.getItem('id')
    if(idUsuarioGoogle !== null){
        $("#nombreUsuario").text(localStorage.getItem('name'))
        $("#imagenPerfil").attr("src",localStorage.getItem('image'))
    }
})

function verEjerciciosPorTipo(){

     $.ajax({url: "../controlador/accion/act_verEjercicioPorTipo.php",
        success: function(result){
            
          insertarEjerciciosEnAcordeon(JSON.parse(result))
      }})
}

function insertarEjerciciosEnAcordeon(ejercicios){

    let tiposejerciciosinsertados = []
    let nombreEjercicios = [];
    for(j=0;j<ejercicios.length;j++){

        if(tiposejerciciosinsertados.indexOf(ejercicios[j].idEjercicio) === -1){
            
            tiposejerciciosinsertados.push(ejercicios[j].idEjercicio)
            
            nombreEjercicios.length = 0;

            for(let k=0;k<ejercicios.length;k++){
                 if(ejercicios[j].idEjercicio === ejercicios[k].idEjercicio)
                    nombreEjercicios.push(ejercicios[k].nombre)
            }
            
            let nombreEjerciciosLista = '<table style="margin-left:auto; margin-right:auto; font-family: arial, sans-serif; border-collapse: collapse;">'
                    +'<tr>'
                    +'<th  width="200"  style="border: 1px solid #dddddd; text-align: left;padding: 8px;">Nombre ejercicio</th>'
                    +'<th  width="100"  style="border: 1px solid #dddddd; text-align: left;padding: 8px;">Imagen</th>'
                    +'<th  width="100"  style="border: 1px solid #dddddd; text-align: left;padding: 8px;">Video</th>'
                    +'</tr>'

            for(let k=0;k<nombreEjercicios.length;k++){
                
                nombreEjerciciosLista +='<tr>'
                    +'<td  width="200"  style=" border: 1px solid #dddddd; text-align: left;padding: 8px;">'+nombreEjercicios[k]+'</td>'
                    +'<td width="20" style="border: 1px solid #dddddd; text-align: left;padding: 8px;"><img style="margin-left: auto; margin-right: auto;  width: 195px;" src="img/'+ejercicios[index].imagen+'"></td>'
                    +'<td width="20" style="border: 1px solid #dddddd; text-align: left;padding: 8px;"><iframe src="'+ejercicios[index].video+'"></iframe></td>'
                    +'</tr>'
                    index++;
            }
            
            nombreEjerciciosLista +="</table>"

            $("#accordion").append('<div class="card">'
            +'<div class="card-header collapsed" id='+ejercicios[j].idEjercicio+' data-toggle="collapse" data-target=#'+ejercicios[j].idTipoEjercicio+' aria-expanded="false" aria-controls='+ejercicios[j].idTipoEjercicio+'>'
                +'<h5 class="mb-0">'
                    +ejercicios[j].idTipoEjercicio
                +'</h5>'
            +'</div>'
            +'<div id='+ejercicios[j].idTipoEjercicio+' class="collapse" aria-labelledby='+ejercicios[j].idEjercicio+' data-parent="#accordion">'
                +'<div class="card-body">'
                +nombreEjerciciosLista
                +'</div>'
            +'</div>'
        +'</div>');
        }
    }

  
}


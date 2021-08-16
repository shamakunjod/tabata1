$(document).ready(function() { 
    verUsuarios()
    
})

function verUsuarios(){
    $.ajax({url: "../controlador/accion/act_verUsuarios.php",
    success: function(result){
        insertarUsuariosEnTabla(JSON.parse(result))
}})
}

function insertarUsuariosEnTabla(result){
    let usuarios = ''

    $.each(result, function(i) {

        usuarios +='<tr id='+result[i].idUsuario+'>'
        +'<td width="100"  style=" border: 1px solid #dddddd; text-align: left;padding: 8px;">'+result[i].nombre+'</td>'
        +'<td width="20" style="border: 1px solid #dddddd; text-align: left;padding: 8px;">'+result[i].correo+'</td>'
        +'<td width="20" style="border: 1px solid #dddddd; text-align: left;padding: 8px;">'+result[i].password+'</td>'
        +'<td width="20" style="border: 1px solid #dddddd; text-align: left;padding: 8px;">'+result[i].telefono+'</td>'
        +'<td width="20" style="border: 1px solid #dddddd; text-align: left;padding: 8px;">'+result[i].fechaNacimiento+'</td>'
        +'<td width="10" style="border: 1px solid #dddddd; text-align: left;padding: 8px;">'+result[i].sexo+'</td>'
        +'<td width="20" style="border: 1px solid #dddddd; text-align: left;padding: 8px;">'+result[i].peso+'</td>'
        +'<td width="150" style="border: 1px solid #dddddd; text-align: left;padding: 8px;"><a href="#" class="editar mr-3 btn btn-info btn-md" role="button" aria-pressed="true">Editar</a>'
        +'<a href="../controlador/accion/act_eliminarUsuario.php?idUsuario='+result[i].idUsuario+'" class="btn btn-danger btn-md" role="button" aria-pressed="true">Eliminar</a></td>'
        +'</tr>'

    })

    $("#usuariosRegistrados tbody").append(usuarios)
    insertarDatosUsuarioEnModal()

}

function insertarDatosUsuarioEnModal(){
    $(".editar").on("click",function(){
        let idUsuario = $(this).closest("tr").attr("id")
      
        $.ajax({
            type: "POST",
            data: {idUsuario: parseInt(idUsuario, 10)},
            url: "../controlador/accion/act_verUsuarioPorId.php",
            success: function(data){
                let usuario = JSON.parse(data)
             
                $("#modalEditarUsuario").modal('show');

                $("#modalEditarUsuario input[name='idUsuario']").val(usuario.idUsuario)
                $("#modalEditarUsuario input[name='nombre']").val(usuario.nombre)
                $("#modalEditarUsuario input[name='correo']").val(usuario.correo)
                $("#modalEditarUsuario input[name='password']").val(usuario.password)
                $("#modalEditarUsuario input[name='telefono']").val(usuario.telefono)
                $("#modalEditarUsuario input[name='fechanac']").val(usuario.fechaNacimiento)

                if(usuario.sexo == 'F'){
                    $("#modalEditarUsuario .sexo option:eq(1)").prop('selected', true)
                }else{
                    $("#modalEditarUsuario .sexo option:eq(2)").prop('selected', true)
                }

                $("#modalEditarUsuario input[name='peso']").val(usuario.peso)
                
                if(usuario.administrador == 1){
                    $("#modalEditarUsuario .rol option:eq(1)").prop('selected', true)
                }else{
                    $("#modalEditarUsuario .rol option:eq(2)").prop('selected', true)
                }
              
          }})

    })
}

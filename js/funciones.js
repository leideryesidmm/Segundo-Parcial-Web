async function leerJSON(url) {

  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch(err) {
    
    alert(err);
  }
}

function leerPersonas(){
	var urlp="https://pruebas_madarme.gitlab.io/persistencia/pg_web/app_celulares_planes/personas_cedula_foto.json";
	leerJSON(urlp).then(datos=>{
		let cedula=parseInt(document.getElementById("cedula").value);
		console.log(cedula);
		let persona=buscarPersona(datos,cedula);
		console.log(persona);
		mostrarTabla1(persona);
		
})
}
function buscarPersona(datos,cedula){
	let persona;
	for (var i =0;i<datos.length-1; i++) {
		console.log(datos[i].CEDULA);
		if(datos[i].CEDULA==cedula){
			persona=datos[i];
		}
	}
	if(persona==null){
		alert("La cédula ingresada no se encuentra registrada");
		location.reload();
	}
	return persona;
}
function mostrarTabla1(persona){
	let tabla1="<table>"+
	"<tr>"+
	"<th>Nombre</th>"+
	"<th>Correo</th>"+
	"<th>Foto</th>"+
	"</tr>"+
	"<tr>"+
	"<td>"+persona.Nombres+"</td>"+
	"<td>"+persona.Correo+"</td>"+
	"<td><img id='foto2' src="+persona.URL_FOTO+" alt='foto'></td>"+
	"</tr><table><br><br><br>";
	document.getElementById("tabla1").innerHTML=tabla1;
}
function mostrarTabla2(persona){

}

function leerllamadas(cedula){
	var urll="https://pruebas_madarme.gitlab.io/persistencia/pg_web/app_celulares_planes/llamadas.json";
	leerJSON(urll).then(datos=>{
		let persona=buscarPersona(datos,cedula);
		console.log(persona);
		mostrarTabla2(persona);
		
})
}
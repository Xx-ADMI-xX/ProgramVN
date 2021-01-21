$(document).on("click","#btn_registrar",function(){

	let ln=$('#last_name').val();
	if (ln.trim().length<5) {
			Swal.fire({
			  position: 'top-end',
			  icon: 'error',
			  title: 'Apellidos incorrectos',
			  showConfirmButton: true,
			})
		$('#last_name').select();
		return false;
	}


	let n=$('#name').val();
	if (n.trim().length<5) {
			Swal.fire({
			  position: 'top-end',
			  icon: 'error',
			  title: 'Nombres incorrectos',
			  showConfirmButton: true,
			})
		$('#name').select();
		return false;
	}


	let un=$('#user').val();
	if (un.trim().length<5) {
			Swal.fire({
			  position: 'top-end',
			  icon: 'error',
			  title: 'Usuario incorrecto',
			  showConfirmButton: true,
			})
		$('#user').select();
		return false;
	}


	let a=$('#adress').val();
	if (a.trim().length<5) {
			Swal.fire({
			  position: 'top-end',
			  icon: 'error',
			  title: 'Dirección incorrecta',
			  showConfirmButton: true,
			})
		$('#adress').select();
		return false;
	}


	let p=$('#password').val();
	if (p.trim().length<5) {
			Swal.fire({
			  position: 'top-end',
			  icon: 'error',
			  title: 'Contraseña incorrecta',
			  showConfirmButton: true,
			})
		$('#password').select();
		return false;
	}
})

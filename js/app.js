var usuarioArray = [];

window.addEventListener("load", function() {
	var section = document.querySelector(".js-add");
	var caja = document.getElementsByClassName("caja")[0];
	var nombreUsuario = document.querySelector(".js-add form input[type=\"submit\"]");
	var formTitulo = document.getElementById("formTitulo");
	var titulo = document.getElementsByName("titulo")[0];
	var usuarioBitacora = document.getElementById("usuarioBitacora");

	var cajaTitulo = document.createElement("div");
	var texto = document.getElementsByClassName("texto")[0];
	var cita = document.getElementsByClassName("cita")[0];
	var meme = document.getElementsByClassName("meme")[0];
	var pastillas = document.getElementsByClassName("pastillas")[0];

	var textArea = document.createElement("textarea");
	textArea.rows = "10";
	textArea.classList.add("form-control");
	textArea.classList.add("estiloInput");
	var tituloTexto = document.createElement("input");
	tituloTexto.classList.add("form-control");
	tituloTexto.classList.add("estiloInput");

	var horario = document.createElement("div");
	var boton = document.createElement("button");
	boton.classList.add("btn");
	boton.classList.add("btn-secondary");

	var cajaPost = document.createElement("div");
	var botonHouse = document.createElement("button");
	botonHouse.classList.add("btn");
	botonHouse.classList.add("btn-warning");

	var cajaMeme = document.createElement("img");
	var botonMeme = document.createElement("button");
	botonMeme.classList.add("btn");
	botonMeme.classList.add("btn-secondary");

	formTitulo.classList.add("ocultar");
// añadiendo boton para crear titulo de usuario
	usuarioBitacora.addEventListener("click", function() {
		formTitulo.style.display = "block";
		usuarioBitacora.remove();
	})
// añadir input donde se creara el titulo de usuario
	nombreUsuario.addEventListener("click", function(e) {
		e.preventDefault();
		agregarTitulo();
	})
// funciones para titulo general
	function agregarTitulo() {
		formTitulo.insertBefore(cajaTitulo, formTitulo.childNodes[0]).innerText = titulo.value;;
		cajaTitulo.classList.add("titulo");
		titulo.remove();
		nombreUsuario.classList.add("ocultar");
	}

//situaciones de pagina
	texto.addEventListener("click", function(e) {
		e.preventDefault();
		caja.classList.add("imagenTexto");
		caja.insertBefore(tituloTexto, caja.childNodes[0]).placeholder = "Agregar título...";
		caja.appendChild(textArea).placeholder = "Agregar texto...";
		caja.appendChild(boton).innerText = "Publicar";
		caja.appendChild(botonHouse).innerText = "Atras";
		ocultar();
	})

	cita.addEventListener("click", function(e) {
		e.preventDefault();
		caja.insertBefore(tituloTexto, caja.childNodes[1]).placeholder = "Agrega el autor de la cita del día...";
		caja.insertBefore(textArea, caja.childNodes[0]).placeholder = "Agrega la cita del día...";
		caja.appendChild(boton).innerText = "Publicar";
		caja.appendChild(botonHouse).innerText = "Atras";
		ocultar();
	})

	meme.addEventListener("click", function(e) {
		e.preventDefault();
		caja.insertBefore(tituloTexto, caja.childNodes[0]).placeholder = "Agrega url de tu meme...";
		caja.insertBefore(cajaMeme, caja.childNodes[1]);
		caja.insertBefore(botonMeme, caja.childNodes[2]).innerText = "Publicar";
		caja.appendChild(botonHouse).innerText = "Atras";
		ocultar();
	})
	
	pastillas.addEventListener("click", function(e) {
		e.preventDefault();
		caja.insertBefore(tituloTexto, caja.childNodes[0]).placeholder = "Agregar título...";
		caja.appendChild(textArea).placeholder = "Agregar texto...";
		caja.appendChild(boton).innerText = "Publicar";
		caja.appendChild(botonHouse).innerText = "Atras";
		ocultar();
	})

	botonHouse.addEventListener("click", function() {
		botonHouse.remove();
		mostrar();
	});

	botonMeme.addEventListener("click", function(e) {
		e.preventDefault();
		tituloTexto.remove();
		botonMeme.remove();
		cajaMeme.setAttribute("src", tituloTexto.value);
	})

	function mostrar() {
		texto.classList.remove("ocultar");
		cita.classList.remove("ocultar");
		meme.classList.remove("ocultar");
		pastillas.classList.remove("ocultar");
		boton.remove();
		caja.classList.remove("imagenTexto");
		tituloTexto.remove();
		textArea.remove();
	}

	function ocultar() {
		texto.classList.add("ocultar");
		meme.classList.add("ocultar");
		cita.classList.add("ocultar");
		pastillas.classList.add("ocultar");
	}

// objeto constructor

	function Texto(titulo,text,horario) {
		this.titulo = titulo;
		this.text = text;
		this.horario = horario;
	}

// evento guardar valores, nuevo objeto e impresion de nuevo objeto
	boton.addEventListener("click", function(e) {
		e.preventDefault();
		var usuario = new Texto(tituloTexto.value, textArea.value, new Date().toLocaleTimeString());
		usuarioArray.push(usuario);
		caja.remove("textArea");
		caja.remove("tituloTexto");
		imprimirPost();
	});

	function imprimirPost(){
		for(usuario of usuarioArray) {
			for(propiedad in usuario){
				var nuevoTexto = document.createElement("div");
				nuevoTexto.classList.add("titulotexto");
				nuevoTexto.insertBefore(document.createTextNode(usuario[propiedad]), nuevoTexto.childNodes[0]);
                cajaPost.appendChild(nuevoTexto);
			};
		};
		section.appendChild(cajaPost);
	};
	imprimirPost();

})
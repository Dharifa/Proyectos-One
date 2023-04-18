//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"



	var button1 = document.querySelector(".boton1");
	var button2 = document.querySelector(".boton2")
	var input = document.querySelector(".inputTexto")
	var caja = document.querySelector(".areaDeTexto")
	var copiar = document.querySelector(".copiar")

	
	function Encriptar() {


		input.value = input.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");


		document.getElementById("rectanguloTexto").textContent = input.value;



		if (caja.value == "") {
	
			document.getElementById("imagen1").style.display = "inline";
			document.getElementById("imagen2").style.display = "inline";
			document.getElementById("imagen3").style.display = "inline";
			document.getElementById("copiar").style.display = "none"
			input.focus();			

		}


		else {




			document.getElementById("imagen1").style.display = "none";
			document.getElementById("imagen2").style.display = "none";
			document.getElementById("imagen3").style.display = "none";
			document.getElementById("copiar").style.display = "inline";
			input.focus()
			input.value = ""

		}
			
	}

	function Desencriptar() {

		input.value = input.value.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")

		document.getElementById("rectanguloTexto").textContent = input.value;
		
		
		if (caja.value == "") {
	
			document.getElementById("imagen1").style.display = "inline";
			document.getElementById("imagen2").style.display = "inline";
			document.getElementById("imagen3").style.display = "inline";
			document.getElementById("copiar").style.display = "none";
			input.focus();			

		}

		else {


			document.getElementById("imagen1").style.display = "none";
			document.getElementById("imagen2").style.display = "none";
			document.getElementById("imagen3").style.display = "none";
			document.getElementById("copiar").style.display = "inline";
			input.focus()
			input.value = ""			
		}
	}

	function copy() {
  		
  		content = document.getElementById("rectanguloTexto").innerHTML;

  		navigator.clipboard.writeText(content).then(() => {
  			console.log("texto copiado")
  		})

  		.catch(err => {
  			console.log("algo salio mal", err);
  		})


  	}

	button1.onclick = Encriptar;

	button2.onclick = Desencriptar;

	copiar.onclick = copy;

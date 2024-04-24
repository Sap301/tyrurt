
/*
 * solo validacion de solo numeros en el input
 */
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
}

/*
 * solo validacion de solo numeros y separador decimal en el input
 */
function isValidAmount(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    if (charCode != 46){
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
	}
}

/*
 *  * solo validacion de solo letras en el input
*/
function isLetter(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if ((charCode != 32 && charCode != 0 && charCode!=8 )  && !(charCode >= 65 && charCode <=122)) {
	          return false    
	}
}
/*
 * previene copiar y pegar en un input
 */
function dontCopyAndPaste(idComponent) {
	 var myInput = document.getElementById(idComponent);
	 myInput.onpaste = function(e) {
	 e.preventDefault();
	 }
}

/*
 * validar para no permitir el valor 0 en el input
 */
function validateNoZeroValue(idInput){
	 var myInput = document.getElementById(idInput);
	 if(myInput.value <= 0){
		 myInput.value="";
	 }
}


/**
 * permite caracteres alfanumericos en los input
 */
function IsAlphaNumeric(e) {
	var specialKeys = new Array();
	specialKeys.push(8); //Backspace
	specialKeys.push(9); //Tab
	specialKeys.push(46); //Delete
	specialKeys.push(36); //Home
	specialKeys.push(35); //End
	specialKeys.push(37); //Left
	specialKeys.push(39); //Right
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57 || keyCode== 32  ) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    //document.getElementById("error").style.display = ret ? "none" : "inline";
    return ret;
}


/**
 * Permite establecer un formato de dos cifras decimales para los componentes tipo input
 * Recibe como parametro el propio componenete al que se quiere formatear su valor
 */
function setTwoNumberDecimal(input) {
	if (isNaN(parseFloat(input.value))){
        input.value = "";
	} else {
        input.value = parseFloat(input.value).toFixed(2);
	}

}


function formatNum(num) {
	var str = num.toString().replace("$", ""), parts = false, output = [], i = 1, formatted = null;
	if (str.indexOf(".") > 0) {
		parts = str.split(".");
		str = parts[0];
	}
	str = str.split("").reverse();
	for (var j = 0, len = str.length; j < len; j++) {
		if (str[j] != ",") {
			output.push(str[j]);
			if (i % 3 == 0 && j < (len - 1)) {
				output.push(",");
			}
			i++;
		}
	}
	formatted = output.reverse().join("");
	return (formatted + ((parts) ? "." + parts[1].substr(0, 2) : ""));
}

function solo_letras_numeros(e) {
	key = e.keyCode || e.which;

	if ($k.inArray(key, [8, 9, 27, 13, 110, 190, 32, 241, 209]) !== -1 ||
		// Allow: Ctrl+A
		(key == 65 && e.ctrlKey === true) ||
		// Allow: Ctrl+C
		(key == 67 && e.ctrlKey === true) ||
		// Allow: Ctrl+X
		(key == 88 && e.ctrlKey === true)/* ||
     // Allow: home, end, left, right
     (key >= 35 && key <= 39)*/) {
		// let it happen, don't do anything
		return true;
	}


	if ((key >= 65 && key <= 90) ||
		(key >= 97 && key <= 122) ||
		(key >= 48 && key <= 57)
	) {
		//e.returnValue="";
		return true;
	}

	e.preventDefault();
	return false;
}




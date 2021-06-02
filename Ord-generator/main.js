// Hent inn ordlista
var nyListe = ordListe.slice();
var n = nyListe.length;

function genererOrd() {
	document.getElementById("word").style.backgroundColor = "white";
	document.getElementById("ord").style.backgroundColor = "white";
	
	index = Math.floor(Math.random() * (n - 1));
	document.getElementById("ord").innerHTML = nyListe[index];
	
	n--;
	
	if (n == -1){
		document.getElementById("ord").innerHTML = "Tomt for ord";
		document.getElementById("word").style.backgroundColor = "red";
		document.getElementById("ord").style.backgroundColor = "red";
		nyListe = ordListe.slice();
		n = nyListe.length;
	} else {
		nyListe.splice(index,1);
	}	
	
}

function startNedtelling() {
	var minutes = document.getElementById("min").value;
	var seconds = document.getElementById("sec").value;
	
	if (minutes < 0) {
		minutes = 0;
	} else if (minutes > 59) {
		minutes = 59;
	}
	
	if (seconds < 0) {
		seconds = 0;
	} else if (seconds > 59) {
		seconds = 59;
	}
	
	document.getElementById("countdownClock").innerHTML = "<label id='countdownLable'>" + minutes + ":" + seconds + "</label>";
	
	// Update the count down every 1 second
	var x = setInterval(function() {
		
		if (seconds == 0 && minutes > 0) {
			minutes--;
			seconds = 59;
		} else if (seconds > 0 && minutes >= 0){
			seconds--;
		} 
		
		document.getElementById("countdownLable").innerHTML = minutes + ":" + seconds;

		if (minutes == 0 && seconds == 0) {
			clearInterval(x);
			document.getElementById("countdownLable").innerHTML = "EXPIRED";
			// Vent i tre sekund
			setTimeout(function(){document.getElementById("countdownClock").innerHTML = "<input id='min' value='1' type='number' min='0' max='59' maxlength='2'> </input>" 
			+ "<span class='clockp'> : </span> <input type='number' value='0' id='sec' min='0' max='59' maxlength='2'> </input>";}, 3000);	
		}
	}, 1000);
}

var lagreParagraf;
function lagreOrd(){
	if (document.getElementById('ord').innerText.length != 0 && document.getElementById('ord').innerText != "Tomt for ord") {
		if (document.getElementById('tellp').innerText.length == 0){
			lagreParagraf = document.getElementById('ord').innerText;
		} else {
			lagreParagraf += "<br>" + document.getElementById('ord').innerText;
		}
		
		nullstillK = "<button type='button' id='nullstillKnapp' onclick='nullstill()' style='font-size: 15px;'>Nullstill</button>";
		
		document.getElementById('tellp').innerHTML = "<p>" + lagreParagraf + "</p>" + nullstillK;
		document.getElementById('tellp').style.visibility = 'visible';
		genererOrd();
	}
}

var glemParagraf;
function glemOrd(){
	if (document.getElementById('ord').innerText.length != 0 && document.getElementById('ord').innerText != "Tomt for ord") {
		if (document.getElementById('glemp').innerText.length == 0){
			glemParagraf = document.getElementById('ord').innerText;
		} else {
			glemParagraf += "<br>" + document.getElementById('ord').innerText;
		}
		
		nullstillK = "<button type='button' id='nullstillKnapp' onclick='nullstill()' style='font-size: 15px;'>Nullstill</button>";
		
		document.getElementById('glemp').innerHTML = "<p>" + glemParagraf + "</p>" + nullstillK;
		document.getElementById('glemp').style.visibility = 'visible';
		genererOrd();
	}
}

function nullstill(){
	document.getElementById('tellp').innerHTML = "";
	document.getElementById('tellp').style.visibility = 'hidden';
	document.getElementById('glemp').innerHTML = "";
	document.getElementById('glemp').style.visibility = 'hidden';
}

<!DOCTYPE<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Knygos</title>
	<style>
		#sarasas {
			float: left;
			text-align: left;
			border: 1px solid black;
			margins: 10px;
			padding: 10px;
			width:400px;
			height:500px;
			background-color:pink;
			position: relative;
		}
		
		h3 {
			color: blue;
			width: 100%;
			font-size: 200%;
			text-align: center;
			
		}
		
		#funkcijos {
			width: 500px;
			margin: 10px;
			padding: 10px;
			font-size: 150%;
			float: left;
		}
		#funkcijos input {
			position: relative;
			width: 200px;
			padding: 5px;
			
		}
		#funkcijos label {
			display: inline-block;
			width: 250px;
		}
		label[for=psl_sk_nuo] {
			color: red;
		}
		label[for=psl_sk_iki] {
			color: blue;
		}
		#rezultatai {
			float: left;
			text-align: left;
			border: 1px solid black;
			margins: 10px;
			padding: 10px;
			width:400px;
			height:300px;
			background-color:green;

		}
	
	
	</style>
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script src="knygu_sarasas.js"></script>
	<script src="knyga.class.js"></script>
	<script>
	
		$( document ).ready ( function() {  
		
			knygos = [];
			vidurkis = 0;

			function parodyti() {
			
				res_str = '';
				
				sar = document.getElementById ( 'sarasas' ); 
							
				for ( i = 0; i < lst_knygos.length; i++ ) {
							
					knygos.push ( new Knyga ( lst_knygos [ i ] ) ); 
					
					res_str += knygos[ i ].present() + '<br>';
				}
				
				// alert ( JSON.stringify ( document.getElementById( 'rezultatai' ).style ) );   --- ??
				
				sar.innerHTML = res_str;
			}
			
			function knygu_psl_vidurkis(){
			
				var 	psl_suma = 0,
					knygu_kiekis = 0;
					
				for ( i = 0; i < knygos.length; i++) {
				
					psl_suma += knygos [ i ].psl_skaicius;
					knygu_kiekis ++;
				}
				vidurkis = psl_suma / knygu_kiekis;
				sar.innerHTML  += '<br>Vidurkis: ' + vidurkis.toFixed(2);
			}
			function tikrinti() {
			
			
				nr_tinkamu_knygu = [];
				/**
				* duomenu įvedimas
				*/		
		  
				puslapiai_nuo = parseInt ( document.getElementById ( 'psl_nuo' ).value );			//priskiriama reiksme
				puslapiai_iki = parseInt ( document.getElementById ( 'psl_iki' ).value );	
				
				//skaičiavimai
							
				flag_pasiimti_min = true;
				
				t_knygos = -1; // reiksme -1 uztikrina kad parrenkant dezes, tokios nebus , tai bus mums tinkama deze
			
				for ( i = 0; i < knygos.length; i++ ) {
				
					if ( knygos[ i ].ar_intervale (puslapiai_nuo, puslapiai_iki)){

						nr_tinkamu_knygu. push ( i );
					}
				}
			
				
				 //rezultatu pateikimas 
				
				res_str = 'Puslapiai nuo: ' + puslapiai_nuo + ', puslapiai iki: ' + puslapiai_iki + '<br>';
				
				for ( i = 0; i < knygos.length; i++ ) {

					if ( nr_tinkamu_knygu.indexOf ( i ) != -1  ) { 	// nr_tinkamu_knygu.indexOf istraukia is  [ i ] !=-1; kuri  reiskia duoto skaiciaus pozicijas masyve
											 // simboliu masyvas, duotu simboliu eilute.. masyvas globaliai aprasytas, naudojamas virs fukction .
											//   indexOf yra metodas . funkcija priklausanti objektui vadinama  metodu 
											//, java ir javascripte masyvas yra objektas. objektas yra domenis apjunkti su tos domenis tvarkanciomis funkcijomis
						
						res_str += '"' + knygos[i].pav + '" ' + knygos[i].psl_skaicius + '<span class="tinkama"> Telpa </span>';
						
					} else {
					
						res_str += '"' + knygos[i].pav + '"' + knygos[i].psl_skaicius + '<span class="per_maza"> Netelpa</span>';				
					}
					
					if ( i == t_knygos ) {
					
						res_str += '"' + knygos[i].pav + '"' + knygos[i].psl_skaicius + '<span class="tinkama">daugiau</span>';					
					}
					res_str += '<br>'; 
				}
				rez = document.getElementById ( 'rezultatai' ); 
				
				rez.innerHTML = res_str;
			}
		});
	</script>
</head>
<body>
	<h3>Knygų sąrašas</h3>
	
		


	<div id="sarasas">
		
	</div> 	
	<div id="funkcijos">
		
		<label for="psl_sk_nuo" >Puslapių skaičius nuo </label>
		<input type="text" name="Nuo" id="psl_nuo" value="0">
		<label for="psl_sk_iki">Puslapių skaičius iki </label>
		<input type="text" name="Iki" id="psl_iki" value="0">
		<input type="button" value="Tikrinti" onClick="tikrinti()">
		<input type="button" value="Puslapių vidurkis" onClick="knygu_psl_vidurkis()">		
		<input type="button" value="Parodyti" onClick="parodyti()"> 
	</div>	
	<div id="rezultatai">
	
	</div>	


</body>
</html>
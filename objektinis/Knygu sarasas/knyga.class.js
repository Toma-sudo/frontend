
	class Knyga {  //klasse
		
		constructor(knyga) {  //parametrai
 
		 	// parametrai vadinami savibemis ir priskiriama this
			this.pav = knyga.pav;
			this.autorius = knyga.autorius;
			this.leidimo_metai = knyga.leidimo_metai;
			this.psl_skaicius = knyga.psl_skaicius;
		}
		
		present() {  			//metodai - taip vadinamos funkcijos priklausancios klasei
							// metodai dirba su savybemis per kreipini this. savybes bendros visems metodams 
			
			return '<br>' + 'Pavadinimas: "' + this.pav + '", autorius: ' + this.autorius + ', leidimo metai: ' + this.leidimo_metai + ', puslapiu skaicius: ' + this.psl_skaicius + '.';    //return apraso ka turi grazint ir kaip veikt ir parodo front ende
		}
		ar_intervale (puslapiai_nuo, puslapiai_iki){
			
			var ar_tilps = false;
			if ((this.psl_skaicius >= puslapiai_nuo) && (this.psl_skaicius <= puslapiai_iki)) {
				ar_tilps = true;}
			return ar_tilps;
		
		}	
		skirtum () {
			
			return Math.abs(this.psl_skaicius - puslapiu_sk)}
	}
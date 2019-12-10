
	class Miestas {  //klasse
		
		constructor(miestas) {  //parametrai
 
		 	// parametrai vadinami savibemis ir priskiriama this
			this.gyventoju_skaicius = miestas.gyventoju_skaicius
			this.plotas = miestas.plotas
		}
		
		present() {  			//metodai - taip vadinamos funkcijos priklausancios klasei
							// metodai dirba su savybemis per kreipini this. savybes bendros visems metodams 
			
			return 'plotas: ' + this.plotas + 'gyventoju_skaicius: ' + this.gyventoju_skaicius	+ 'tankis:' + this.tankis();    //return apraso ka turi grazint ir kaip veikt ir parodo front ende
		}
		
		tankis() {
		
			return this.plotas / this.gyventoju_skaicius;  //  return this sujungia padauginant visus matmenis, suskaiciojant turi
		}
		
		arYraRibose( tankis_nuo, tankis_iki ) {		//paimamos reiksmes

			var ar_yraRybose = false;   // kintamajam ar_tilps suteikiama klaidos reiksme to atveju jai ar tilps neatitinka dotus parametrus
			
			if ( ( tankis_nuo <= this.tankis() ) && ( tankis_iki >= this.tankis() ) ) { // paimamos reiksmes
			//suteikiama parametru pozicija nustatitose reiksmese / bus kartojama keleta kartu keiciant reiksmiu pozicijas.
			
				
					ar_yraRybose = true;	// kintamajam ar_tilps suteikiama tesos reiksme to atveju jai ar_tilps atitinka dotus parametrus
			
		 
			}
			
			return ar_yraRybose; 			// uzdaromas ciklas
		}
	}
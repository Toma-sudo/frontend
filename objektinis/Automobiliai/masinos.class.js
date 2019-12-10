
	class Masina {  //klasse
		
		constructor(masina) {  //parametrai
 
		 	// parametrai vadinami savibemis ir priskiriama this
			this.kuro_san_mieste = masina.kuro_san_mieste
			this.kuro_san_uzmiestij = masina.kuro_san_uzmiestij
		}
		
		present() {  			//metodai - taip vadinamos funkcijos priklausancios klasei
							// metodai dirba su savybemis per kreipini this. savybes bendros visems metodams 
			
			return ' - kuro_san_uzmiestij: ' + this.kuro_san_uzmiestij + ' - kuro_san_mieste: ' +  this.kuro_san_mieste +  ' - vidurkis:' + this.vidurkis();    //return apraso ka turi grazint ir kaip veikt ir parodo front ende
		}
		
		vidurkis() {
		
			return (this.kuro_san_mieste + this.kuro_san_uzmiestij) / 2;  //  return this sujungia padauginant visus matmenis, suskaiciojant turi
			//(this.kuro_san_mieste ) = 30% + (this.kuro_san_uzmiestij) = 100%; 
		}
		
		arYraRibose( sanaudos_nuo, sanaudos_iki, kuro_san_uzmiestij, kuro_san_mieste) {		//paimamos reiksmes

			var ar_yraRybose = false;   // kintamajam ar_tilps suteikiama klaidos reiksme to atveju jai ar tilps neatitinka dotus parametrus
			
			if (((sanaudos_nuo <= this.kuro_san_uzmiestij) 
			
				||
					(sanaudos_nuo <=  this.vidurkis())) 
				||
					(sanaudos_nuo >= this.vidurkis)
				||
					( sanaudos_iki <= this.vidurkis())) { 
						
						// paimamos reiksmes
				//suteikiama parametru pozicija nustatitose reiksmese 
				// bus kartojama keleta kartu keiciant reiksmiu pozicijas.
		
					ar_yraRybose = true;	// kintamajam ar_tilps suteikiama tesos reiksme to atveju jai ar_tilps atitinka dotus parametrus
			
			}
			
			return ar_yraRybose; 			// uzdaromas ciklas
		}
	} 

	class Automobilis {  //klasse
		
		constructor(automobilis) {  //parametrai
 
		 	//parametrai vadinami savibemis ir priskiriama this
			this.pav = automobilis.pav
			this.greitis = automobilis.greitis
			
		}
		
		present() {  			//metodai - taip vadinamos funkcijos priklausancios klasei
							//metodai dirba su savybemis per kreipini this. savybes bendros visems metodams 
			
			return ' Automobilio pavadinimas: ' + this.pav + ', greitis: ' +  this.greitis;    //return apraso ka turi grazint ir kaip veikt ir parodo front ende
		}
		
		atstumas(pateiktasLaikas) {
		
			return 'Atstumas: ' + (this.greitis * pateiktasLaikas);  //return this sujungia padauginant visus matmenis, suskaiciuojant turi
			
		}
		koordinates(xkordinate, pateiktasLaikas) {
			
			return 'X koordinate: ' + (xkordinate + atstumas(pateiktasLaikas));
		}
	} 
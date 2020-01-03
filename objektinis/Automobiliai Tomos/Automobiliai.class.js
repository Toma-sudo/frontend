 
	function Automobilis (automobilis) {  //klasse+
		
				
		// constructor {  //parametrai
 
		 	//parametrai vadinami savibemis ir priskiriama this
			this.pav = automobilis.pav;
			this.greitis = automobilis.greitis;
			this.funkcijos_reiksmes = [];
			this.lentele = automobilis.lentele;
			this.xkoordinate = automobilis.xkoordinate;
			this.visasKelias = 0;
			this.laikoTarpsnis = 0;	
			
		// }
		

	}
	
	/**	
	* sugeneruoja nuvaziuotų atstumų, užduotais laiko tarpsniais reikšmių sarašą this.funkcijos reiksmes
	*/
	Automobilis.prototype.atstumasKasLaikoTarpsni = function(visasKelias, laikoTarpsnis) {
			
		this.visasKelias = visasKelias;
		this.laikoTarpsnis = laikoTarpsnis;
		var t_max = (this.visasKelias * 60)/ this.greitis;
		var sk_reiksmiu = t_max / this.laikoTarpsnis;
		var t_tarp = 0;
		var s_tarp = 0;
	
		this.funkcijos_reiksmes.push ( {  x: t_tarp, y:  s_tarp } )
		for ( i = 1;  i < (sk_reiksmiu+1);  i++) {
			t_tarp += this.laikoTarpsnis;
			s_tarp = Math.abs(this.greitis * t_tarp/60);
			this.funkcijos_reiksmes.push ( {  x: t_tarp, y:  s_tarp } ); 
			console.log(this.funkcijos_reiksmes[i].x + ' ' + this.funkcijos_reiksmes[i].y);

		}
		return this.funkcijos_reiksmes;
	}

	


	function Autobusas (automobilis, marsrutas) {  
						
		  //parametrai
 
		 	//parametrai vadinami savibemis ir priskiriama this
			Automobilis.call (this, automobilis );
 			this.marsrutas = marsrutas;
	} 
	
	Autobusas.prototype.atstumasKasLaikoTarpsni = function(visasKelias, laikoTarpsnis) {
		
		this.visasKelias = visasKelias;
		this.laikoTarpsnis = laikoTarpsnis;
		var t_max = (this.visasKelias * 60)/ this.greitis;
		var sk_reiksmiu = t_max / this.laikoTarpsnis;
		var t_tarp = 0;
		var s_tarp = 0;
		
		this.funkcijos_reiksmes.push ( {  x: t_tarp, y:  s_tarp } )
		
		for ( i = 1;  i < (sk_reiksmiu+1);  i++) {
			
			t_tarp += this.laikoTarpsnis;
			s_tarp = this.greitis * t_tarp/60;
			
			for(y=0; y < this.marsrutas.stoteles.length;  y++){
				
				if (s_tarp > this.marsrutas.stoteles[y].atstumas){
					
					laikas_stotelese = Math.abs(this.marsrutas.stoteles[y].atstumas/this.greitis *60);
					this.funkcijos_reiksmes.push ( {  x: t_tarp-this.laikoTarpsnis+laikas_stotelese, y:  this.marsrutas.stoteles[y].atstumas });
					this.funkcijos_reiksmes.push ( {  x: t_tarp-this.laikoTarpsnis+laikas_stotelese+this.marsrutas.stoteles[y].st_laikas, y:  this.marsrutas.stoteles[y].atstumas });
				}
			}
			this.funkcijos_reiksmes.push ( {  x: t_tarp, y:  s_tarp } ); 
			console.log(this.funkcijos_reiksmes[i].x + ' ' + this.funkcijos_reiksmes[i].y);
		}
		return this.funkcijos_reiksmes;
	}

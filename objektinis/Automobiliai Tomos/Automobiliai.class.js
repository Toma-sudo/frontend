 
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
/*	
	Automobilis.prototype.present = function() {  			//metodai - taip vadinamos funkcijos priklausancios klasei
							//metodai dirba su savybemis per kreipini this. savybes bendros visems metodams 
			
		return ' Automobilio pavadinimas: ' + this.pav + ', greitis: ' +  this.greitis;    //return apraso ka turi grazint ir kaip veikt ir parodo front ende
	}
		

	Automobilis.prototype.reiksmes_intervale = function(visasKelias, laikoTarpsnis) {
			
			this.visasKelias = visasKelias;
			this.laikoTarpsnis = laikoTarpsnis;
			// this.tipas = tipas;
			// this.mars = document.getElementById ( 'marsrutas' ).value;
			
			// if(this.tipas == bendras){
						
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
			// }
			/* else{
			
				for(y=0; y < lst_marsrutu.length;  y++) {
					
					if(this.mars == lst_marsrutu.pav){
						
						for(j= 0; j < lst_marsrutu[y].stoteles.length; j++)
				
						var t_max = (this.visasKelias * 60)/ this.greitis;
						var sk_reiksmiu = t_max / this.laikoTarpsnis;
					
						var t_tarp = 0;
						var s_tarp = 0;
						for ( i = 0;  i < lst_marsrutu.stoteles;  i++) {
							 + lst_marsrutu[i].st_laikas
						
						this.funkcijos_reiksmes.push ( {  x: t_tarp, y:  x_prad } )
						
						for ( i = 1;  i < (sk_reiksmiu+1);  i++) {
							
							t_tarp += this.laikoTarpsnis;
							s_tarp = Math.abs(x_prad - this.greitis * t_tarp/60);
							this.funkcijos_reiksmes.push ( {  x: t_tarp, y:  s_tarp } ); 
							console.log(this.funkcijos_reiksmes[i].x + ' ' + this.funkcijos_reiksmes[i].y);
					
						}}
						
			* /
			return this.funkcijos_reiksmiu_lentele();
		}
		
	Automobilis.prototype.funkcijos_reiksmiu_lentele = function() {
		
			this.lentele = '<table><tr><th>Laikas</th><th>Atstumas</th></tr>';

			for ( i= 0; i < this.funkcijos_reiksmes.length; i++ ) {
					
				this.lentele += '<tr><td>' + this.funkcijos_reiksmes[ i ].x + '</td><td>' + this.funkcijos_reiksmes[ i ].y + '</td>';
				}
			this.lentele += '</table>';
			return this.lentele;		
		}
	*/	
	
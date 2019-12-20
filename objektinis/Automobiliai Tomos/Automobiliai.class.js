
	class Automobilis {  //klasse+
		
				
		constructor(automobilis) {  //parametrai
 
		 	//parametrai vadinami savibemis ir priskiriama this
			this.pav = automobilis.pav;
			this.greitis = automobilis.greitis;
			this.funkcijos_reiksmes = [];
			this.lentele = automobilis.lentele;
			this.xkoordinate = automobilis.xkoordinate;
			this.visasKelias = 0;
			this.laikoTarpsnis = 0;	
			
		}
		
		present() {  			//metodai - taip vadinamos funkcijos priklausancios klasei
							//metodai dirba su savybemis per kreipini this. savybes bendros visems metodams 
			
			return ' Automobilio pavadinimas: ' + this.pav + ', greitis: ' +  this.greitis;    //return apraso ka turi grazint ir kaip veikt ir parodo front ende
		}
		
		pradineKoordinate() {
			
			this.xkoordinate = 0;
			
						
			if (( i % 2) !=0) {
				
				this.xkoordinate = this.visasKelias;
			}
			return this.xkoordinate;
		}

		reiksmes_intervale(visasKelias, laikoTarpsnis) {
			
			this.visasKelias = visasKelias;
			this.laikoTarpsnis = laikoTarpsnis;
			

			var x_prad = this.pradineKoordinate();
						
			var t_max = (this.visasKelias * 60)/ this.greitis;
			var sk_reiksmiu = t_max / this.laikoTarpsnis;
			var t_tarp = 0;
			var s_tarp = 0;
			
			this.funkcijos_reiksmes.push ( {  x: t_tarp, y:  x_prad } )
			
			for ( i = 1;  i < (sk_reiksmiu+1);  i++) {
				
				t_tarp += this.laikoTarpsnis;
				s_tarp = Math.abs(x_prad - this.greitis * t_tarp/60);
				this.funkcijos_reiksmes.push ( {  x: t_tarp, y:  s_tarp } ); 
				console.log(this.funkcijos_reiksmes[i].x + ' ' + this.funkcijos_reiksmes[i].y);
		
			}
			return this.funkcijos_reiksmiu_lentele();
		}
		funkcijos_reiksmiu_lentele() {
		
				
			this.lentele = '<table><tr><th>x</th><th>y</th></tr>';

			for ( i= 0; i < this.funkcijos_reiksmes.length; i++ ) {
					
				this.lentele += '<tr><td>' + this.funkcijos_reiksmes[ i ].x + '</td><td>' + this.funkcijos_reiksmes[ i ].y + '</td>';
				}
			this.lentele += '</table>';
			return this.lentele;		
		}
		nupiesti () {
					
			var c = document.getElementById( 'funkcijos_grafikas' );
			var ctx = c.getContext( '2d' );
			
			var x_pradinis = this.funkcijos_reiksmes[ 0 ].x;
			var y_pradinis= this.visasKelias - this.funkcijos_reiksmes[ 0 ].y;
			ctx.moveTo ( x_pradinis, y_pradinis );
			
			for ( i = 0;  i <  this.funkcijos_reiksmes.length; i++ ) {

				var y_grafike =  this.visasKelias - this.funkcijos_reiksmes[ i ].y;
				ctx.lineTo (this.funkcijos_reiksmes[i].x, parseInt ( y_grafike ) );

			}
			ctx.stroke();
		}
	} 
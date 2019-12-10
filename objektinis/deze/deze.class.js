
	class Deze {  //klasse
		
		constructor ( deze ) {  //parametrai

			this.ilgis = deze.ilgis;		
			this.plotis = deze.plotis;	// parametrai vadinami savibemis ir priskiriama this
			this.aukstis = deze.aukstis;
		}
		
		present() {  			//metodai - taip vadinamos funkcijos priklausancios klasei
							// metodai dirba su savybemis per kreipini this. savybes bendros visems metodams 
			
			return 'ilgis: ' +  this.ilgis + ' aukštis: ' +  this.aukstis + ' plotis: ' + this.plotis + ' tūris: ' + this.turis();    //return apraso ka turi grazint ir kaip veikt
		}
		
		turis() {
		
			return this.ilgis * this.plotis * this.aukstis;  //  return this sujungia padauginant visus matmenis, suskaiciojant turi
		}
		
		arTilps( daikto_ilgis, daikto_plotis, daikto_aukstis ) {		//paimamos reiksmes

			var ar_tilps = false;   // kintamajam ar_tilps suteikiama klaidos reiksme to atveju jai ar tilps neatitinka dotus parametrus
			
			if ( ( daikto_ilgis * daikto_plotis * daikto_aukstis ) < this.turis() ) { // paimamos reiksmes
			
				if (  
						( ! ar_tilps )
					&& 
						( 
								daikto_ilgis < this.ilgis 
							&& 
								daikto_plotis < this.plotis			//suteikiama parametru pozicija nustatitose reiksmese / bus kartojama keleta kartu keiciant reiksmiu pozicijas.
							&&
								daikto_aukstis < this.aukstis
						)
				) {
				
					ar_tilps = true;	// kintamajam ar_tilps suteikiama tesos reiksme to atveju jai ar_tilps atitinka dotus parametrus
				}
						
				if (  
						( ! ar_tilps )
					&& 
						( 
								daikto_aukstis < this.aukstis
							&& 
								daikto_plotis < this.plotis
							&&
								daikto_ilgis < this.ilgis
						)
				) {
				
					ar_tilps = true;
				}				
				if (  
						( ! ar_tilps )
					&& 
						( 
								daikto_plotis < this.plotis
							&& 
								daikto_aukstis < this.aukstis
							&&
								daikto_ilgis < this.ilgis
						)
				) {
				
					ar_tilps = true;
				}				
				if (  
						( ! ar_tilps )
					&& 
						( 
								daikto_ilgis < this.ilgis
							&& 
								daikto_aukstis < this.aukstis
							&&
								daikto_plotis < this.plotis
						)
				) {
				
					ar_tilps = true;
				}				
				if (  
						( ! ar_tilps )
					&& 
						( 
								daikto_ilgis < this.auktis
							&& 
								daikto_ilgis < this.ilgis
							&&
								daikto_plotis < this.plotis
						)
				) {
				
					ar_tilps = true;
				}				
				if (  
						( ! ar_tilps )
					&& 
						( 
								daikto_plotis < this.plotis
							&& 
								daikto_ilgis < this.ilgis
							&&
								daikto_aukstis < this.aukstis
						)
				) {
				
					ar_tilps = true;
				}				
				
			}
			
			return ar_tilps; 			// uzdaromas ciklas
		}
	}
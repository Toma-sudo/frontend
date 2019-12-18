
	function Piesimas ( piesimo_sritis, rez, saraso_sritis ) {
			
		this.piesimo_srits  = piesimo_sritis;
		this.saraso_sritis = saraso_sritis;
		this.rez = rez;
			
		this.std_figuros = {
				
			apskritimas: new Apskritimas ( 0, 0, 0, 0, 'reiksmes_apskritimo' )
			, daugiakampis: new Daugiakampis ( '', 0, 'reiksmes_daugiakampio' )
			, trikampis: new Trikampis ('', 0, 'reiksmes_trikampio' )
		};
			
		this.figuros = [];
				
		this.prideti  = function ( figura1 ) {
				
			this.figuros.push ( figura1 );
		}
				
		this.piesti = function() {
															// rez.innerHTML +=  this.figuros.length + '<br>';
			for (z = 0; z < 5; z++) {
																	// rez.innerHTML += 'z: ' + z + '<br>';
				for ( i = 0; i < this.figuros.length; i++ ) {
															/*						
																rez.innerHTML +=
																	'i: ' + i 
																	+ ' z-index: -' + this.figuros [ i ].z_index + '-'
																	+ '<br>'
																;
															*/
					if ( parseInt (this.figuros [ i ].z_index ) == z ) {
							
															//	rez.innerHTML += '--- piešiam <br>';
						this.figuros [ i ].draw();
					}
				}
			}
		}
		this.surasyti= function() {
				
			this.saraso_sritis.innerHTML = '';
				
			for (i = 0; i < this.figuros.length; i++ ) {
					
				this.saraso_sritis.innerHTML += this.figuros[ i ].uzrasyti();
			}
		}
	}
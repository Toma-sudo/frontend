
	function Trikampis ( taskai, z_index, divas_reiksmiu ) {
			
		this.tasku_masyvas = [];  
				
		for ( i = 0; i < taskai.length; i+=2 ) {
				
			this.tasku_masyvas.push (
				new Taskas ( parseInt ( taskai [ i ] ), parseInt ( taskai [ i + 1 ] ) )
			);
		}
		this.z_index = z_index;
		this.divas_reiksmiu = divas_reiksmiu;
	}
	
	Trikampis.prototype = new Figura;
	
	Trikampis.prototype.draw = function() {
		
		piesinys.piesimo_srits.beginPath();											//		tasku_masyvas_str = "";				
		piesinys.piesimo_srits.moveTo ( this.tasku_masyvas [ 0 ].x, this.tasku_masyvas [ 0 ].y );
		
		for( i=1; i< this.tasku_masyvas.length; i++ ) {
													// 	tasku_masyvas_str += "x" + i + " "  + tasku_masyvas [ i ].x + " y" + i + " "  + tasku_masyvas [ i ].y + "\n";					
			piesinys.piesimo_srits.lineTo (  this.tasku_masyvas [ i ].x, this.tasku_masyvas [ i ].y  );
		}
		piesinys.piesimo_srits.stroke();	
		piesinys.piesimo_srits.fillStyle = 'blue'; 
		piesinys.piesimo_srits.fill();
		piesinys.piesimo_srits.closePath();
		
									// rez.innerHTML += 'nupiešiau ! daugiakampį<br>';				
	}
	
	Trikampis.prototype.uzrasyti  = function () {
	
		kampai = '';
	
		for (var  i = 0; i < this.tasku_masyvas.length; i+=1 ) {
		
			 kampai  += ' ( ' + tasku_masyvas [ i ].x + ' , ' + tasku_masyvas [ i ].y  +'  ) ';
		}			
	
		return 
		
				'trikampis: '
				+ ' kampai: ' + kampai
				+ Figura.uzrasyti()
			;
	}		